"use client";

import React, { useRef, useState } from "react";
import EventCard from "@/components/ui/EventCard";

interface EventItem {
  image: string;
  location: string;
  date: string;
  title: string;
  description: string;
}

const EVENTS: EventItem[] = [
  {
    image: "/EventCardIcons/f0f36bb3fed1b196008efb23f97b5360644fb7ca.jpg",
    location: "Ahmedabad Gujarat, India (Hybrid – In-person + Online)",
    date: "12–14 September 2025",
    title: "Introductory Workshop on Jeevan Vidya",
    description:
      "A 3-day foundation program on Madhyasth Darshan principles with guided study sessions and group discussions. Day foundation program on Madhyasth Darshan principles with guided study sessions day foundation program on Madhyasth Darshan principles with guided study sessions ",
  },
  {
    image: "/EventCardIcons/f0f36bb3fed1b196008efb23f97b5360644fb7ca.jpg",
    location: "Ahmedabad Gujarat, India (Hybrid – In-person + Online)",
    date: "12–14 September 2025",
    title: "Introductory Workshop on Jeevan Vidya",
    description:
      "A 3-day foundation program on Madhyasth Darshan principles with guided study sessions and group discussions. Day foundation program on Madhyasth Darshan principles with guided study sessions day foundation program on Madhyasth Darshan principles with guided study sessions ",
  },
  {
    image: "/EventCardIcons/f0f36bb3fed1b196008efb23f97b5360644fb7ca.jpg",
    location: "Ahmedabad Gujarat, India (Hybrid – In-person + Online)",
    date: "12–14 September 2025",
    title: "Introductory Workshop on Jeevan Vidya",
    description:
      "A 3-day foundation program on Madhyasth Darshan principles with guided study sessions and group discussions. Day foundation program on Madhyasth Darshan principles with guided study sessions day foundation program on Madhyasth Darshan principles with guided study sessions ",
  },
  {
    image: "/EventCardIcons/f0f36bb3fed1b196008efb23f97b5360644fb7ca.jpg",
    location: "Ahmedabad Gujarat, India (Hybrid – In-person + Online)",
    date: "12–14 September 2025",
    title: "Introductory Workshop on Jeevan Vidya",
    description:
      "A 3-day foundation program on Madhyasth Darshan principles with guided study sessions and group discussions. Day foundation program on Madhyasth Darshan principles with guided study sessions day foundation program on Madhyasth Darshan principles with guided study sessions ",
  },
  {
    image: "/EventCardIcons/f0f36bb3fed1b196008efb23f97b5360644fb7ca.jpg",
    location: "Ahmedabad Gujarat, India (Hybrid – In-person + Online)",
    date: "12–14 September 2025",
    title: "Introductory Workshop on Jeevan Vidya",
    description:
      "A 3-day foundation program on Madhyasth Darshan principles with guided study sessions and group discussions. Day foundation program on Madhyasth Darshan principles with guided study sessions day foundation program on Madhyasth Darshan principles with guided study sessions ",
  },
];

const DESKTOP_CARD_WIDTH = 674;
const CARD_GAP = 20;
const DESKTOP_SCROLL = DESKTOP_CARD_WIDTH + CARD_GAP;

export default function EventSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < EVENTS.length - 1;

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    let newIndex = currentIndex;

    if (direction === "right" && canScrollRight) newIndex++;
    if (direction === "left" && canScrollLeft) newIndex--;

    el.scrollTo({
      left: newIndex * DESKTOP_SCROLL,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  return (
    <section className="light-bg-1 dark-bg-1 py-12 md:py-16">
      <div className="container">
        {/* HEADER */}
        <div className="relative mb-6">
          <h2 className="text-center px-4">
            दस सोपानीय व्यवस्था और समाज व्यवस्था आयाम
          </h2>

          {/* ARROWS – desktop only */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center
                ${canScrollLeft ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center
                ${canScrollRight ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
            >
              →
            </button>
          </div>
        </div>

        {/* CARD STRIP */}
        <div
          ref={sliderRef}
          className="
            flex gap-5
            overflow-x-auto md:overflow-hidden
            scroll-smooth
            snap-x snap-mandatory
            pb-4
          " 
        >
          {EVENTS.map((event, index) => (
            <div
              key={index}
              className="
                snap-start
                min-w-[85%]
                sm:min-w-[70%]
                md:min-w-150
                lg:min-w-178.25
              "
            >
              <EventCard
                {...event}
                locationIcon={<img src="/EventCardIcons/mdi_location.png" />}
                dateIcon={
                  <img src="/EventCardIcons/stash_data-date-solid.png" />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
