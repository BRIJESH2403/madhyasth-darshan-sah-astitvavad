"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  // Apply theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      onClick={() => setIsDark(!isDark)}
      className="relative w-16 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer transition-colors"
    >
      {/* Slider */}
      <div
        className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      />

      {/* Icons */}
      <div className="w-full flex justify-between px-2 text-sm z-10">
        <span className={isDark ? "opacity-40" : "opacity-100"}>☀️</span>
        <span className={isDark ? "opacity-100" : "opacity-40"}>🌙</span>
      </div>
    </div>
  );
}
