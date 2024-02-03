"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsSet } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from 'next/image';


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


const Skills = () => {

  const { ref } = useSectionInView("Skills", 0.4);

  return (
     <section
      id="skills"
      ref={ref}
      className="max-w-[45rem] text-center leading-8 pt-28 min-h-[100vh]"
    >

      <div className="relative">
        <SectionHeading>What I Bring</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-sky-500">
        SKILLS
        </h1>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-5 gap-3  sm:mt-[90px]">
        {skillsSet.map((item, index) => (
          <motion.div
            className="border rounded-xl px-5 py-3 flex flex-col items-center justify-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <>
              <div className="flex items-center justify-center h-full mb-2 ">
                <Image
                  src={item.image}
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
          
              <p className="mt-auto text-xs text-gray-800 ">{item.skill}</p>
            </>
            
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills


