
"use client";
import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SubmitBtn from "./Submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        toast.success("Message sent successfully!"); // Display success toast
        setLoading(false);
        // reset the form
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
      } else {
        throw new Error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message!"); // Display error toast
      setLoading(false);
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
        autoComplete="off"
        className="mt-6 flex flex-col mx-auto w-[min(100%,38rem)]"
      >
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className={`h-14 my-3 px-4 rounded-lg borderBlack ${
            loading && "text-gray-300 cursor-default"
          }`}
          autoComplete="off"
          id="name"
          placeholder="Your Name"
          readOnly={loading} // Disable editing while loading
        />

        <input
          className={`h-14  px-4 rounded-lg borderBlack ${
            loading && "text-gray-300 cursor-default"
          }`}
          type="email"
          required
          minLength={5}
          maxLength={150}
          placeholder="Your email"
          autoComplete="off"
          id="email"
          readOnly={loading}
        />

        <textarea
          className={`h-52 my-3 rounded-lg borderBlack p-4 ${
            loading && "text-gray-300 cursor-default"
          } `}
          name="message"
          placeholder="Your message"
          required
          minLength={10}
          maxLength={5000}
          readOnly={loading}
        />

        <div className="flex justify-center">
          <SubmitBtn loading={loading} />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;