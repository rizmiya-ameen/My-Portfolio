import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative py-5 px-4 text-center text-gray-400 bg-gray-800 dark:bg-slate-900 w-full h-full">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Fathima Rizmiya. All rights reserved.
      </small>
      <p className="text-xs">
        Built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Hosted
        on Vercel.
      </p>

      <a
        className='absolute top-[-16px] right-8 text-[32px] text-gray-200 hover:text-white transition duration-200 ease-in-out'
        aria-label="Back to top"
        href="#home"
        
      >
        <BsFillArrowUpCircleFill />
      </a>

    </footer>
  )
}

export default Footer

