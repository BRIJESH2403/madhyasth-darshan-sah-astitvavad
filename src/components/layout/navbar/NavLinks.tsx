"use client";

import { NAV_LINKS } from "./links";
import NavItem from "./NavItem";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <NavItem key={link.id} link={link} />
      ))}
    </ul>
  );
}
