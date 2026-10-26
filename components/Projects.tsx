"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData, earlierProjects } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {

  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section 
    ref={ref}
    id="projects" 
    className="w-full max-w-[72rem] px-4 sm:px-8 pt-20 pb-10">

      <SectionHeading watermark="Projects">Featured Work</SectionHeading>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-7 px-7 py-6 text-center sm:text-left border border-dashed border-gray-300 dark:border-white/20 rounded-2xl">
        <div>
          <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
            More on GitHub
          </h3>
          <p className="mt-1 text-[0.8rem] leading-relaxed text-gray-600 dark:text-gray-400">
            Experiments, coursework and earlier React builds:{" "}
            {earlierProjects.map((project, index) => (
              <React.Fragment key={project.title}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 underline decoration-gray-300 underline-offset-2 hover:text-sky-600 hover:decoration-sky-600 dark:text-gray-200 dark:decoration-white/30 dark:hover:text-sky-400 dark:hover:decoration-sky-400 transition"
                >
                  {project.title}
                </a>
                {index < earlierProjects.length - 1 ? ", " : "."}
              </React.Fragment>
            ))}
          </p>
        </div>
        <a
          href="https://github.com/rizmiya-ameen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 px-5 py-2.5 text-[0.8rem] font-medium leading-5 text-white bg-gray-900 hover:bg-gray-700 dark:text-gray-900 dark:bg-gray-100 dark:hover:bg-white rounded-full transition"
        >
          <FaGithub className="text-base" /> Browse all projects
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  )
}

export default Projects