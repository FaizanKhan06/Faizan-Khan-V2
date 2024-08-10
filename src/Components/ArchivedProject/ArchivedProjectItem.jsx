import React from "react";
import Chips from "../Chips";

export default function ArchivedProjectItem({year, project, madeAt, builtWith, linkName, link}) {
  const words = project.split(" ");
  const var1 = words.slice(0, -1).join(" ");
  const var2 = words[words.length - 1];
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-primaryColorLight">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primaryColorLight hover:text-secondaryColor focus-visible:text-secondaryColor sm:hidden group/link text-base"
              href="https://www.emersoncollective.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Emerson Collective (opens in a new tab)"
            >
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
          </div>
          <div className="hidden sm:block">{project}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {builtWith.map((built) => (
            <Chips key={built} text={built} />
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primaryColorLight hover:text-secondaryColor focus-visible:text-secondaryColor group/link text-sm"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${linkName} (opens in a new tab)`}
            >
              <span>
                {" "}
                <span className="inline-block">
                  {linkName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
          </li>
        </ul>
      </td>
    </tr>
  );
}
