"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

/* --- TYPES --- */
interface DictionaryItem {
  title: string;
  subtitle?: string;
  description: string;
  details?: string[]; // संगतता के लिए विवरण सूची जोड़ी गई
}

/* --- DICTIONARY DATA --- */
const dictionaryData: Record<string, DictionaryItem> = {
  anand: {
    title: "आनंद",
    subtitle: "अनुभव काल में",
    description: "परमानंद की स्थिति जहाँ स्वयं में पूर्णता का अनुभव होता है। यह विश्राम की पराकाष्ठा है।",
    details: ["स्वयं में पूर्णता", "विश्राम की पराकाष्ठा", "अनुभव सहज वैभव"]
  },
  ishwar: {
    title: "ईश्वर",
    subtitle: "सर्वत्र एक सा अनुभव",
    description: "व्यापक सत्ता जो देश और काल से परे हर जगह एक समान विद्यमान है। यह अपरिवर्तनीय है।",
    details: ["व्यापक सत्ता", "अपरिवर्तनीय", "देश-काल से परे"]
  },
  lokesh: {
    title: "लोकेश",
    subtitle: "संरक्षण और नियंत्रण",
    description: "ज्ञान में समस्त क्रियायें संरक्षित और नियंत्रित होने के कारण इसे लोकेश कहा गया है।",
    details: ["समस्त क्रियाओं का संरक्षण", "नियंत्रण का आधार", "ज्ञान स्वरूप"]
  },
  vyapak: {
    title: "व्यापक",
    subtitle: "सर्वत्र विद्यमान",
    description: "शून्य सत्ता जो हर वस्तु के आर-पार और चारों ओर है। यह पारगामी और निरंतर है।",
    details: ["पारगामी (Omnipresent)", "निरंतरता", "शून्य सत्ता"]
  },
  chetna: {
    title: "चेतना",
    subtitle: "चैतन्य के साथ",
    description: "जीवन क्रियाओं की जागृति और समझने की क्षमता। यह अनुभव का आधार है।",
    details: ["जागृति", "समझने की क्षमता", "अनुभव का आधार"]
  },
  parmatma: {
    title: "परमात्मा",
    subtitle: "आत्मा से सूक्ष्मतम",
    description: "आत्मा जिसमें सम्पृक्त है, वही परम तत्व परमात्मा है। यह अस्तित्व का आधार है।",
    details: ["परम तत्व", "अस्तित्व का आधार", "आत्मा की सम्पृक्तता"]
  },
  nirpeksh: {
    title: "निरपेक्ष ऊर्जा",
    subtitle: "सक्रिय रहने के कारण",
    description: "वह ऊर्जा जिसे किसी माध्यम की आवश्यकता नहीं है। यह अक्षय और साम्य ऊर्जा है।",
    details: ["अक्षय ऊर्जा", "साम्य ऊर्जा", "माध्यम विहीन"]
  },
  purna: {
    title: "पूर्ण",
    subtitle: "अपरिणामिता के कारण",
    description: "जिसमें कोई परिवर्तन या परिणाम घटित नहीं होता, वह सदा एक सा रहता है।",
    details: ["अपरिणामी", "सदा एक सा", "परिवर्तन विहीन"]
  },
  gyan_center: {
    title: "ज्ञान",
    description: "ज्ञान स्वयं क्रिया न करते हुए भी समस्त क्रियाओं का आधार है। अनुभव पूर्वक अभिव्यक्ति ही ज्ञान है।",
    details: ["क्रियाओं का आधार", "अनुभव पूर्वक अभिव्यक्ति", "सकारात्मक प्रेरणा स्रोत"]
  }
};

const Chart03 = () => {
  const [selectedItem, setSelectedItem] = useState<DictionaryItem | null>(null);

  const openDrawer = (e: React.MouseEvent, item: DictionaryItem) => {
    e.stopPropagation();
    setSelectedItem(item);
  };

  const closeDrawer = () => setSelectedItem(null);

  return (
    <div className="relative min-h-screen overflow-hidden" onClick={closeDrawer}>
      {/* MAIN CONTENT WRAPPER */}
      <div className="chart-theme w-full min-h-screen py-12 px-4 md:px-10 font-(family-name:--font-primary) transition-all duration-300">
        <div className="mx-auto max-w-7xl">
          
          {/* SECTION 1: TOP THREE BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="border border-green-200 p-6 rounded bg-green-50/20 text-center flex items-center justify-center">
              <p className="body-lg leading-relaxed text-(--chart-text)">ज्ञान स्वयं क्रिया न करते हुए अथवा क्रिया न होते हुए मानव जीवन में अनुभव स्थिति में आनन्द सहज वैभव प्रमाण है</p>
            </div>
            
            <div 
              onClick={(e) => openDrawer(e, dictionaryData.gyan_center)}
              className="border-2 border-orange-300 p-8 rounded bg-orange-50/30 text-center cursor-pointer hover:bg-orange-100/40 transition-all shadow-sm group"
            >
              <h2 className="text-(--chart-primary)! font-bold mb-2 text-3xl">ज्ञान</h2>
              <p className="body-md opacity-80 group-hover:opacity-100">(ज्ञान अथवा शून्य से रिक्त और मुक्त इकाई नहीं है)</p>
            </div>

            <div className="border border-green-200 p-6 rounded bg-green-50/20 text-center flex items-center justify-center">
              <p className="body-lg leading-relaxed text-(--chart-text)">अनुभव पूर्वक अभिव्यक्ति ही ज्ञान है। ज्ञान ही जागृत मानव में सकारात्मक क्रियाओं का आधार अथवा प्रेरणा स्रोत है</p>
            </div>
          </div>

          {/* SECTION 2: TREE CONNECTOR LINE */}
          <div className="relative w-full hidden md:block">
            <div className="absolute top-0 left-[6%] right-[6%] h-0.5 bg-(--chart-primary) opacity-30"></div>
            <div className="flex justify-between px-[6%]">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-0.5 h-8 bg-(--chart-primary) opacity-30"></div>
              ))}
            </div>
          </div>

          {/* SECTION 3: EIGHT ATTRIBUTES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 mb-16">
            {Object.entries(dictionaryData).filter(([key]) => key !== 'gyan_center').map(([key, item]) => (
              <div 
                key={key} 
                onClick={(e) => openDrawer(e, item)}
                className="border border-orange-100 p-4 text-center min-h-40 flex flex-col justify-center bg-(--chart-bg) rounded hover:border-(--chart-primary) hover:shadow-md cursor-pointer transition-all active:scale-95"
              >
                <p className="text-xs leading-snug mb-3 opacity-60 font-bold uppercase tracking-tighter text-(--chart-text)">{item.subtitle}</p>
                <p className="text-(--chart-primary)! font-bold text-xl leading-tight">{item.title}</p>
              </div>
            ))}
          </div>

          {/* SECTION 4: INTEGRATED MIDDLE LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
            <div className="lg:col-span-3 border border-blue-100 p-10 rounded shadow-sm text-center flex items-center bg-(--chart-blue-light)/10">
              <p className="body-lg leading-relaxed text-(--chart-text)">
                सत्ता में डूबा, भीगा, घिरा हुआ जड़-चैतन्य प्रकृति है। यही <span className="text-blue-500 font-bold">सह-अस्तित्व</span> है, सह-अस्तित्व ही नित्य है यही ज्ञान है।
              </p>
            </div>

            <div className="lg:col-span-6 border border-green-300 p-8 text-center rounded flex flex-col justify-center bg-(--chart-green-light)/10">
  <p className="body-xl text-(--chart-text) flex flex-col gap-4"> 
    
    <span>
      व्यापक सत्ता/परमात्मा जागृत मानव में, से, के लिये कार्य-व्यवहार काल में{" "}
      <span className="font-bold px-2 mx-1 inline-block">नियम</span> 
      के रूप में,
    </span>

    <span>
      विचार काल में{" "}
      <span className="font-bold px-2 mx-1 inline-block">समाधान</span> 
      के रूप में,
    </span>

    <span>
      अनुभव काल में{" "}
      <span className="font-bold px-2 mx-1 inline-block">आनंद</span> 
      के रूप में,
    </span>

    <span>
      आचरण काल में{" "}
      <span className="font-bold px-2 mx-1 inline-block">न्याय</span> 
      के रूप में प्राप्त है
    </span>
  </p>
</div>

            <div className="lg:col-span-3 border border-blue-100 p-6 rounded shadow-sm flex flex-col justify-between space-y-4 bg-(--chart-blue-light)/10">
              {[
                { t: "नित्य", d: "सदा-सदा एक सा" },
                { t: "सत्य", d: "सदा-सदा अनुभवगम्य" },
                { t: "शुद्ध", d: "सदा-सदा सुखप्रद" },
                { t: "बुद्ध", d: "सदा-सदा बोधगम्य" }
              ].map((obj, i) => (
                <div key={i} className="text-center pb-2">
                  <span className="text-(--chart-primary)! font-bold text-xl">{obj.t}</span>
                  <p className="text-xs opacity-70 text-(--chart-text)">{obj.d}</p>
                </div>
              ))}
              <p className="text-sm font-bold text-center mt-2 pt-2 border-t border-gray-200 text-(--chart-text)">सत्ता जड़ चेतन में पारदर्शी है।</p>
            </div>
          </div>

          {/* SECTION 5: FOOTER SUMMARY */}
          <div className="w-full border border-orange-100 bg-orange-50/20 p-8 text-center rounded mb-10">
            <p className="body-lg leading-relaxed max-w-4xl mx-auto text-(--chart-text)">
              ज्ञान ही शून्य और शून्य ही ज्ञान है। क्रियाहीनता की स्थिति की शून्य संज्ञा है। ज्ञान स्वयं क्रिया न करते हुए अथवा क्रिया न होते हुए भी समस्त क्रियाओं का आधार है।
            </p>
          </div>

          <footer className="w-full py-4 text-center border-t border-(--border-color) opacity-50 text-sm">
            अस्तित्व मूलक मानव केंद्रित चिंतन मध्यस्थ दर्शन | ए नागराज (2003) | जीवन विद्या प्रकाशन
          </footer>
        </div>
      </div>

      {/* --- INTEGRATED DICTIONARY DRAWER (BOTTOM RIGHT) --- */}
      {selectedItem && (
        <div className="fixed bottom-6 right-6 z-50 p-4 w-full max-w-md pointer-events-none">
          <div 
            className="bg-(--color-bg-1) rounded-3xl shadow-2xl border-t-8 border-(--chart-primary) overflow-hidden p-8 animate-in slide-in-from-right-10 duration-300 pointer-events-auto border" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-black text-(--chart-primary)! leading-tight">{selectedItem.title}</h3>
                {selectedItem.subtitle && (
                  <p className="text-sm opacity-50 font-bold uppercase tracking-wider mt-1 text-(--chart-text)">
                    {selectedItem.subtitle}
                  </p>
                )}
              </div>
              <button 
                onClick={closeDrawer} 
                className="text-2xl opacity-40 hover:opacity-100 p-1 transition-opacity"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-xl leading-relaxed text-(--chart-text) mb-6">
              {selectedItem.description}
            </p>
            
            {selectedItem.details && (
              <div className="bg-(--chart-blue-light)/10 p-6 rounded-2xl border border-(--border-color)">
                <h5 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 text-(--chart-text)">
                  Key Principles
                </h5>
                <ul className="space-y-3">
                  {selectedItem.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg">
                      <span className="mt-2 w-2 h-2 rounded-full bg-(--chart-primary) shrink-0" />
                      <span className="text-(--chart-text)">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chart03;