"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {

  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section 
    ref={ref}
    id="projects" 
    className="max-w-[45rem] text-center leading-8 px-4 pt-28 min-h-[100vh]">

      <div className="relative sm:mb-[90px]">
        <SectionHeading>My Creations</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-sky-500">
          PROJECTS
        </h1>
      </div>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects