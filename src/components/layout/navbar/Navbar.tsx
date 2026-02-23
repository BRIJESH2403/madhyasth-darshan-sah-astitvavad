"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./mobile/MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="w-full sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "var(--navbar-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <nav
          className="
            w-full
            flex items-center justify-between
            px-4 sm:px-6
            lg:px-60
            py-4
          "
        >
          {/* LOGO */}
          <Link href="/" className="block">
            <div
              className="font-bold text-lg sm:text-xl leading-tight cursor-pointer"
              style={{ color: "var(--color-text-title)" }}
            >
              मध्यस्थ दर्शन
              <div
                className="text-sm font-normal"
                style={{ color: "var(--color-text-body)" }}
              >
                सह-अस्तित्ववाद
              </div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <Image
                src="/NavBarimg/Language.png"
                alt="Language"
                width={22}
                height={22}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-body)" }}
              >
                हिंदी
              </span>
            </div>

            <DarkModeToggle />

            <button className="px-4 py-2 rounded-full bg-black text-(--color-primary) text-sm">
              Join us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
