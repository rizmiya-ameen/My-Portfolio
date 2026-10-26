import type { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// shown as a badge on the project's screenshot
export type ProjectCategory =
  | "AI & ML"
  | "AI Web App"
  | "Data Science"
  | "Web App"
  | "Full-Stack Web App"
  | "Mobile App";

export type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  category: ProjectCategory;
  githubUrl?: string;
  // deployed demo, if there is one
  liveUrl?: string;
  // projects without a screenshot get a placeholder panel instead
  imageUrl?: StaticImageData;
};

// listed under Education in the Resume section
export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  // credential / verification link
  url?: string;
};

// one entry in the Resume section's Education / Experience columns
export type ResumeItem = {
  title: string;
  org: string;
  location: string;
  date?: string;
  // links the organisation name
  url?: string;
  description: string;
};
