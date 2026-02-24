"use client";

import React from "react";
import CtaButton from "@/components/ui/CTAButton";

const WorkshopsSection = () => {
  const cards = [
    {
      title: "प्रारंभिक कार्यशालाएँ: सूचना एवं विषय-वस्तु",
      description:
        "जीवन बोध शिक्षाः सह-अस्तित्व में व्यवहार, जीवन की समझ, मानवविज्ञानिय आधार और परिवेशीय स्वास्थ्य व्यवस्था।",
      buttonText: "और पढ़ें",
      mediaSrc: "/कार्यशालाएँ, गोष्ठियाँ, अध्ययन-शोध कार्यक्रम/1.mp4",
      mediaType: "video",
    },
    {
      title: "गहन अध्ययन- शोध कार्यक्रम",
      description:
        "माध्यम्य दर्शन सह-अस्तित्ववाद का गहन पठन, अध्ययन, मनन एवं जागरूकता कार्यक्रम।",
      buttonText: "और पढ़ें",
      mediaSrc: "/कार्यशालाएँ, गोष्ठियाँ, अध्ययन-शोध कार्यक्रम/2.mp4",
      mediaType: "video",
    },
    {
      title: "सेमिनार, गोष्ठी-संयोगी एवं कार्यक्रम",
      description: "लोकव्यापीकरण के कार्यक्रम और अन्य कार्यक्रम।",
      buttonText: "और पढ़ें",
      mediaSrc: "/कार्यशालाएँ, गोष्ठियाँ, अध्ययन-शोध कार्यक्रम/3.gif",
      mediaType: "gif",
    },
  ];

  return (
    <section className="bg-(--color-bg-2) py-16">
      <div className="container">
        <h2 className="text-center mb-12">
          कार्यशालाएँ, गोष्ठियाँ, अध्ययन-शोध कार्यक्रम
        </h2>

        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                light-bg-1 dark-bg-1
                shadow-sm
                flex flex-col
                rounded-2xl
                overflow-hidden
                w-full
              "
            >
              {card.mediaType === "video" ? (
                <video
                  src={card.mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="
                    block w-full object-cover
                    h-55
                    sm:h-65
                    md:h-75
                    lg:h-90
                  "
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={card.mediaSrc}
                  alt={card.title}
                  className="
                    block w-full object-cover
                    h-55
                    sm:h-65
                    md:h-75
                    lg:h-90
                  "
                />
              )}

              {/* CONTENT */}
              <div
                className="
                  flex flex-col grow
                  px-4 py-4
                  sm:px-5
                "
              >
                <h3 className="mb-3">{card.title}</h3>

                <p className="body-md mb-4">
                  {card.description}
                </p>

                <div className="mt-auto">
                  <CtaButton
                    text={card.buttonText}
                    bgColor="var(--color-primary)"
                    textColor="black"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
