"use client";

import React from "react";

const Chart01 = () => {
  return (
    <div className="chart-theme w-full p-4 md:p-8 transition-colors duration-300 text-(--chart-text)!">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* TOP BOX */}
          <div className="border border-(--border-color)! p-6 rounded-sm text-center">
            <h2 className="text-(--chart-primary)! text-xl font-bold mb-2">
              अस्तित्व दर्शन
            </h2>
            <p className="text-xl">
              व्यापक वस्तु कभी शून्य में सम्पूर्ण एक बड़ा वस्तु सम्पन्न (डूबा भीगा घिरा) है
            </p>
            <p className="text-xl font-semibold">
              अस्तित्व = सह अस्तित्व = सत्ता में सम्पुर्ण प्रकृति
            </p>
          </div>

          {/* STRIP */}
          <div className="text-(--chart-primary)! p-2 text-center rounded-sm font-bold text-xl">
            व्यापक वस्तु में सम्पुर्ण क्रियाशील वस्तु (जड़ चैतन्य प्रकृति)
          </div>

          {/* 3 BOX */}
          <div className="grid grid-cols-3 gap-2">

            {[
              {
                title: "भीगा",
                content: ["ऊर्जा सम्पन्न", "बल सम्पन्न", "चुम्बकीय बल", "सम्पन्नता"],
              },
              {
                title: "डूबा",
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
                content: [
                  "नियंत्रण",
                  "नियम",
                  "संतुलन",
                  "स्थिति",
                  "समय व्यवस्था के लिए वर्तमान",
                ],
              },
            ].map((item, i) => (
              <div key={i} className="border border-(--border-color)">
                <div className="text-xl bg-(--color-bg-2) p-2 text-center border-b border-(--border-color) font-bold text-(--chart-primary)">
                  {item.title}
                </div>
                <div className="p-4 text-xl space-y-2 text-center" >
                  {item.content.map((c, j) => (
                    <p key={j}>{c}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MID TEXT */}
          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-xl">
            नाम क्रिया सफलता
          </div>

          {/* TABLE */}
          <div className="flex border border-(--border-color)!">

            {/* LEFT */}
            <div className="w-1/4 p-4 border-r border-(--border-color)! flex items-center justify-center text-center bg-(--color-bg-2)">
              <p className="text-(--chart-primary)! font-bold text-xl">
                स्वत्व <br />
                स्व = होना <br />
                त्व = व्यवस्था सूत्र <br />
                सुव्यवस्था उपयोगिता क्रम में
              </p>
            </div>

            {/* RIGHT */}
            <div className="w-3/4 grid grid-cols-3">

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
                <div key={i} className="p-2 border-r last:border-r-0 border-(--border-color)">
                  <p className="font-bold text-center border-b border-(--border-color) mb-2 text-(--chart-primary)!">
                    {col.title}
                  </p>
                  <div className="text-xl space-y-1 text-center">
                    {col.items.map((it, j) => (
                      <p key={j}>{it}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-xl">
            सह अस्तित्व की नित्य वर्तमानता
          </div>
        </div>

        {/* RIGHT COLUMN */}
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
            },
            {
              title: "जीवावस्था (जीव जंतु)",
              sub: "स्वभाव: क्रूर अक्रूर",
              dharma: "अस्तित्व, पुष्टि, जीने की आशा",
            },
            {
              title: "प्राणावस्था",
              sub: "(पेड़ पौधे, शरीर रचनाएँ) स्वभाव: सारक मारक",
              dharma: "अस्तित्व, पुष्टि, जीने की आशा",
              badge: "जड़ प्रकृति",
            },
            {
              title: "पदार्थावस्था",
              sub: "(मृदा मिट्टी, पत्थर, मणि और वायु) स्वभाव: संघटन विसंघटन",
              dharma: "अस्तित्व",
            },
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 relative">

              {/* LEFT */}
              <div className="col-span-3 border border-(--border-color) p-2 text-xl bg-(--color-bg-2) text-center ">
                <p>ऊर्जा सम्पन्नता</p>
                <p>क्रियाशीलता</p>
                <p className="text-(--chart-primary)! font-bold">प्रमाण सम्पन्नता</p>
              </div>

              {/* CENTER */}
              <div className="col-span-6 border border-(--border-color) p-4 text-center">
                <h4 className="text-(--chart-primary)! font-bold text-xl mb-1">
                  {item.title}
                </h4>
                <p className="text-xl opacity-80">{item.sub}</p>

                <div className="mt-2">
                  <p className="text-(--chart-primary)! font-bold text-xl">
                    धर्म
                  </p>
                  <p className="text-xl">{item.dharma}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-span-3 border border-(--border-color) p-2 text-xl bg-(--color-bg-2) text-center">
                <p>पदार्थता</p>
                <p>निर्वाह करना</p>
                <p className="text-(--chart-primary)! font-bold">मानना</p>
              </div>

              {/* BADGE */}
              {item.badge && (
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-(--chart-primary) text-black text-xl font-bold px-3 py-2 rounded-full border-2 border-(--color-bg-1)">
                  {item.badge}
                </div>
              )}
            </div>
          ))}

          {/* ARROWS */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-(--chart-primary)! translate-x-6 text-lg">
                ↑
              </span>
            ))}
          </div>

          <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-xl">
            प्रकृति में विकासक्रम विकास
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-8 border-t border-(--border-color) pt-4 text-center">
        <p className="text-xl italic opacity-70">
          अस्तित्व मूलक मानव केंद्रित चिंतन — मध्यस्थ दर्शन सहअस्तित्ववाद — मानव व्यवहार दर्शन — ए नागराज [2003]
        </p>
      </div>
    </div>
  );
};

export default Chart01;