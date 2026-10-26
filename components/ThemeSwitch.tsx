"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-black/10 bg-white/80 text-gray-800 hover:scale-110 active:scale-105 transition-all dark:bg-slate-700/60 dark:border-white/10 dark:text-gray-200"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
