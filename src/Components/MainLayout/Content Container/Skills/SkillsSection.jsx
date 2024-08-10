import React, { useState, forwardRef } from "react";
import Chips from "../../../Chips";

const SkillsSection = forwardRef(({ data }, ref) => {
  const [skills, setSkills] = useState(data.skills);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-headingBackGround/15 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primaryColorLight lg:sr-only">
          Skills
        </h2>
      </div>
      <div>
        <div
          className="inline-flex items-center leading-tight text-primaryColorLight font-semibold group"
          aria-label="View Full Project Archive"
        >
          <span className="border-b border-transparent pb-px transition motion-reduce:transition-none">
            Programming Languages
          </span>
        </div>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skills.programming_languages.map((skill, index) => (
            <Chips key={index} text={skill} />
          ))}
        </ul>

        <div
          className="mt-8 inline-flex items-center leading-tight text-primaryColorLight font-semibold group"
          aria-label="View Full Project Archive"
        >
          <span className="border-b border-transparent pb-px transition motion-reduce:transition-none">
            Libraries & Frameworks
          </span>
        </div>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skills.libraries_and_frameworks.map((skill, index) => (
            <Chips key={index} text={skill} />
          ))}
        </ul>

        <div
          className="mt-8 inline-flex items-center leading-tight text-primaryColorLight font-semibold group"
          aria-label="View Full Project Archive"
        >
          <span className="border-b border-transparent pb-px transition motion-reduce:transition-none">
            Tools & Platforms
          </span>
        </div>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skills.tools_and_platforms.map((skill, index) => (
            <Chips key={index} text={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
});

export default SkillsSection;
