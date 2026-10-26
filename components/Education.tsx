"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData, educationsData, certificationsData } from "@/lib/data";
import { LuAward } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import type { ResumeItem } from "@/lib/types";

function ResumeColumn({
  heading,
  items,
}: {
  heading: string;
  items: ResumeItem[];
}) {
  return (
    <div className="flex-1">
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-sky-600 dark:text-sky-400">
        {heading}
      </h3>

      <ol className="relative border-l border-gray-200 dark:border-white/10">
        {items.map((item) => (
          <li key={item.title + item.org} className="relative pl-6 pb-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-sky-500 bg-slate-50 dark:border-sky-400 dark:bg-slate-800" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <h4 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
                {item.title}
              </h4>
              <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-400">
                {item.date ?? "Present"}
              </span>
            </div>

            <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-800 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400 transition"
                >
                  {item.org}
                </a>
              ) : (
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {item.org}
                </span>
              )}
              {" · "}
              {item.location}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const Education = () => {
  const { ref } = useSectionInView("Resume", 0.4);

  return (
    <section
      id="resume"
      ref={ref}
      className="w-full max-w-[64rem] px-4 sm:px-8 pt-20 pb-24"
    >
      <SectionHeading watermark="Resume">Education &amp; Experience</SectionHeading>

      <div className="flex flex-col md:flex-row gap-12 md:gap-14 text-left">
        <div className="flex-1">
          <ResumeColumn heading="Education" items={educationsData} />

          <h3 className="mt-12 mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-sky-600 dark:text-sky-400">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certificationsData.map((cert) => (
              <li
                key={cert.title}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-700/40"
              >
                <LuAward className="mt-0.5 shrink-0 text-lg text-sky-600 dark:text-sky-400" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition"
                        >
                          {cert.title} <FiArrowUpRight className="opacity-60" />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </p>
                    {cert.date && (
                      <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[0.8rem] text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ResumeColumn heading="Experience" items={experiencesData} />
      </div>
    </section>
  );
};

export default Education;
