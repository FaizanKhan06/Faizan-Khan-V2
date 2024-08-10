import { useState, useEffect, useRef } from 'react';

export default function MouseTrackingEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const multiplier = 0.03;

  useEffect(() => {
    const handleMouseMove = (event) => {
      targetPos.current = { x: event.clientX, y: event.clientY };
    };

    const updatePosition = () => {
      setMousePos((prevPos) => {
        const dx = targetPos.current.x - prevPos.x;
        const dy = targetPos.current.y - prevPos.y;
        return {
          x: prevPos.x + dx * multiplier,
          y: prevPos.y + dy * multiplier,
        };
      });

      rafRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(46, 11, 2, 1) 200px, transparent)`,
  };

  return (
    <>
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-50">
      <div
        className="absolute w-full h-full top-0 left-0 transition duration-300 -z-50"
        style={gradientStyle}
      ></div>
    </div>
    
    <div className="pointer-events-none fixed inset-0 transition duration-300 lg:absolute backdrop-blur-3xl -z-40"></div>

    </>
      
  );
}
