import DarshanMenu from "./menus/DarshanMenu";
import AdhyayanMenu from "./menus/AdhyayanMenu";
import KaryashalaeMenu from "./menus/KaryashalaeMenu";
import VyavasthaeMenu from "./menus/VyavasthaeMenu";
import SamudaayMenu from "./menus/SamudaayMenu";
import SamparkMenu from "./menus/SamparkMenu";
import { JSX } from "react";

/* =========================
   DESKTOP MEGA MENU REGISTRY
   ========================= */
export const MENU_REGISTRY: Record<string, JSX.Element> = {
  darshan: <DarshanMenu />,
  adhyayan: <AdhyayanMenu />,
  karyashalae: <KaryashalaeMenu />,
  vyavasthae: <VyavasthaeMenu />,
  samudaay: <SamudaayMenu />,
  sampark: <SamparkMenu />,
};

/* =========================
   MOBILE MENU DATA
   ========================= */
export interface MenuItem {
  title: string;
  desc?: string;
  href: string;
}

export const MENU_DATA: Record<string, MenuItem[]> = {
  darshan: [
    {
      title: "मध्यस्थ दर्शन सह-अस्तित्ववाद",
      desc: "",
      href: "/darshan",
    },
    {
      title: "प्रणेता ए. नागराज की खोज",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "विकल्प: भौतिकवाद और आध्यात्मवाद",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "मूल सिद्धांत और अनुसंधान",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "स्वास्थ्य व्यवस्था",
      desc: "",
      href: "/darshan/chetna",
    },
  ],

  adhyayan: [
    {
      title: "पुस्तकें और साहित्य",
      desc: "",
      href: "/darshan",
    },
    {
      title: "चार्ट्स संग्रह (500 चार्ट्स)",
      desc: "",
      href: "/ChartsHome",
    },
        {
      title: "वीडियो लाइब्रेरी",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "ऑडियो संग्रह",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "अनुसंधान प्रकाशन",
      desc: "",
      href: "/darshan/chetna",
    },
  ],

  karyashalae: [
    {
      title: "जीवन विद्या क्या है?",
      desc: "",
      href: "/darshan",
    },
    {
      title: "कार्यशालाएं और शिविर",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "शिक्षा व्यवस्था",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "कार्यान्वयन योजनाएं",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "सफलता की कहानियां",
      desc: "",
      href: "/darshan/chetna",
    },
            {
      title: "साहित्य लेखन",
      desc: "",
      href: "/darshan/chetna",
    },
  ],

  vyavasthae: [
    {
      title: "मध्यस्थ दर्शन सह-अस्तित्ववाद",
      desc: "",
      href: "/darshan",
    },
    {
      title: "प्रणेता ए. नागराज की खोज",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "विकल्प: भौतिकवाद और आध्यात्मवाद",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "मूल सिद्धांत और अनुसंधान",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "स्वास्थ्य व्यवस्था",
      desc: "",
      href: "/darshan/chetna",
    },
  ],

  samudaay: [
    {
      title: "मध्यस्थ दर्शन सह-अस्तित्ववाद",
      desc: "",
      href: "/darshan",
    },
    {
      title: "प्रणेता ए. नागराज की खोज",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "विकल्प: भौतिकवाद और आध्यात्मवाद",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "मूल सिद्धांत और अनुसंधान",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "स्वास्थ्य व्यवस्था",
      desc: "",
      href: "/darshan/chetna",
    },
  ],

  sampark: [
    {
      title: "मध्यस्थ दर्शन सह-अस्तित्ववाद",
      desc: "",
      href: "/darshan",
    },
    {
      title: "प्रणेता ए. नागराज की खोज",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "विकल्प: भौतिकवाद और आध्यात्मवाद",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "मूल सिद्धांत और अनुसंधान",
      desc: "",
      href: "/darshan/chetna",
    },
        {
      title: "स्वास्थ्य व्यवस्था",
      desc: "",
      href: "/darshan/chetna",
    },
  ],
};
