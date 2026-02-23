"use client";

import Link from "next/link";

interface Item {
  title: string;
  desc: string;
  href: string;
}

export default function MobileMenuContent({ items }: { items: Item[] }) {
  return (
    <div className="divide-y">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-6 py-3 bg-white hover:bg-[#FFF4D6]"
        >
          <p className="font-medium text-sm">{item.title}</p>
          <p className="text-xs opacity-60">{item.desc}</p>
        </Link>
      ))}
    </div>
  );
}
