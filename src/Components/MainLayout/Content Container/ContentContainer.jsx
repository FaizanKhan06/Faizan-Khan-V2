import React, { useRef, useEffect, useCallback } from "react";
import AboutSection from "./About/AboutSection";
import ExperienceSection from "./Experience/ExperienceSection";
import ProjectsSection from "./Projects/ProjectsSection";
import SkillsSection from "./Skills/SkillsSection";
import FooterSection from "./Footer/FooterSection";
import PortfolioHistoryTrigger from "./Footer/PortfolioHistoryTrigger";

export default function ContentContainer({ setCurrentSection, data }) {
  const sectionsRef = useRef([]);

  // Callback to initialize IntersectionObserver
  const initializeObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value based on your needs
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setCurrentSection]);

  useEffect(() => {
    const setupObserver = setTimeout(() => {
      const cleanupObserver = initializeObserver();
      return cleanupObserver;
    }, 100); // Timeout to ensure DOM elements are available

    return () => clearTimeout(setupObserver);
  }, [initializeObserver]);

  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <AboutSection ref={(el) => (sectionsRef.current[0] = el)} data={data} />
      <ExperienceSection ref={(el) => (sectionsRef.current[1] = el)} data={data} />
      <ProjectsSection ref={(el) => (sectionsRef.current[2] = el)} data={data} />
      <SkillsSection ref={(el) => (sectionsRef.current[3] = el)} data={data} />
      <FooterSection data={data} />
      <PortfolioHistoryTrigger data={data} />
    </div>
  );
}
