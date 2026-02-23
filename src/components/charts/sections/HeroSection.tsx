"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Pill {
  label: string;
  value: string;
}

interface ChartHeroProps {
  bgImage: string;
  pills?: Pill[];
  onSearch?: (value: string) => void;
  onFilterClick?: () => void;
  onPillChange?: (value: string) => void;
}

export default function HeroSection({
  bgImage,
  pills = [],
  onSearch,
  onFilterClick,
  onPillChange,
}: ChartHeroProps) {
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [activePill, setActivePill] = useState<string>("");

  // Remove "charts" from URL
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0 && segment !== "charts");

  // ✅ Hindi Mapping
  const hindiMap: Record<string, string> = {
    pradarshani: "प्रदर्शनी",
    astitva: "अस्तित्व",
    jeevan: "जीवन",
    samaj: "समाज",
  };

  // ✅ Breadcrumbs with Hindi labels
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/charts/" + pathSegments.slice(0, index + 1).join("/");

    const rawLabel = decodeURIComponent(segment).replace(/-/g, " ");

    return {
      label: hindiMap[rawLabel.toLowerCase()] || rawLabel,
      href,
    };
  });

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setSearch("");
    onSearch?.("");
  };

  const handlePillClick = (value: string) => {
    setActivePill(value);
    onPillChange?.(value);
  };

  return (
    <section className="relative w-full min-h-105 md:min-h-130 flex items-center overflow-hidden">
      
      {/* Background */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative container">

        {/* Center Content */}
        <div className="text-center">

          {/* ✅ HARDCODED TITLE */}
          <h2 className="mb-4">
            <span className="primary-color">चार्ट </span>
            <span className="body-white">संग्रह</span>
          </h2>

          {/* ✅ HARDCODED SUBTITLE */}
          <p className="body-lg body-white text-white max-w-3xl mx-auto mb-8">
            अखंड समाज और सामंजस्यपूर्ण जीवन की दार्शनिक संरचना का चित्रात्मक संग्रह,
            जो मानव, प्रकृति और जीवन-व्यवस्था के वास्तविक संबंधों को स्पष्ट करता है।
          </p>

          {/* Search + Filter */}
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="max-w-2xl w-full rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg bg-white dark:bg-[#2F2F2F]">
              <Image
                src="/ChartImg/ChartHomeimg/Search.png"
                alt="search"
                width={18}
                height={18}
                className="dark:invert"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
                className="flex-1 outline-none text-sm text-gray-700 dark:text-white bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-300"
              />

              {search && (
                <Image
                  src="/ChartImg/ChartHomeimg/Close.png"
                  alt="close"
                  width={16}
                  height={16}
                  onClick={handleClear}
                  className="cursor-pointer dark:invert"
                />
              )}
            </div>

            <button
              onClick={onFilterClick}
              className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-lg dark:bg-[#2F2F2F]"
            >
              <Image
                src="/ChartImg/ChartHomeimg/Filter.png"
                alt="filter"
                width={18}
                height={18}
                className="dark:invert"
              />
            </button>
          </div>

          {/* Pills */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {pills.map((pill) => {
              const isActive = activePill === pill.value;

              return (
                <button
                  key={pill.value}
                  onClick={() => handlePillClick(pill.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    isActive
                      ? "bg-(--color-primary) text-black"
                      : "bg-white text-gray-700 dark:bg-[#2F2F2F] dark:text-white"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ Breadcrumbs */}
        {pathname.startsWith("/charts/") && (
          <nav className="flex items-center gap-2 mt-8 text-sm text-white">
            <Link href="/charts" className="hover:primary-color transition">
              होम
            </Link>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div key={item.href} className="flex items-center gap-2">
                 <Image
  src="/zoominzoomout/Charts icon.png"
  alt="arrow"
  width={25}
  height={25}
  className="mx-2"
/>

                  {!isLast ? (
                    <Link
                      href={item.href}
                      className="hover:primary-color transition capitalize"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="primary-color font-medium capitalize">
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
}