import Image from "next/image";
import CtaButton from "@/components/ui/CTAButton";

export default function JoinSection() {
  return (
    <section className="light-bg-2 dark-bg-2 py-20">
      <div className="container">
        {/* MAIN TITLE (IMAGE + CONTENT KE UPAR) */}
        <h2 className="text-center mb-12">आइए जुड़ें</h2>

        {/* IMAGE + CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full max-w-174.25 mx-auto lg:mx-0">
            <Image
              src="/JoinSectionimg/Heroimg.gif"
              alt="Speaker"
              width={697}
              height={505}
              className="rounded-[10px] object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-177.75 space-y-6">
            <p className="body-md">
              मध्यम स्तर के सह-अस्तित्व अध्ययन, भौतिकता और हरकतशील मान्यताओं का
              विवेकपूर्ण खोज वेद से जुड़ने के इस माध्यम द्वारा सह-अस्तित्व जीवन
              विद्या का अभ्यास करने वाले समूह/समाज का हिस्सा बनें।
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <Image
                  src="/JoinSectionimg/1.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <div>
                  <h3 className="mb-1">आपको सीधे ईमेल पर प्राप्त होगा:</h3>
                  <ul className="list-disc pl-5 space-y-1 body-md">
                    <li>नई सामग्री और लेख</li>
                    <li>कार्यक्रमों की जानकारी</li>
                    <li>अध्ययन संसाधन</li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <Image
                  src="/JoinSectionimg/2.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <div>
                  <h3 className="mb-1">यह अभ्यास आपको देगा:</h3>
                  <ul className="list-disc pl-5 space-y-1 body-md">
                    <li>सह-अस्तित्व जीवन विद्या की गहरी समझ</li>
                    <li>स्वस्थ सोचने की क्षमता और जीवन का मार्ग</li>
                    <li>समुदाय से जुड़ने का अवसर</li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <Image
                  src="/JoinSectionimg/3.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <h3>नीचे अपना ईमेल दर्ज करें और हमारे समुदाय से जुड़ें।</h3>
              </div>
            </div>

            {/* EMAIL INPUT + CTA */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 ">
              {/* INPUT */}
              <input
                type="email"
                placeholder="अपना ईमेल दर्ज करें"
                className="
                        w-full
                        px-4
                        py-3
                        rounded-md
                        border
                        border-gray-300
                        focus:outline-none
                        focus:ring-2
                        focus:ring-(--cta-color)
                        "
              />

              {/* BUTTON */}
              <CtaButton
                text="आइए जुड़ें"
                bgColor="var(--color-primary)"
                textColor="black" 
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
