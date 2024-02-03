"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { SiShutterstock } from "react-icons/si";
import { AiFillTwitterSquare } from "react-icons/ai";
import { useSectionInView } from "@/lib/hooks";
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {

  const { ref } = useSectionInView("Home", 0.5);

  const fadeIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };


  return (
    <section 
      ref={ref} 
      id="home"
      className="sm:flex sm:flex-col sm:justify-center mb-0 w-full text-center sm:text-left pt-28 sm:mb-0 sm:pt-36 min-h-[100vh]  bg-gradient-to-r from-indigo-400 to-cyan-400"
    >

      <div className='sm:flex sm:flex-row items-center'>

      
        <div className='flex px-3 sm:px-0 sm:pl-14 items-center justify-center sm:flex-[1] sm:h-[300px] sm:w-[300px]'> 

          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className=''
          >
            <Image 
              src="/me.jpg"
              alt="profile_picture"
              width={250}
              height={250}
              quality="95" 
              priority={true}
              className='object-fill rounded-tl-3xl rounded-br-3xl border-[0.2rem] border-white shadow-xl'
            />
          </motion.div>
          

        </div>

        <div className='sm:flex sm:flex-col sm:flex-[2]'>

          <motion.div className='sm:flex sm:flex-col mb-10 mt-4 px-4 text-lg sm:text-2xl font-light !leading-[2.2]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          >
            <h1>HI, I&apos;M FATHIMA RIZMIYA</h1>
            
            <h1 className='text-2xl sm:text-6xl font-extrabold sm:tracking-wider'>
              <Typewriter
                words={['CODING ENTHUSIAST', 'REACT DEVELOPER',]}
                loop={10}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </h1>

            <h1 className='sm:text-xl sm:mt-3 sm:mb-16'>Melbourne, Australia</h1>

          </motion.div>

          <motion.div  className="flex flex-row items-center justify-center sm:justify-start sm:ml-1 gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          >


            <a
              className="text-black hover:text-gray-700 cursor-pointer text-xl"
              href="https://www.linkedin.com/in/fathima-rizmiya/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer text-[26px]"
              href="https://github.com/rizmiya-ameen"
              target="_blank"
            >
              <FaGithubSquare />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer text-[26px]"
              href="https://www.youtube.com/@ChemHexaTamil"
              target="_blank"
            >
              <TbBrandYoutubeFilled />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer text-[28px]"
              href="https://twitter.com/Rizmiya22"
              target="_blank"
            >
              <AiFillTwitterSquare />
            </a>

            <a
              className="group text-black hover:text-gray-700 cursor-pointer text-[18px] "
              href="https://www.shutterstock.com/g/FRizmiya"
              target="_blank"
            >
              <SiShutterstock />
            </a>
          
            
              
          </motion.div>
        </div>
        

        
      </div>


      <div className='flex flex-col items-center justify-center sm:pb-0 pb-3'>
        <Link href='#about'>
        <motion.img
          variants={fadeIn}
            initial="hidden"
            whileInView="show"
          src="arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[90px]"
        />
        </Link>
      </div>

    </section>
  )
}

export default Intro


