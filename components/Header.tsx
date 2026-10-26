"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section.context";
import ThemeSwitch from "./ThemeSwitch";

// import { Dancing_Script } from "next/font/google";

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"]})

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="z-[999] flex px-5 py-2 items-center leading-[0.2rem] justify-between fixed  top-0 left-0 right-0 h-[3.8rem] bg-white/90 dark:bg-slate-800/90 backdrop-blur border-b border-black/5 dark:border-white/10 transition-colors"> 

        <div className="flex">
          <a
          className='transition duration-200 ease-in-out'
          href="#home"
          onClick={() => setMenuOpen(false)}
          >
            <p className="font-dancing text-2xl sm:text-base md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              &lt;Rizmiya /&gt;</p>
          </a>
        </div>

        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-gray-600 dark:text-gray-300 sm:w-[initial] md:flex-nowrap md:gap-[2px] lg:gap-3">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:hover:text-white transition",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

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

        <div className="flex items-center gap-2">
          <ThemeSwitch />

          {/* mobile: nav links live in this menu */}
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/10 bg-white/80 text-xl text-gray-800 dark:bg-slate-700/60 dark:border-white/10 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="sm:hidden absolute top-full left-0 right-0 flex flex-col px-5 py-3 leading-normal text-sm font-medium bg-white/95 dark:bg-slate-800/95 border-b border-black/10 dark:border-white/10 shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {links.map((link) => (
                <li
                  key={link.hash}
                  className="border-b border-black/5 dark:border-white/5 last:border-0"
                >
                  <Link
                    className={clsx(
                      "block py-3 text-gray-700 dark:text-gray-300",
                      {
                        "text-sky-700 dark:text-sky-400":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
    </header>
  );
}



