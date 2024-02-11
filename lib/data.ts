import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";
import image7 from "@/public/image7.png";
import image8 from "@/public/image8.png";
import image9 from "@/public/image9.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Resume",
    hash: "#resume",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
//its not any string, we trying to be more specific, so the exact same string

export const experiencesData = [
  {
    title: "Teacher - Secondary",
    location: "Ministry of Education, SL / 2019 - 2022",
    description:
      "Instructed advanced-level students through lectures, practical sessions, and demonstrations.",
    icon: React.createElement(LuGraduationCap),
    //<LuGraduationCap /> can use this if its a jsx or tsx
    //date: "2019",
  },
  {
    title: "Temporary Lecturer",
    location: "Uva Wellassa University, SL / 2016 - 2018",
    description:
      "Delivered weekly lectures, conducted practical sessions and mentored students at all levels.",
    icon: React.createElement(CgWorkAlt),
    //date: "2019 - 2021",
  },
  {
    title: "Demonstrator",
    location: "University of Peradeniya, SL / 2016",
    description:
      "Conducted tutorial classes, practical sessions and assisted undergraduate students.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


export const educationsData = [
  {
    title: "React Development",
    location: "General Assembly, Melbourne / 2023",
    description:
      "Enrolled via the Digital Jobs Program, Victoria, and acquired a range of skills, catalyzing a transformative journey in my career.", 
    icon: React.createElement(LuGraduationCap),
    //<LuGraduationCap /> can use this if its a jsx or tsx
    date: "2019",
  },
  {
    title: "Bachelor of Science (Hons)",
    location: "University of Peradeniya, SL / 2011 - 2015",
    description:
      "Completed a full-time, 4-year program with major in Chemistry and minor in Computer Science.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  /*{
    title: "Bookolog",
    description:
      "This empowers users to delve into a rich library of books. Also, it enables users to seamlessly exchange, lend, and borrow books with like-minded enthusiasts",
    tags: ["NextJS", "React", "tailwind", "SQL", "Docker",],
    imageUrl: "",
  },*/
  {
    title: "PostHub",
    description:
      "Unleash your tech insights, experiences, and tips on PostHub - where tech enthusiasts connect and collaborate. Join the conversation and let your tech tales inspire others.",
    tags: ["React", "MUI", "JavaScript", "Figma",],
    imageUrl: image8,
  },
  {
    title: "Book Worm",
    description:
      "A space for users to explore books, add them to their personal bookshelf, and effectively organize and track their book collection.",
    tags: ["React", "MUI", "JavaScript", "Figma",],
    imageUrl: image5,
  },
  {
    title: "ElectroSwift",
    description:
      "Explore, shop, and experience the future of online shopping with us. Discover the latest gadgets and tech essentials. Your journey to a tech-filled paradise begins here! ",
    tags: ["React", "JavaScript", "Tailwind",],
    imageUrl: image9,
  },
  {
    title: "Weather Forecast",
    description:
      "A simple and user-friendly weather forecast application that provides up-to-date weather information for any location worldwide.",
    tags: ["React", "JavaScript", "Tailwind",],
    imageUrl: image2,
  },
  {
    title: "Article Summarizer",
    description:
      "AI-Powered Article Summarizer! Extract concise summaries from articles. Powered by OpenAI and Rapid API for accurate summarization",
    tags: ["React", "Vite", "Tailwind", "Redux",],
    imageUrl: image1,
  },
  {
    title: "Personal Portfolio",
    description:
      "A digital snapshot of my journey, captured in my Next.js-powered personal portfolio. Explore my skills and projects",
    tags: ["NextJS", "React", "TypeScript", "Tailwind", "Framer motion"],
    imageUrl: image7,
  },
  {
    title: "To-Do List",
    description:
      "A feature-rich To-Do List web application with task prioritization, filtering, and a clean user interface.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: image6,
  },
  {
    title: "GIPHY Translator",
    description:
      "A user-friendly tool that turns words into the perfect GIF, with a weirdness slider.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: image3,
    //imageUrl: "/image3.png"
  },
] as const;




export const skillsSet = [
  {
    skill:"HTML5",
    image: "/html-5.png"
  },
  {
    skill:"CSS3",
    image: "/css-3.png"
  },
  {
    skill:"JavaScript",
    image: "/js.png"
  },
  {
    skill:"TypeScript",
    image: "/typescript.png"
  },
  {
    skill:"React",
    image: "/react.png"
  },
  {
    skill:"Next.js",
    image:"/Nextjs.png"
  },
  {
    skill:"Tailwind CSS",
    image:"/tailwindcss.svg"
  },
  {
    skill:"MUI",
    image:"/MUI.png"
  },
  {
    skill:"Docker",
    image:"/docker.png"
  },
  {
    skill:"Framer Motion",
    image:"/framer-motion.png"
  },
  {
    skill:"VS Code",
    image:"/VSCode.png"
  },
  {
    skill:"GitHub",
    image:"/github.png"
  },
  {
    skill:"Figma",
    image:"/figma.png"
  },
  {
    skill:"Vercel",
    image:"/vercel.svg"
  },
  {
    skill:"Surge",
    image:"/surge-logo.svg"
  },
] as const;


/*
"Joined through Digital Jobs Program, Victoria where I gained skills HTML, CSS, JavaScript, React, and Next.js, transforming my career journey.", "Enrolled via the Digital Jobs Program, Victoria, and acquired a range of skills, catalyzing a transformative journey in my career." Enrolled in the Digital Jobs Program, Victoria, I acquired a range of skills, catalyzing a transformative journey in my career.,
*/