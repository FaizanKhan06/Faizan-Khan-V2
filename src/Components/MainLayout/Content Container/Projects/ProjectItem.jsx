import React from "react";
import Chips from "../../../Chips";

export default function ProjectItem({
  project,
  description,
  imgSrc,
  techUsed,
  link,
}) {
  const words = project.split(" ");
  const var1 = words.slice(0, -1).join(" ");
  const var2 = words[words.length - 1];
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-orange-950/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primaryColorLight hover:text-secondaryColor focus-visible:text-secondaryColor  group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Spotify Profile (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {var1}{" "}
                <span className="inline-block">
                  {var2}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {techUsed.map((tech) => (
              <Chips key={tech} text={tech} />
            ))}
          </ul>
        </div>
        <img
          alt={project}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          className="rounded border-2 border-primaryColorLight/10 transition group-hover:border-primaryColorLight/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={imgSrc}
        />
      </div>
    </li>
  );
}
