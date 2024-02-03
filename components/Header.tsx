"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section.context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] flex px-5 py-2 items-center leading-[0.2rem] justify-between fixed  top-0 left-0 right-0 h-[3.8rem] bg-white bg-opacity-90 "> 

        <div className="sm:flex hidden">
          <a
          className='transition duration-200 ease-in-out'
          href="#home"
          >
            <p className="font-dancing text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              &lt;Rizmiya /&gt;</p>
          </a>
        </div>

        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.7rem] sm:text-[0.9rem] font-medium text-black sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-700 transition",
                  {
                    "text-gray-950 ":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name.toUpperCase()}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-sky-700 absolute h-[2px] w-[100%] bottom-0 left-0 -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
       
      
    </header>
  );
}



