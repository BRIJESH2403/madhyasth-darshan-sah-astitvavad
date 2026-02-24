"use client";

import React from "react";

const Chart01 = () => {
  return (
    <div className="chart-theme w-full p-4 md:p-8 transition-colors duration-300 text-(--color-text-body)">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Astitva Darshan */}
        <div className="flex flex-col gap-4">
          {/* TOP BOX */}
          <div className="border border-(--border-color)! p-6 rounded-sm text-center bg-(--color-bg-2)">
            <h2 className="text-(--chart-primary)! text-2xl font-bold mb-2">
              अस्तित्व दर्शन
            </h2>
            <p className="text-xl">
              व्यापक वस्तु कभी शून्य में सम्पूर्ण एक बड़ा वस्तु सम्पन्न (डूबा भीगा घिरा) है
            </p>
            <p className="text-xl font-semibold mt-1">
              अस्तित्व = सह अस्तित्व = सत्ता में सम्पुर्ण प्रकृति
            </p>
          </div>

          {/* STRIP */}
          <div className="bg-(--color-bg-2) border border-(--border-color) text-(--chart-primary)! p-2 text-center rounded-sm font-bold text-xl">
            व्यापक वस्तु में सम्पुर्ण क्रियाशील वस्तु (जड़ चैतन्य प्रकृति)
          </div>

          {/* 3 BOX (Bhiga, Duba, Ghira) */}
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                title: "भीगा",
                bg: "bg-green-50/10", // Subtle tint for light mode, handled by opacity in dark
                content: ["ऊर्जा सम्पन्न", "बल सम्पन्न", "चुम्बकीय बल", "सम्पन्नता"],
              },
              {
                title: "डूबा",
                bg: "bg-orange-50/10",
                content: [
                  "क्रियाशीलता",
                  "(क्रिया की निरंतरता)",
                  "अक्षयता",
                  "स्व सहित व्यवस्था",
                  "समग्र व्यवस्था में भागीदारी",
                ],
              },
              {
                title: "घिरा",
                bg: "bg-blue-50/10",
                content: [
                  "नियंत्रण",
                  "नियम",
                  "संतुलन",
                  "स्थिति",
                  "समय व्यवस्था के लिए वर्तमान",
                ],
              },
            ].map((item, i) => (
              <div key={i} className={`border border-(--border-color) ${item.bg}`}>
                <div className="text-xl bg-(--color-bg-2) p-2 text-center border-b border-(--border-color) font-bold text-(--chart-primary)!">
                  {item.title}
                </div>
                <div className="p-4 text-xl md:text-md space-y-2 text-center leading-tight">
                  {item.content.map((c, j) => (
                    <p key={j}>{c}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md">
            नाम क्रिया सफलता
          </div>

          {/* BOTTOM TABLE SECTION */}
          <div className="flex border border-(--border-color)!">
            {/* LEFT CELL */}
            <div className="w-1/3 p-4 border-r border-(--border-color)! flex items-center justify-center text-center bg-(--color-bg-2)">
              <p className="text-(--chart-primary)! font-bold text-md">
                स्वत्व <br />
                स्व = होना <br />
                त्व = व्यवस्था सूत्र <br />
                सुव्यवस्था उपयोगिता क्रम में
              </p>
            </div>

            {/* RIGHT CELLS */}
            <div className="w-2/3 grid grid-cols-3">
              {[
                {
                  title: "श्रम",
                  items: ["लक्ष्य (विकास)", "समाधान", "अभ्युदय", "अखण्डता", "मध्वय", "दैहिक भौतिक"],
                },
                {
                  title: "गति",
                  items: ["(सफलता)", "आचरण पूर्णता", "दिव्य मानवीय", "विषयबद्ध"],
                },
                {
                  title: "परिणाम",
                  items: ["(अमरत्व)", "जीवन", "(चैतन्य इकाई)"],
                },
              ].map((col, i) => (
                <div key={i} className="p-2 border-r last:border-r-0 border-(--border-color) bg-(--color-bg-1)">
                  <p className="font-bold text-center border-b border-(--border-color) mb-2 text-(--chart-primary)! text-xl">
                    {col.title}
                  </p>
                  <div className="text-xs md:text-xl space-y-1 text-center">
                    {col.items.map((it, j) => (
                      <p key={j}>{it}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md">
            सह अस्तित्व की नित्य वर्तमानता
          </div>
        </div>

        {/* RIGHT COLUMN: Nature States */}
        <div className="relative flex flex-col gap-3">
          <div className="border border-(--border-color) p-4 text-center rounded-sm bg-(--color-bg-2) text-xl font-bold">
            सह अस्तित्व में प्रकृति में (क्रिया) सम्पन्नता का विकास <br />
            प्रकृति में चार अवस्थाओं में स्वभाव, धर्म
          </div>

          {[
            {
              title: "ज्ञानावस्था (मानव)",
              sub: "स्वभाव: धीरता वीरता उदारता, दया करुणा",
              dharma: "अस्तित्व, पुष्टि, जीने की आशा सहित सुख",
              badge: "चैतन्य प्रकृति",
              borderColor: "border-green-500/40",
            },
            {
              title: "जीवावस्था (जीव जंतु)",
              sub: "स्वभाव: क्रूर अक्रूर",
              dharma: "अस्तित्व, पुष्टि, जीने की आशा",
              borderColor: "border-(--border-color)",
            },
            {
              title: "प्राणावस्था",
              sub: "(पेड़ पौधे, शरीर रचनाएँ) स्वभाव: सारक मारक",
              dharma: "अस्तित्व, पुष्टि, जीने की आशा",
              badge: "जड़ प्रकृति",
              borderColor: "border-orange-500/40",
            },
            {
              title: "पदार्थावस्था",
              sub: "(मृदा मिट्टी, पत्थर, मणि और वायु) स्वभाव: संघटन विसंघटन",
              dharma: "अस्तित्व",
              borderColor: "border-(--border-color)",
            },
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 relative group">
              {/* LEFT INFO */}
              <div className="col-span-3 border border-(--border-color) p-2 text-xs md:text-xl bg-(--color-bg-2) text-center flex flex-col justify-center">
                <p>ऊर्जा सम्पन्नता</p>
                <p>क्रियाशीलता</p>
                <p className="text-(--chart-primary)! font-bold">प्रमाण सम्पन्नता</p>
              </div>

              {/* CENTER CONTENT */}
              <div className={`col-span-6 border ${item.borderColor} p-4 text-center bg-(--color-bg-1)`}>
                <h4 className="text-(--chart-primary)! font-bold text-xl mb-1">
                  {item.title}
                </h4>
                <p className="text-xl opacity-80">{item.sub}</p>

                <div className="mt-2 pt-2 border-t border-(--border-color) border-dashed">
                  <p className="text-(--chart-primary)! font-bold text-xl">धर्म</p>
                  <p className="text-xl">{item.dharma}</p>
                </div>
              </div>

              {/* RIGHT INFO */}
              <div className="col-span-3 border border-(--border-color) p-2 text-xs md:text-xl bg-(--color-bg-2) text-center flex flex-col justify-center">
                <p>पदार्थता</p>
                <p>निर्वाह करना</p>
                <p className="text-red-500 font-bold">मानना</p>
              </div>

              {/* SIDE BADGE (Chaitanya/Jad) */}
              {item.badge && (
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full bg-(--color-primary) text-black text-xs font-bold px-2 py-4 rounded-full border-2 border-(--color-bg-1) z-10 [writing-mode:vertical-lr] rotate-180">
                  {item.badge}
                </div>
              )}
            </div>
          ))}

          {/* VERTICAL ARROWS */}
          <div className="absolute right-0 top-16 bottom-16 flex flex-col justify-around">
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-(--chart-primary)! translate-x-4 text-2xl font-bold">
                ↑
              </span>
            ))}
          </div>

          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md mt-auto">
            प्रकृति में विकासक्रम विकास
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-12 border-t border-(--border-color) pt-4 text-center">
        <p className="text-xl italic opacity-60">
          अस्तित्व मूलक मानव केंद्रित चिंतन — मध्यस्थ दर्शन सहअस्तित्ववाद — मानव व्यवहार दर्शन — ए नागराज [2003] pg 2-5 जीवन विद्या प्रकाशन, अमरकंटक
        </p>
      </div>
    </div>
  );
};

export default Chart01;