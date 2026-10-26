"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.4);

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full max-w-[64rem] px-4 sm:px-8 pt-20 pb-10"
    >
      <SectionHeading watermark="Skills">Tech Stack</SectionHeading>

      {/* one row per category: label on the left, skill chips on the right */}
      <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
        {skillCategories.map((category, index) => (
          <motion.div
            className="grid gap-3 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
            key={category.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <h3 className="flex items-center gap-2 self-start pt-1 text-sm font-semibold leading-5 text-gray-900 dark:text-gray-100">
              <category.icon className="text-lg text-sky-600 dark:text-sky-400" />
              {category.title}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {category.skills.map((item) => (
                <li
                  key={item.skill}
                  className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[13px] leading-5 text-gray-700 transition-colors hover:border-sky-500/60 hover:text-sky-700 dark:border-white/10 dark:bg-slate-700/40 dark:text-gray-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                >
                  <item.icon className="text-[15px] text-gray-500 dark:text-gray-400" />
                  {item.skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
