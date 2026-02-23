"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/ui/CTAButton";

export interface MegaMenuItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

interface MegaMenuLayoutProps {
  items: MegaMenuItem[];
  ctaTitle: string;
  ctaDesc: string;
  ctaImage: string;
  ctaButtonText: string;
  onCtaClick?: () => void;
}

export default function MegaMenuLayout({
  items,
  ctaTitle,
  ctaDesc,
  ctaImage,
  ctaButtonText,
  onCtaClick,
}: MegaMenuLayoutProps) {
  return (
    <>
      {/* MENU GRID */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      {/* CTA STRIP */}
      <div className="mt-3 rounded-lg bg-(--color-primary) p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={ctaImage}
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-bold" style={{ color: "#000000" }}>
              {ctaTitle}
            </h4>

            <p className="text-xs body-xs" style={{ color: "rgba(0,0,0,0.8)" }}>
              {ctaDesc}
            </p>
          </div>
        </div>

        <CtaButton text={ctaButtonText} onClick={onCtaClick} />
      </div>
    </>
  );
}

/* MENU ITEM */
function MenuItem({ icon, title, desc, href }: MegaMenuItem) {
  return (
    <Link href={href} className="block">
      <div
        className="
          flex gap-3 cursor-pointer group
          p-4 rounded-lg
          hover:bg-(--color-primary)
          transition-colors duration-200
        "
      >
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 mt-0.5"
        />

        <div>
          <h4
            className="text-sm font-Regular transition-colors"
            style={{ color: "#000000" }}
          >
            {title}
          </h4>

          <p
            className="text-xs mt-0.5 body-xs transition-colors"
            style={{ color: "#6b7280" }}
          >
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
