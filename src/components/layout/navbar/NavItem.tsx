"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";

interface NavItemProps {
  link: {
    id: string;
    label: string;
    href?: string;
  };
}

export default function NavItem({ link }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    link.href === "/"
      ? pathname === "/"
      : pathname.startsWith(link.href || "");

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li
      ref={wrapperRef}
      className="relative z-30"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href || "#"}
        className={`
          body-lg cursor-pointer relative pb-1 transition-colors
          ${isActive ? "text-(--color-primary)" : ""}
        `}
        style={{
          color: isActive
            ? "var(--color-primary)"
            : "var(--color-text-title)",
        }}
      >
        {link.label}

        {/* underline */}
        {isActive && (
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-primary)]" />
        )}
      </Link>

      {/* MEGA MENU */}
      {open && link.id !== "home" && <MegaMenu menuKey={link.id} />}
    </li>
  );
}
