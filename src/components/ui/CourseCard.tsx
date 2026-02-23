"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";

interface ExhibitionCardProps {
  image: string;
  title: string;
  description: string;
  progressText: string;
  progressPercent?: number;
  href: string;
}

export default function ExhibitionCard({
  image,
  title,
  description,
  progressText,
  progressPercent = 10,
  href,
}: ExhibitionCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="
        group relative
        w-full
        sm:w-80
        md:w-72
        lg:w-84
        mx-auto
        h-89 sm:h-80 md:h-72 lg:h-89
        rounded-2xl
        card-bg card-bg-hover
        border border-(--border-color)
        hover:border-(--color-primary)
        overflow-hidden
        cursor-pointer
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* TITLE */}
        <h3
          className="
            absolute bottom-2 left-4
            body-xl
            text-white!
            transition-colors duration-300
            group-hover:text-(--color-primary)
          "
        >
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-4 flex flex-col justify-end h-[40%]">
        <p className="body-sm mb-3">
          {description}
        </p>

        <div className="flex items-center justify-between body-xs mb-1">
          <span>प्रगति</span>
          <span className="group-hover:text-(--color-primary) transition">
            {progressText}
          </span>
        </div>

        <div className="w-full h-2 bg-black/50 dark:bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: "var(--color-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
