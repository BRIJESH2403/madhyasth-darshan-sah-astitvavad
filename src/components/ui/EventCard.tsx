"use client";

import React from "react";

interface EventCardProps {
  image: string;
  location: string;
  date: string;
  title: string;
  description: string;
  locationIcon: React.ReactNode;
  dateIcon: React.ReactNode;
}

export default function EventCard({
  image,
  location,
  date,
  title,
  description,
  locationIcon,
  dateIcon,
}: EventCardProps) {
  return (
    <div className="h-[580.0625px] flex flex-col gap-3 opacity-100">
      
      {/* IMAGE */}
      <div className="relative h-[401.0625px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="h-41.75 flex flex-col gap-2 opacity-100">
        
        {/* LOCATION + DATE */}
        <div className="flex items-center justify-between body-xs body-muted">
          <div className="flex items-center gap-1.5">
            {locationIcon}
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {dateIcon}
            <span>{date}</span>
          </div>
        </div>

        {/* TITLE */}
        <h3>{title}</h3>

        {/* DESCRIPTION */}
        <p className="body-sm w-full">{description}</p>
      </div>
    </div>
  );
}