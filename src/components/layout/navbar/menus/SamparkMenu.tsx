"use client";

import MegaMenuLayout, {
  MegaMenuItem,
} from "../MegaMenuLayout";

const darshanMenuItems: MegaMenuItem[] = [
  {
    icon: "/Samparkimg/1.png",
    title: "डाउनलोड",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/contact/downloads",
  },
  {
    icon: "/Samparkimg/2.png",
    title: "मोबाइल एप्प (Links)",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/contact/apps",
  },
  {
    icon: "/Samparkimg/3.png",
    title: "संपर्क जानकारी",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/contact/info",
  },
  {
    icon: "/Samparkimg/4.png",
    title: "सहायता",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/contact/support",
  },
  {
    icon: "/Samparkimg/5.png",
    title: "बुलेटिन और पत्रिका",
    desc: "शिक्षा का मानवीयकरण योजनाओं, स्वराज्य व्यवस्था योजना",
    href: "/contact/bulletin",
  },
];


export default function DarshanMenu() {
  return (
    <MegaMenuLayout
      items={darshanMenuItems}
      ctaTitle="हमसे जुड़ने के नए तरीके।"
      ctaDesc="हमारे सभी वैश्विक ऑफ़िस स्थान, विभागीय संपर्क नंबर, और विशेष विभाग-वार ईमेल पते यहाँ देखें। अपनी जरूरत के अनुसार सही व्यक्ति से तुरंत संपर्क करें।"
      ctaImage="/SubMenuDarshanimg/Rectangle 3.png"
      ctaButtonText="दर्शन समझें"
    />
  );
}
