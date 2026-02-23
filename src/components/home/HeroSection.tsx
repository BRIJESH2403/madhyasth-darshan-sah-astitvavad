/* eslint-disable @next/next/no-img-element */
"use client";

import CtaButton from "@/components/ui/CTAButton";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen xl:h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Herobg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="max-w-270 mx-auto">
            <h1 className="font-bold" style={{ color: "white" }}>
              मध्यस्थ दर्शन सह-अस्तित्ववाद – अखंड समाज
              <br />
              सार्वभौमिक व्यवस्था का मार्ग
            </h1>

            <p className="mt-6 max-w-180 mx-auto" style={{ color: "#CFCFCF" }}>
              सह-अस्तित्व पर आधारित एक प्रामाणिक दर्शन जो मानवीय सर्वार्थ, आदर्य
              और मानवीय अखंड समाज की सहमता लाता है। यह प्राकृतिक
              नियम-नियमन-सुलतान और सह-अस्तित्व में समाजज्य साथ जीने का
              व्यावहारिक समझ और व्यवस्था स्पष्ट करता है।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CtaButton
                text="दर्शन समझें"
                bgColor="var(--color-primary)"
                textColor="black"
                size="lg"
              />

              <CtaButton
                text="अध्ययन से जुड़ें"
                bgColor="transparent"
                textColor="white"
                showBorder
                borderColor="white"
                size="lg"
                buttonType="white"
                iconColor="black"
                icon={
                  <img
                    src="/HeroPageBG/Vector.png"
                    alt="Arrow Icon"
                    className="w-4 h-4 ml-1"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
