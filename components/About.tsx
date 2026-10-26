"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.01,
    },
  },
};

const focusAreas = [
  "Machine Learning",
  "Deep Learning",
  "Graph Neural Networks",
  "Explainable AI",
  "NLP",
  "LLM Agents",
  "Model Deployment",
  "AI Application Development",
];

const details = [
  { label: "Location", value: "Melbourne, Australia" },
  { label: "Languages", value: "English, Tamil, Sinhala" },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-[64rem] px-4 sm:px-8 pt-20 pb-10"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      id="about"
    >
      <SectionHeading watermark="About">Who I Am</SectionHeading>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        <div className="flex-[3] text-[0.95rem] leading-7 text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            I build machine learning solutions that connect data, research and
            real world use, from data preparation and model development through
            to evaluation and deployment.
          </p>

          <p className="mb-4">
            My MSc research focused on an interpretable graph neural network for
            molecular toxicity prediction, combining deep learning with my
            chemistry background to explore not only what a model predicts, but
            why. My other projects span machine learning, deep learning, LLM
            powered agents using LangChain, and web applications built with
            React and Next.js.
          </p>

          <p>
            Before transitioning into AI, I spent seven years teaching science.
            Alongside my software development experience, this has strengthened
            my analytical thinking, problem solving, and ability to communicate
            complex ideas clearly. I aim to build AI solutions that are
            reliable, interpretable, and practical.
          </p>
        </div>

        <div className="flex-[2] text-sm leading-6">
          <div className="p-5 bg-white dark:bg-slate-700/40 border border-gray-200 dark:border-white/10 rounded-2xl">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-sky-600 dark:text-sky-400">
              Focus areas
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md bg-gray-100 dark:bg-white/10 px-2 py-0.5 text-xs leading-5 font-medium text-gray-700 dark:text-gray-300"
                >
                  {area}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-sky-600 dark:text-sky-400">
              Details
            </h3>
            <dl className="divide-y divide-gray-200 dark:divide-white/10">
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-gray-500 dark:text-gray-400">Email</dt>
                <dd className="text-right">
                  <a
                    href="mailto:rizmiyaamin@gmail.com"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    rizmiyaamin@gmail.com
                  </a>
                </dd>
              </div>
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between gap-4 py-2"
                >
                  <dt className="text-gray-500 dark:text-gray-400">
                    {item.label}
                  </dt>
                  <dd className="text-right text-gray-800 dark:text-gray-200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              className="mt-5 flex w-full items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium leading-5 text-white bg-gray-900 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-600 rounded-full outline-none transition"
              href="/CV.pdf"
              download
            >
              Download CV <HiDownload className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
