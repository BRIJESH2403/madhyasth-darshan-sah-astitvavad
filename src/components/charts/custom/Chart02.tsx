"use client";

import React from "react";

const Chart02 = () => {
  return (
    <div className="chart-theme w-full min-h-screen p-6 md:p-10) transition-colors duration-300 font-(family-name:--font-primary)">
      <div className=" mx-auto flex flex-col items-center">
        
        {/* TOP ROW: 3 Main Header Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          <div className="border border-green-200 dark:border-green-900/50 p-6 rounded-sm text-center bg-green-50/30 dark:bg-green-900/10">
            <p className="text-xl leading-relaxed">ज्ञान स्वयं क्रिया न करते हुए अथवा क्रिया न होते हुए मानव जीवन में अनुभव स्थिति में आनन्द सहज वैभव प्रमाण है</p>
          </div>
          <div className="border border-orange-200 dark:border-orange-900/50 p-6 rounded-sm text-center bg-orange-50/30 dark:bg-orange-900/10">
            <h2 className="text-(--chart-primary)! text-xl font-bold mb-1">ज्ञान</h2>
            <p className="text-xl opacity-80">(ज्ञान अथवा शून्य से रिक्त और मुक्त इकाई नहीं है)</p>
          </div>
          <div className="border border-green-200 dark:border-green-900/50 p-6 rounded-sm text-center bg-green-50/30 dark:bg-green-900/10">
            <p className="text-xl leading-relaxed">अनुभव पूर्वक अभिव्यक्ति ही ज्ञान है। ज्ञान ही जागृत मानव में सकारात्मक क्रियाओं का आधार अथवा प्रेरणा स्रोत है</p>
          </div>
        </div>

        {/* CONNECTING TREE LINE SYSTEM */}
        <div className="relative w-full mb-12 hidden md:block">
          {/* Main Horizontal Line */}
          <div className="absolute top-0 left-[6%] right-[6%] h-0.75 bg-(--color-primary)"></div>
          {/* Vertical Ticks */}
          <div className="flex justify-between px-[6%]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-0.75 h-10 bg-(--color-primary)"></div>
            ))}
          </div>
        </div>

        {/* EIGHT ATTRIBUTES ROW */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-3 w-full mb-16">
          {[
            { label: "अनुभव काल में", value: "आनंद" },
            { label: "सर्वत्र एक सा अनुभव में आने के कारण", value: "ईश्वर" },
            { label: "ज्ञान में समस्त क्रियायें संरक्षित और नियंत्रित होने के कारण", value: "लोकेश" },
            { label: "सर्वत्र एक सा विद्यमान होने के कारण", value: "व्यापक" },
            { label: "चैतन्य के साथ", value: "चेतना" },
            { label: "आत्मा से सूक्ष्मतम होने के कारण", value: "परमात्मा" },
            { label: "प्रत्येक वस्तु सत्ता में सम्पृक्त, सक्रिय रहने के कारण से", value: "निरपेक्ष ऊर्जा" },
            { label: "अपरिणामिता के कारण", value: "पूर्ण" },
          ].map((item, idx) => (
            <div key={idx} className="border border-orange-100 dark:border-orange-900/30 p-3 text-center min-h-40 flex flex-col justify-center bg-(--color-bg-2) rounded-sm">
              <p className="text-xl leading-snug mb-2">{item.label}</p>
              <p className="text-(--chart-primary)! font-bold text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-12 items-stretch">
          {/* Left Block */}
          <div className="md:col-span-3 border border-blue-100 dark:border-blue-900/30 p-8 flex items-center text-center bg-(--color-bg-1) shadow-sm">
            <p className="text-xl leading-loose">सत्ता में डूबा, भीगा, घिरा हुआ जड़-चैतन्य प्रकृति है। यही सह-अस्तित्व है, सह-अस्तित्व ही नित्य है यही ज्ञान है। सह-अस्तित्व में ही नियम, नियंत्रण, संतुलन, न्याय, धर्म, परम सत्य स्पष्ट हैं।</p>
          </div>

          {/* Center Block (Green Border) */}
          <div className="md:col-span-6 border border-green-200 dark:border-green-900/50 p-8 text-center bg-green-50/10 dark:bg-green-900/5 flex flex-col justify-center">
            <p className="text-xl leading-loose">
              (ज्ञान) व्यापक सत्ता/परमात्मा जागृत मानव में, से, के लिये कार्य-व्यवहार काल में <span className="font-bold">नियम</span> के रूप में, <br/>
              विचार काल में <span className="font-bold">समाधान</span> के रूप में, <br/>
              अनुभव काल में <span className="font-bold">आनंद</span> के रूप में <br/>
              आचरण काल में <span className="font-bold">न्याय</span> के रूप में प्राप्त है <br/>
              सत्ता में संपूर्ण प्रकृति सम्पृक्त अविभाज्य रूप में विद्यमान है यही सह-अस्तित्व है
            </p>
          </div>

          {/* Right Block (Attributes List) */}
          <div className="md:col-span-3 border border-blue-100 dark:border-blue-900/30 p-6 bg-(--color-bg-1)! shadow-sm">
            {[
              { title: "नित्य", desc: "सदा-सदा एक सा विद्यमान है" },
              { title: "सत्य", desc: "सदा-सदा एक सा भास-आभास मान एवं अनुभवगम्य है।" },
              { title: "शुद्ध", desc: "सदा-सदा एक सा सुखप्रद है।" },
              { title: "बुद्ध", desc: "सदा-सदा एक सा बोधगम्य है।" },
              { title: "सत्ता", desc: "सदा-सदा प्रकृति होने और न होने के स्थलों में वैभव।" },
            ].map((node, i) => (
              <div key={i} className="mb-3 text-center last:mb-0">
                <p className="text-(--chart-primary)! font-bold text-xl">{node.title}</p>
                <p className="text-xl opacity-90">{node.desc}</p>
              </div>
            ))}
            <p className="text-(--chart-primary)! font-bold text-xl text-center mt-4 border-t border-orange-100 dark:border-orange-900/20 pt-2">
              सत्ता जड़ चेतन में पारस्परिक व परस्परता में पारदर्शी है।
            </p>
          </div>
        </div>

        {/* BOTTOM SUMMARY BOX */}
        <div className="w-full border border-orange-100 dark:border-orange-900/30 bg-orange-50/5 dark:bg-orange-900/5 p-6 text-center mb-6">
          <p className="text-xl leading-relaxed space-y-2">
            ज्ञान ही शून्य और शून्य ही ज्ञान है। क्रियाहीनता की स्थिति की शून्य संज्ञा है। <br/>
            ज्ञान स्वयं क्रिया न करते हुए अथवा क्रिया न होते हुए भी समस्त क्रियाओं का आधार और शून्य दोनों एक ही सिद्ध होते हैं। <br/>
            इसमें अवस्थित होने से ही क्रिया के लिए प्रेरणा प्राप्त है। ज्ञान अथवा शून्य से रिक्त और मुक्त इकाई नहीं है।
          </p>
        </div>

        {/* FOOTER BAR */}
        <div className="w-full bg-(--color-bg-2) border border-(--border-color) p-3 text-center">
          <p className="text-xl opacity-70">
            अस्तित्व मूलक मानव केंद्रित चिंतन मध्यस्थ दर्शन सह अस्तित्ववाद मानव व्यवहार दर्शन ए नागराज (2003) pg 2-5 जीवन विद्या प्रकाशन, अमरकंटक
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart02;