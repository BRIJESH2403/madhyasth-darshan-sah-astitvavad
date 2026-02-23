"use client";

import MegaMenuLayout, { MegaMenuItem } from "../MegaMenuLayout";

const darshanMenuItems: MegaMenuItem[] = [
  {
    icon: "/Vyavsthaeimg/1.png",
    title: "शिक्षा – संस्कार व्यवस्था",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/vyavastha/shiksha",
  },
  {
    icon: "/Vyavsthaeimg/2.png",
    title: "उत्पादन-कार्य व्यवस्था",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/vyavastha/utpadan",
  },
  {
    icon: "/Vyavsthaeimg/3.png",
    title: "विनिमय-कोष व्यवस्था",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/vyavastha/vinimay",
  },
  {
    icon: "/Vyavsthaeimg/4.png",
    title: "स्वास्थ्य व्यवस्था",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/vyavastha/swasthya",
  },
  {
    icon: "/Vyavsthaeimg/5.png",
    title: "न्याय-सुरक्षा व्यवस्था",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/vyavastha/nyay",
  },
];

export default function DarshanMenu() {
  return (
    <MegaMenuLayout
      items={darshanMenuItems}
      ctaTitle="व्यवस्था अपडेट नया क्या है?"
      ctaDesc="हमारे नवीनतम फीचर्स और सुधारों के बारे में जानें, अपनी प्रक्रियाओं को अनुकूलित करें और दक्षता बढ़ाएँ। अभी देखें!"
      ctaImage="/SubMenuDarshanimg/Rectangle 3.png"
      ctaButtonText="अभी देखें"
    />
  );
}
