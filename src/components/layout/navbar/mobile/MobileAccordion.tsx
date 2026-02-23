"use client";

import { useState } from "react";
import { MENU_DATA } from "../MenuRegistry";
import MobileMenuContent from "./MobileMenuContent";

interface Props {
  link: {
    id: string;
    label: string;
  };
}

export default function MobileAccordion({ link }: Props) {
  const [open, setOpen] = useState(false);
  const items = MENU_DATA[link.id];

  return (
    <div>
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold
          ${open ? "bg-gray-50" : "bg-white"}`}
      >
        {link.label}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>

      {/* BODY */}
      {open && items && (
        <div className="border-t">
          <MobileMenuContent items={items.filter((item): item is typeof item & { desc: string } => item.desc !== undefined)} />
        </div>
      )}
    </div>
  );
}
