"use client";

import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaType: "gif" | "video";
  href: string;
}

export default function ResourceCard({
  title,
  description,
  mediaSrc,
  mediaType,
  href,
}: ResourceCardProps) {
  return (
    <Link href={href} className="block">
      {/* CARD */}
      <div className="flex flex-col rounded-lg overflow-hidden">
        
        {/* MEDIA – rounded from all sides */}
        <div className="relative w-full h-75 overflow-hidden rounded-lg">
          {mediaType === "video" ? (
            <video
              src={mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mediaSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="pt-4">
          <h3 className="mb-2">{title}</h3>
          <p className="body-md">{description}</p>
        </div>
      </div>
    </Link>
  );
}
