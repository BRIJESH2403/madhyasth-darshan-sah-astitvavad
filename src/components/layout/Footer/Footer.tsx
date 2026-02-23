/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const Footer: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const linkClass =
    "body-md footer footer-text-muted relative w-fit \
   bg-[linear-gradient(var(--color-primary),var(--color-primary))] \
   bg-[length:0%_2px] bg-no-repeat bg-left-bottom \
   transition-[background-size,color] duration-300 ease-out \
   hover:bg-[length:100%_2px]";

  const socialIcons = [
    {
      id: "instagram",
      white: "/social/instagram-white.svg",
      primary: "/social/instagram-primary.svg",
    },
    {
      id: "twitter",
      white: "/social/twitter-white.svg",
      primary: "/social/twitter-primary.svg",
    },
    {
      id: "linkedin",
      white: "/social/linkedin-white.svg",
      primary: "/social/linkedin-primary.svg",
    },
    {
      id: "youtube",
      white: "/Footericon/youtube-white.svg.png",
      primary: "/Footericon/youtube-primary.svg.png",
    },
  ];

  return (
    <footer className="footer-dark pt-16 pb-8">
      <div className="container">
        {/* ================= TOP ROW ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-xl">
            <h3 className="body-2xl primary-color mb-4">
              मध्यस्थ दर्शन सह-अस्तित्ववाद
            </h3>

            <p className="body-lg footer-text-muted">
              सह-अस्तित्व और जीवन विद्या का अध्ययन करने वाले बढ़ते समुदाय का
              हिस्सा बनें। नई पुस्तकों, कार्यशालाओं और संसाधनों की जानकारी सीधे
              अपने ईमेल पर प्राप्त करें।
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-3 text-left md:text-right">
            <a
              href="mailto:info@madhyasthdarshan.org"
              className={`${linkClass} block footer-text`}
            >
              info@madhyasthdarshan.org
            </a>

            <a
              href="tel:+919876543210"
              className={`${linkClass} block footer-text`}
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider my-10" />

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* ABOUT */}
          <div className="col-span-2">
            <p className="body-lg footer-heading mb-3">हमारे बारे में</p>
            <p className="body-md footer-text-muted">
              सह-अस्तित्व और जीवन विद्या का अध्ययन करने वाले बढ़ते समुदाय का
              हिस्सा बनें। नई पुस्तकों, कार्यशालाओं और संसाधनों की जानकारी सीधे
              अपने ईमेल पर प्राप्त करें।
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="body-lg footer-heading mb-4">त्वरित लिंक</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={linkClass}>
                  दर्शन परिचय
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  साहित्य
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  कार्यक्रम
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* SYSTEMS */}
          <div>
            <h4 className="body-lg footer-heading mb-4">व्यवस्थाएँ</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={linkClass}>
                  शिक्षा व्यवस्था
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  स्वास्थ्य व्यवस्था
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  न्याय व्यवस्था
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  उत्पादन व्यवस्था
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="body-lg footer-heading mb-4">संपर्क जानकारी</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={linkClass}>
                  क्षेत्रीय केंद्र
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  अध्ययन केंद्र
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  ईमेल एवं फ़ोन
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="body-lg footer-heading mb-4">हमसे जुड़ें</h4>

            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.id}
                  href="#"
                  onMouseEnter={() => setHoveredIcon(icon.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <img
                    src={hoveredIcon === icon.id ? icon.primary : icon.white}
                    alt={icon.id}
                    className={`w-5 h-5 transition-all duration-200 ${
                      hoveredIcon && hoveredIcon !== icon.id
                        ? "opacity-40"
                        : "opacity-100"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-sm footer-text">
            © 2025 मध्यस्थ दर्शन सह-अस्तित्ववाद, सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex gap-4">
            <a href="#" className="body-sm footer-text-muted">
              Privacy Policy
            </a>
            <span className="h-6 w-px bg-white opacity-40" />
            <a href="#" className="body-sm footer-text-muted">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
