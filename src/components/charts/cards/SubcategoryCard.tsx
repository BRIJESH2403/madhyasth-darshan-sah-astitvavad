"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";

interface SubcatagotyCardProps {
  image: string;
  title: string;
  description: string;
  progressText: string;
  progressPercent?: number;
  href: string;
}

export default function SubcatagotyCard({
  image,
  title,
  description,
  progressText,
  progressPercent,
  href,
}: SubcatagotyCardProps) {
  const router = useRouter();

  // ✅ Extract percent from text if not provided (e.g. "2/5")
  let calculatedPercent = progressPercent;

  if (!calculatedPercent && progressText.includes("/")) {
    const [done, total] = progressText.split("/").map(Number);
    if (total > 0) {
      calculatedPercent = Math.round((done / total) * 100);
    }
  }

  // fallback
  if (!calculatedPercent) calculatedPercent = 0;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(href);
      }}
      className="
        group relative
        w-full
        sm:w-80 md:w-72 lg:w-84
        mx-auto
        h-89 sm:h-80 md:h-72 lg:h-89
        rounded-2xl
        card-bg card-bg-hover
        border border-(--border-color)
        hover:border-(--color-primary)
        overflow-hidden
        cursor-pointer
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-(--color-primary)
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <img
          src={image || "/fallback.png"}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* TITLE */}
        <h3
          className="
            absolute bottom-2 left-4
            body-xl text-white!
            transition-colors duration-300
            group-hover:text-(--color-primary)
          "
        >
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-4 flex flex-col justify-end h-[40%]">
        <p className="body-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between body-xs mb-1">
          <span>प्रगति</span>
          <span className="group-hover:text-(--color-primary) transition">
            {progressText}
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-black/50 dark:bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${calculatedPercent}%`,
              backgroundColor: "var(--color-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
}