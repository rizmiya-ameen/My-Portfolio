"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import type { ProjectData } from "@/lib/types";

export default function Project({
  title,
  description,
  tags,
  category,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectData) {
  const isAI =
    category !== "Web App" &&
    category !== "Full-Stack Web App" &&
    category !== "Mobile App";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <article className="group flex flex-col h-full text-left bg-white dark:bg-slate-700/40 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition duration-300 hover:border-sky-500/60 dark:hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-900/5">
        {/* screenshot, cropped from the top; hidden on mobile */}
        <div className="hidden sm:block relative h-40 overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-700/60">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${title} screenshot`}
              quality={95}
              sizes="(min-width: 1024px) 360px, 50vw"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <TbBrain className="text-5xl text-gray-300 dark:text-gray-600" />
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
          <p
            className={clsx(
              "text-[0.65rem] font-semibold uppercase tracking-[0.12em] leading-5",
              isAI
                ? "text-indigo-600 dark:text-sky-400"
                : "text-sky-600 dark:text-sky-400"
            )}
          >
            {category}
          </p>
          <h3 className="mt-1.5 text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-2.5 text-[0.8rem] leading-[1.65] text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <ul className="flex flex-wrap gap-1.5 mt-5 mb-5">
            {tags.map((tag, index) => (
              <li
                className="rounded-md bg-gray-100 dark:bg-white/10 px-2 py-0.5 text-[0.68rem] leading-4 font-medium text-gray-600 dark:text-gray-300"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {(githubUrl || liveUrl) && (
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-gray-100 dark:border-white/10 text-[0.8rem] font-medium leading-5 text-gray-700 dark:text-gray-300">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} source code on GitHub`}
                  className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} live demo`}
                  className="flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  Live demo <FiArrowUpRight />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </motion.div>
  );
}
