"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import { Typewriter } from "react-simple-typewriter";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fathima-rizmiya/",
    icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/rizmiya-ameen", icon: FaGithub },
];

// short facts under the pitch, each with an icon
const facts = [
  { icon: LuGraduationCap, text: "MSc in Artificial Intelligence" },
  { icon: FiMapPin, text: "Melbourne, Australia" },
];

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col justify-center w-full px-4 sm:px-8 pt-28 pb-20 min-h-[100vh] text-center md:text-left bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-slate-900 dark:to-slate-900"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16 w-full max-w-[64rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          className="shrink-0 self-center"
        >
          {/* 4:5 crop of the portrait rather than stretching it into a square */}
          <Image
            src="/me.jpg"
            alt="Fathima Rizmiya"
            width={256}
            height={320}
            quality="95"
            priority={true}
            className="h-[280px] w-[224px] md:h-[320px] md:w-[256px] object-cover object-[50%_30%] rounded-tl-3xl rounded-br-3xl border-[0.2rem] border-white dark:border-gray-300 shadow-xl"
          />
        </motion.div>

        <div className="flex flex-col flex-1">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="inline-flex items-center gap-2 self-center md:self-start mb-6 rounded-full border border-white/40 bg-white/30 px-3 py-0.5 text-xs font-medium leading-6 backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to AI / ML Engineer roles
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight !leading-[1.05]">
              Fathima Rizmiya
            </h1>

            {/* fixed height so the layout doesn't jump as the typewriter types */}
            <p className="mt-3 h-8 md:h-9 font-display text-xl md:text-2xl font-semibold text-gray-900/80 dark:text-sky-400">
              <Typewriter
                words={[
                  "AI Engineer",
                  "Machine Learning Engineer",
                  "Deep Learning Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </p>

            <p className="mt-5 max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed text-gray-900/80 dark:text-gray-300">
              Turning data into reliable machine learning solutions, from
              explainable deep learning models to practical AI applications.
            </p>

            <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mt-5 text-sm text-gray-900/70 dark:text-gray-400">
              {facts.map((fact) => (
                <li key={fact.text} className="flex items-center gap-1.5">
                  <fact.icon className="text-base" />
                  {fact.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-3 mt-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          >
            <a
              className="group flex items-center gap-2 px-6 py-3 text-sm font-medium leading-5 text-white bg-gray-900 hover:bg-gray-800 rounded-full transition dark:text-slate-900 dark:bg-white dark:hover:bg-gray-200"
              href="#projects"
            >
              View projects
              <FiArrowRight className="text-base transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-center gap-2 px-6 py-3 text-sm font-medium leading-5 text-gray-900 border border-gray-900/40 hover:border-gray-900 hover:bg-white/30 rounded-full transition dark:text-gray-100 dark:border-white/25 dark:hover:border-white/60 dark:hover:bg-white/5"
              href="/CV.pdf"
              download
            >
              Download CV
              <HiDownload className="text-base opacity-70 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-1 md:ml-2 md:pl-3 md:border-l md:border-gray-900/20 md:dark:border-white/15">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="flex items-center justify-center h-11 w-11 text-[18px] text-gray-900/80 hover:text-gray-900 hover:bg-white/40 rounded-full transition-colors dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Link from 'next/link';
// import { BsLinkedin } from "react-icons/bs";
// import { FaGithubSquare } from "react-icons/fa";
// import { TbBrandYoutubeFilled } from "react-icons/tb";
// import { SiShutterstock } from "react-icons/si";
// import { AiFillTwitterSquare } from "react-icons/ai";
// import { useSectionInView } from "@/lib/hooks";
// import { Typewriter } from 'react-simple-typewriter'

// const Intro = () => {

//   const { ref } = useSectionInView("Home", 0.5);

//   const fadeIn = {
//     hidden: {
//       y: -100,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         delay: 0.3,
//         duration: 1,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="sm:flex sm:flex-col sm:justify-center mb-0 w-full text-center sm:text-left pt-28 sm:mb-0 sm:pt-36 min-h-[100vh]  bg-gradient-to-r from-indigo-400 to-cyan-400"
//     >

//       <div className='sm:flex sm:flex-row items-center'>

//         <div className='flex px-3 sm:px-0 sm:pl-14 items-center justify-center sm:flex-[1] sm:h-[300px] sm:w-[300px]'>

//           <motion.div
//             initial={{ opacity: 0, scale: 0}}
//             animate={{ opacity: 1, scale: 1}}
//             transition={{
//               type: "tween",
//               duration: 0.2,
//             }}
//             className=''
//           >
//             <Image
//               src="/me.jpg"
//               alt="profile_picture"
//               width={250}
//               height={250}
//               quality="95"
//               priority={true}
//               className='object-fill rounded-tl-3xl rounded-br-3xl border-[0.2rem] border-white shadow-xl'
//             />
//           </motion.div>

//         </div>

//         <div className='sm:flex sm:flex-col sm:flex-[2]'>

//           <motion.div className='sm:flex sm:flex-col mb-10 mt-4 px-4 text-lg sm:text-2xl font-light !leading-[2.2]'
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           >
//             <h1>HI, I&apos;M FATHIMA RIZMIYA</h1>

//             <h1 className='text-2xl sm:text-6xl font-extrabold sm:tracking-wider'>
//               <Typewriter
//                 words={['CODING ENTHUSIAST', 'REACT DEVELOPER',]}
//                 loop={10}
//                 cursor
//                 cursorStyle='|'
//                 typeSpeed={90}
//                 deleteSpeed={90}
//                 delaySpeed={1000}
//               />
//             </h1>

//             <h1 className='sm:text-xl sm:mt-3 sm:mb-16'>Melbourne, Australia</h1>

//           </motion.div>

//           <motion.div  className="flex flex-row items-center justify-center sm:justify-start sm:ml-1 gap-4 px-4 text-lg font-medium"
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.1,
//           }}
//           >

//             <a
//               className="text-black hover:text-gray-700 cursor-pointer text-xl"
//               href="https://www.linkedin.com/in/fathima-rizmiya/"
//               target="_blank"
//             >
//               <BsLinkedin />
//             </a>

//             <a
//               className="text-black hover:text-gray-700 cursor-pointer text-[26px]"
//               href="https://github.com/rizmiya-ameen"
//               target="_blank"
//             >
//               <FaGithubSquare />
//             </a>

//             <a
//               className="text-black hover:text-gray-700 cursor-pointer text-[26px]"
//               href="https://www.youtube.com/@ChemHexaTamil"
//               target="_blank"
//             >
//               <TbBrandYoutubeFilled />
//             </a>

//             <a
//               className="text-black hover:text-gray-700 cursor-pointer text-[28px]"
//               href="https://twitter.com/Rizmiya22"
//               target="_blank"
//             >
//               <AiFillTwitterSquare />
//             </a>

//             <a
//               className="group text-black hover:text-gray-700 cursor-pointer text-[18px] "
//               href="https://www.shutterstock.com/g/FRizmiya"
//               target="_blank"
//             >
//               <SiShutterstock />
//             </a>

//           </motion.div>
//         </div>

//       </div>

//       <div className='flex flex-col items-center justify-center sm:pb-0 pb-3'>
//         <Link href='#about'>
//         <motion.img
//           variants={fadeIn}
//             initial="hidden"
//             whileInView="show"
//           src="arrow-down.svg"
//           alt="arrow down"
//           className="w-[18px] h-[28px] object-contain mt-[90px]"
//         />
//         </Link>
//       </div>

//     </section>
//   )
// }

// export default Intro
