import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative py-5 px-4 text-center text-gray-400 bg-gray-800 w-full h-full">
      <small className="mb-2 block text-xs">
        &copy; 2023 Rizmiya. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Resend, Vercel hosting.
      </p>

      <a
        className='absolute top-[-22px] right-10 text-[40px] text-gray-200 transition duration-200 ease-in-out'
        href="#home"
        
      >
        <BsFillArrowUpCircleFill />
      </a>

    </footer>
  )
}

export default Footer

