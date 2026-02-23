"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";

interface CatagotyCardProps {
  image: string;
  title: string;
  description: string;
  progressText: string;
  href: string;
  progressPercent?: number; // 🔥 NEW
}

export default function CatagotyCard({
  image,
  title,
  description,
  progressText,
  href,
  progressPercent = 0, // default
}: CatagotyCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="
        group
        relative
        w-full sm:w-70 md:w-[320px] lg:w-84
        h-87.5 sm:h-90 md:h-85 lg:h-87.5
        rounded-2xl
        overflow-hidden
        cursor-pointer
        text-white!
        **:text-white!
        mx-auto
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        <h3 className="body-xl mb-2">{title}</h3>

        <p className="body-sm mb-4">{description}</p>

        <div className="flex items-center justify-between body-xs mb-2">
          <span>प्रगति</span>
          <span>{progressText}</span>
        </div>

        {/* 🔥 DYNAMIC PROGRESS BAR */}
        <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}