"use client";

import MegaMenuLayout, { MegaMenuItem } from "../MegaMenuLayout";

const darshanMenuItems: MegaMenuItem[] = [
  {
    icon: "/SubMenuDarshanimg/Nav icons (1).png",
    title: "मध्यस्थ दर्शन सह-अस्तित्ववाद",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/UnderCunstruction",
  },
  {
    icon: "/SubMenuDarshanimg/Nav icons (1).png",
    title: "प्रणेता नगराज की खोज",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/UnderCunstruction",
  },
  {
    icon: "/SubMenuDarshanimg/Nav icons (1).png",
    title: "विकल्प",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/UnderCunstruction",
  },
  {
    icon: "/SubMenuDarshanimg/Nav icons (1).png",
    title: "मूल सिद्धांत",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/UnderCunstruction",
  },
  {
    icon: "/SubMenuDarshanimg/Nav icons (1).png",
    title: "Who we are",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/UnderCunstruction",
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
