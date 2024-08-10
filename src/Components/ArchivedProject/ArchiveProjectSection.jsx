import { useState } from "react";
import ArchivedProjectItem from "./ArchivedProjectItem";
import { Link } from "react-router-dom";

export default function ArchiveProjectSection({data}) {
  const [projects, setProjects] = useState(data.ProjectsArchive);

  return (
    <>
      <div className="lg:py-24">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-secondaryColor"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Faizan Khan
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-primaryColorLight sm:text-5xl">
          All Projects
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-primaryColorLight">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-primaryColorLight">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primaryColorLight lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primaryColorLight lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-primaryColorLight sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <ArchivedProjectItem
                key={index}
                year={project.year}
                project={project.project}
                madeAt={project.madeAt}
                builtWith={project.builtWith}
                linkName={project.linkName}
                link={project.link}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
