import { useState, useRef, useEffect } from "react";

export default function PortfolioHistoryDialog({ toggleDialog, data }) {
  const ref = useRef(null);
  const [projects, setProjects] = useState(data.pastPortfolios);

  useEffect(() => {
    const overlay = ref.current;
    if (overlay) {
      // Trigger reflow to apply transition
      overlay.style.opacity = '0';
      overlay.offsetHeight; // Trigger reflow
      overlay.style.transition = 'opacity 300ms';
      overlay.style.opacity = '1';
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  const handleClick = () => {
    const overlay = ref.current;
    if (overlay) {
      // Set opacity to 0 before closing the dialog
      overlay.style.opacity = '0';

      setTimeout(() => {
        toggleDialog();
      }, 300); // Matches the transition duration
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="DialogOverlay portal fixed left-0 top-0 z-40 h-screen w-screen bg-slate-900/10 backdrop-blur transition duration-300"
        style={{ opacity: 0, pointerEvents: "auto" }}
      >
        <div
          role="dialog"
          className="DialogContent fixed left-1/2 top-1/2 z-40 flex h-full w-full -translate-x-1/2 -translate-y-1/2 justify-center rounded sm:items-center"
          tabIndex="-1"
          style={{ pointerEvents: "auto" }}
        >
          <button
            className="absolute right-0 top-0 p-4 hover:text-slate-200 focus-visible:text-slate-200"
            aria-label="Close"
            type="button"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div style={{ perspective: "400px", display: "flex" }}>
            <div className="star-wars-skew">
              <h2
                id="radix-:R4l6H1:"
                className="mx-auto mb-12 max-w-xs text-center text-3xl font-semibold leading-tight tracking-tight text-secondaryColor lg:max-w-md lg:text-4xl"
              >
                Looking for a different site? Go back in time...
              </h2>
              <div className="flex justify-center">
                <ul className="inline-grid grid-cols-1 gap-2 md:grid-cols-2">
                  {projects.map((project, index) => (
                    <li key={index}>
                      <a
                        className="group relative block transition-all"
                        href={project.link}
                      >
                        <img
                          alt={`Screenshot of ${project.title}`}
                          loading="lazy"
                          width="180"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
                          src={project.image}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                          <h3 className="not-sr-only text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </a>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
