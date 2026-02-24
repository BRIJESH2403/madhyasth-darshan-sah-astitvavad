"use client";

import Image from "next/image";
import CtaButton from "@/components/ui/CTAButton";

export default function PrernaAurAnusandhanSection() {
  return (
    <section className="w-full bg-(--color-bg-2) py-20">
      {/* container applied here */}
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-20">
          <div className="max-w-180">
            <h2 className="mb-6">प्रेरणा और अनुसंधान</h2>

            <div className="space-y-6 body-lg">
              <p>
                मध्यस्थ दर्शन सह–अस्तित्ववाद श्री ए. नागराज (1919–2016) का
                अनुसंधान है। यह अनुसंधान मानव में भ्रम और अज्ञान के कारणों की
                खोज, मानव जाति की समस्याओं के समाधान तथा रहस्यात्मक मान्यताओं से
                मुक्त अस्तित्व की वास्तविकता, यथार्थता और सत्यता की स्पष्टता के
                उद्देश्य से किया गया। यह अनुसंधान उन्होंने मानवता को समर्पित
                किया।
              </p>

              <p>
                श्री ए. नागराज को यह स्पष्टता समाधि-संयम साधना विधि और
                अस्तित्व-मूलक मानव केंद्रित चिंतन के माध्यम से प्राप्त हुई,
                जिसमें उन्होंने जाना कि अस्तित्व के मूल में सह–अस्तित्व ही है।
                सह–अस्तित्व की पहचान चार अवस्थाओं — पदार्थावस्था, प्राणावस्था,
                जीवावस्था और ज्ञानावस्था — से होती है, जो विकास के विभिन्न
                स्तरों को दर्शाती हैं। इसके साथ ही अस्तित्व में चार पद भी होते
                हैं — प्राणपद, भ्रांति पद, देवपद और दिव्यपद — जो मानव चेतना के
                विकास और उसकी सामाजिक भागीदारी को इंगित करते हैं। अस्तित्व-मूलक
                वास्तविकताएं मानव के आचरण, संबंधों और न्यायपूर्ण मानव
                चेतना-संपन्न समाज की व्यवस्थाओं पर स्पष्टता प्रदान करती हैं।
              </p>

              <p>
                मध्यस्थ दर्शन सह–अस्तित्ववाद, जिसे लोक-शिक्षा में ‘जीवन विद्या’
                कार्यक्रम भी कहा जाता है, न केवल दार्शनिक और सैद्धांतिक समझ
                प्रदान करता है, बल्कि यह मानव चेतना के अनुरूप सार्वभौमिक
                व्यवस्था में जीने की संरचना भी प्रस्तुत करता है। यह दर्शन
                सह–अस्तित्व की समझ को परिवार, समाज, राष्ट्र और वैश्विक स्तर पर
                मानव लक्ष्य तथा समग्र समाधानयुक्त जीवन से जोड़ता है।
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <CtaButton
                buttonType="white"
                text="अध्ययन से जुड़ें"
                bgColor="transparent"
                textColor="var(--cta-color)"
                borderColor="var(--cta-color)"
                showBorder
                size="md"
              />
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/PrernaAurAnusandhanSectionimg/Rectangle 3.png"
              alt="श्री ए. नागराज"
              width={520}
              height={660}
              className="rounded-xl object-cover w-full xl:w-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
