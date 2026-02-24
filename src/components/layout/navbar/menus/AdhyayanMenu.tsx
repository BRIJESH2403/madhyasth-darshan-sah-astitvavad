"use client";

import MegaMenuLayout, { MegaMenuItem } from "../MegaMenuLayout";

const darshanMenuItems: MegaMenuItem[] = [
  {
    icon: "/AdhyayanSamgriimg/1.png",
    title: "पुस्तकें और साहित्य",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/resources/books",
  },
  {
    icon: "/AdhyayanSamgriimg/2.png",
    title: "चार्ट्स संग्रह (500 चार्ट्स)",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/charts",
  },
  {
    icon: "/AdhyayanSamgriimg/3.png",
    title: "वीडियो लाइब्रेरी",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/resources/videos",
  },
  {
    icon: "/AdhyayanSamgriimg/4.png",
    title: "ऑडियो संग्रह",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/resources/audio",
  },
  {
    icon: "/AdhyayanSamgriimg/5.png",
    title: "Research Publication",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/resources/research",
  },
];

export default function DarshanMenu() {
  return (
    <MegaMenuLayout
      items={darshanMenuItems}
      ctaTitle="क्या आप जीवन को सही रूप में समझना चाहते हैं?"
      ctaDesc="मध्यस्थ दर्शन को जानें।"
      ctaImage="/SubMenuDarshanimg/Rectangle 3.png"
      ctaButtonText="दर्शन समझें"
    />
  );
}
