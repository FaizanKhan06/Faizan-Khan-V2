import React, { useState } from 'react';

export default function TextHoverAnimation({ text, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split('');

  return (
    <span
      className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="transition duration-75 group-hover/korok:-translate-y-px"
          style={{
            transitionDelay: `${50 + index * 25}ms`,
            color: isHovered ? color : 'inherit', // Change color on hover
            transitionProperty: 'color, transform'
          }}
          aria-hidden="true"
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
