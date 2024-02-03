"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData, educationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Education = () => {

  const { ref } = useSectionInView("Resume", 0.4);

  return (
    <section id="resume" ref={ref} className="px-5 sm:px-28 leading-7 py-28 min-h-[100vh] text-center">

      <div className="relative">
        <SectionHeading>Summary</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-sky-500">
        RESUME
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col items-center sm:items-start justify-center text-left sm:mt-[100px]">

        <div className="flex flex-col flex-1 sm:pr-10 mt-5 sm:mt-0"> 

          <h1 className="mb-4 sm:mb-7 text-2xl font-bold">My Education</h1> 

          <div className="border-l-2 border-sky-500 pl-2 sm:pl-5">
            {educationsData.map((item, index) => (

              <div 
                key={index}
              >
                
                <h3 className="font-semibold text-lg text-sky-600">{item.title}</h3>
                <p className="font-medium !mt-0 mb-5 text-[16px]">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-600 text-sm">
                  {item.description}
                </p>
                <hr className="w-full border-t-1 border-gray-300 my-3" />
                
              </div>

            ))}
          </div>
        </div>

        <div className="flex flex-col flex-1 sm:pr-0 mt-8 sm:mt-0">

          <h1 className="mb-4 sm:mb-7 text-2xl font-bold">My Experience</h1> 

          <div className="border-l-2 border-sky-500 pl-2 sm:pl-5">
            {experiencesData.map((item, index) => (

              <div 
                key={index}
              >
                
                <h3 className="font-semibold capitalize text-lg text-sky-600">{item.title}</h3>
                <p className="font-medium !mt-0 mb-5 text-[16px]">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-600 text-sm">
                  {item.description}
                </p>
                <hr className="w-full border-t-1 border-gray-300 my-3" />
                
              </div>
            
            ))}
          </div>
        </div> 

      </div>
    </section>
  )

}

export default Education