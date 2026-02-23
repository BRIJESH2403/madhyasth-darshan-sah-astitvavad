"use client";

import { NAV_LINKS } from "../links";
import MobileAccordion from "./MobileAccordion";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-999 bg-white overflow-y-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
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
        <button onClick={onClose} className="text-2xl">
          ×
        </button>
      </div>

      {/* ACCORDION MENU */}
      <div className="divide-y">
        {NAV_LINKS.filter((l) => l.id !== "home").map((link) => (
          <MobileAccordion key={link.id} link={link} />
        ))}
      </div>

      {/* FOOTER */}
      {/* <div className="px-6 py-6 flex justify-between items-center">
        <DarkModeToggle />
        <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
          Join us
        </button>
      </div> */}
    </div>
  );
}
