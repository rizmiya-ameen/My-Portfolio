"use client"
import React from 'react'
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './SectionHeading';
import { motion } from "framer-motion";
//import toast from 'react-hot-toast';

const Contact = () => {

  const { ref } = useSectionInView("Contact");


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    console.log(data);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      //setLoading(false);
      // reset the form
      // event.target.name.value = "";
      // event.target.email.value = "";
      // event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      //setLoading(false);
    }
  };


  return (
    <motion.section 
      id="contact" 
      ref={ref} 
      className="flex flex-col w-full leading-7 px-5 pt-28 pb-16 min-h-[100vh] text-center bg-gradient-to-r from-indigo-500 to-cyan-500"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="relative text-white">
        <SectionHeading>Get in Touch</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-white">
        CONTACT
        </h1>
      </div>

      <p className="text-gray-300 mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rizmiyaamin@gmail.com">
          rizmiyaamin@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
      onSubmit={handleSubmit}
        className="mt-6 flex flex-col mx-auto w-[min(100%,38rem)]"
        /*action={async (formData) => {
          await sendEmail(formData)
        }}*/
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //    return;
        //   }

        //   toast.success("Email sent successfully!")
        // }}
      >
      
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className="h-14 my-3 px-4 rounded-lg borderBlack"
          autoComplete="off"
          id="name"
          placeholder="Your Name"
        />

        <input
          className="h-14  px-4 rounded-lg borderBlack"
          type="email"
          required
          minLength={5}
          maxLength={150}
          placeholder="Your email"
          autoComplete="off"
          id="email"
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          //rows={4}
        />
        <div className='flex justify-center'>
          <button type="submit">Submit</button>
        </div>
        
      </form>


    </motion.section>
  )
}

export default Contact