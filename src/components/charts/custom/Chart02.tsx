"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

/* --- TYPES --- */
interface DictionaryItem {
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
}

/* --- DATA --- */
const chartData: Record<string, DictionaryItem> = {
  astitva_main: {
    title: "अस्तित्व दर्शन",
    description: "अस्तित्व = सह-अस्तित्व = सत्ता में सम्पृक्त प्रकृति। व्यापक वस्तु (शून्य) में सम्पूर्ण क्रियाशील वस्तु (जड़-चैतन्य प्रकृति) डूबी, भीगी, घिरी है।",
    details: ["सत्ता में सम्पृक्त प्रकृति", "नित्य वर्तमान", "सह-अस्तित्व ही सत्य है"]
  },
  bhiga: {
    title: "भीगा",
    description: "व्यापक सत्ता में सम्पृक्त होने के कारण हर इकाई ऊर्जा सम्पन्न और बल सम्पन्न है।",
    details: ["ऊर्जा सम्पन्न", "बल सम्पन्न", "चुम्बकीय बल सम्पन्नता"]
  },
  duba: {
    title: "डूबा",
    description: "व्यापक सत्ता में डूबे होने के कारण हर इकाई में क्रियाशीलता और निरंतरता है।",
    details: ["क्रियाशीलता", "(क्रिया की निरंतरता)", "अक्षयता", "स्व सहित व्यवस्था", "समग्र व्यवस्था में भागीदारी"]
  },
  ghira: {
    title: "घिरा",
    description: "व्यापक सत्ता द्वारा घिरा होने के कारण हर इकाई नियंत्रित और मर्यादित है।",
    details: ["नियंत्रण", "नियम", "संतुलन", "स्थिति", "समग्र व्यवस्था के लिए वर्तमान"]
  },
  shram: {
    title: "श्रम",
    description: "विकास की ओर गति ही श्रम है।",
    details: ["लक्ष्य (विकास)", "समाधान", "अभ्युदय", "अखण्डता", "मध्यस्थ", "दैहिक भौतिक"]
  },
  gati: {
    title: "गति",
    description: "निश्चित दिशा में क्रियाशीलता।",
    details: ["(सफलता)", "आचरण पूर्णता", "दिव्य मानवीय", "विषयबद्ध"]
  },
  parinam: {
    title: "परिणाम",
    description: "क्रिया का प्रतिफल।",
    details: ["(अमरत्व)", "जीवन", "(चैतन्य इकाई)"]
  },
  gyanavastha: {
    title: "ज्ञानावस्था (मानव)",
    subtitle: "स्वभाव: धीरता वीरता उदारता, दया करुणा",
    description: "मानव में ज्ञान और विवेक की अवस्था।",
    details: ["धर्म: अस्तित्व, पुष्टि, जीने की आशा सहित सुख", "प्रमाण सम्पन्नता", "मानना (चैतन्य)"]
  },
  jeevavastha: {
    title: "जीवावस्था (जीव जंतु)",
    subtitle: "स्वभाव: क्रूर अक्रूर",
    description: "जीवों में जीने की आशा की अवस्था।",
    details: ["धर्म: अस्तित्व, पुष्टि, जीने की आशा", "क्रियाशीलता"]
  },
  pranavastha: {
    title: "प्राणावस्था (पेड़ पौधे)",
    subtitle: "स्वभाव: सारक मारक",
    description: "श्वसन और वृद्धि की अवस्था।",
    details: ["धर्म: अस्तित्व, पुष्टि", "पदार्थता + प्राण"]
  },
  padarthavastha: {
    title: "पदार्थावस्था",
    subtitle: "स्वभाव: संघटन विसंघटन",
    description: "पदार्थ और ऊर्जा की भौतिक अवस्था।",
    details: ["धर्म: अस्तित्व", "मृदा, पत्थर, मणि और वायु"]
  }
};

const Chart02 = () => {
  const [selectedItem, setSelectedItem] = useState<DictionaryItem | null>(null);

  const openModal = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    if (chartData[key]) setSelectedItem(chartData[key]);
  };

  const closeDrawer = () => setSelectedItem(null);

  return (
    <div className="relative min-h-screen overflow-hidden" onClick={closeDrawer}>
      {/* MAIN CONTENT WRAPPER */}
      <div className="chart-theme w-full min-h-screen p-4 md:p-10 font-(family-name:--font-primary) transition-all duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN: Astitva Darshan */}
          <div className="flex flex-col gap-4">
            <div 
              onClick={(e) => openModal(e, 'astitva_main')}
              className="bg-(--chart-purple-light)/40 border-2 border-(--chart-purple) p-6 rounded-lg text-center cursor-pointer hover:shadow-md transition-all"
            >
              <h2 className="text-(--chart-primary)! text-3xl font-black mb-2">अस्तित्व दर्शन</h2>
              <p className="text-xl text-(--chart-text)">व्यापक वस्तु कभी शून्य में सम्पूर्ण एक बड़ा वस्तु सम्पन्न (डूबा भीगा घिरा) है</p>
              <p className="text-xl font-bold mt-2 text-(--chart-primary)!">अस्तित्व = सह अस्तित्व = सत्ता में सम्पुर्ण प्रकृति</p>
            </div>

            <div className="bg-(--chart-blue-light)/40 border-2 border-(--chart-blue) p-3 text-center rounded shadow-sm font-bold text-lg text-(--chart-text)">
              व्यापक वस्तु में सम्पुर्ण क्रियाशील वस्तु (जड़ चैतन्य प्रकृति)
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['bhiga', 'duba', 'ghira'].map((key) => {
                const item = chartData[key];
                return (
                  <div 
                    key={key} 
                    onClick={(e) => openModal(e, key)}
                    className="bg-(--chart-blue-light)/20 border-2 border-(--chart-blue) rounded-md overflow-hidden cursor-pointer transition-all flex flex-col h-full shadow-sm"
                  >
                    <div className="bg-(--chart-bg) p-2 text-center border-b border-(--chart-blue) font-bold text-(--chart-primary)! text-xl">
                      {item.title}
                    </div>
                    <div className="p-4 text-center space-y-2 flex-grow flex flex-col justify-center">
                      {item.details?.map((line, i) => (
                        <p key={i} className="body-sm leading-tight text-(--chart-text)">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-(--chart-blue-light)/30 border-2 border-(--chart-blue) p-3 text-center rounded shadow-sm font-bold text-lg text-(--chart-text)">
              नाम क्रिया सफलता
            </div>

            <div className="flex border-2 border-(--chart-orange) rounded-lg overflow-hidden h-[350px]">
              <div className="w-1/3 p-6 flex items-center justify-center text-center bg-(--chart-orange-light)/40 border-r-2 border-(--chart-orange)">
                <p className="text-(--chart-primary)! font-bold text-xl leading-relaxed text-(--chart-text)">
                  स्वत्व <br /> <span className="text-sm font-normal opacity-70">स्व = होना</span> <br /> 
                  <span className="text-sm font-normal opacity-70">त्व = व्यवस्था सूत्र</span> <br /> 
                  सुव्यवस्था उपयोगिता क्रम में
                </p>
              </div>

              <div className="w-2/3 grid grid-cols-3">
                {['shram', 'gati', 'parinam'].map((key) => (
                  <div 
                    key={key} 
                    onClick={(e) => openModal(e, key)}
                    className="p-4 border-r last:border-r-0 border-(--chart-orange) bg-(--chart-orange-light)/20 cursor-pointer transition-colors flex flex-col"
                  >
                    <p className="font-bold text-center border-b border-(--chart-orange) mb-3 pb-1 text-(--chart-primary)! text-xl">
                      {chartData[key].title}
                    </p>
                    <div className="text-center space-y-2">
                      {chartData[key].details?.map((it, j) => (
                        <p key={j} className="text-sm leading-snug text-(--chart-text)">{it}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-(--chart-blue-light)/30 border-2 border-(--chart-blue) p-3 text-center rounded shadow-sm font-bold text-lg text-(--chart-text)">
              सह अस्तित्व की नित्य वर्तमानता
            </div>
          </div>

          {/* RIGHT COLUMN: Nature States */}
          <div className="flex flex-col gap-4 relative">
            <div className="border-2 border-(--chart-green) p-5 text-center rounded-lg bg-(--chart-green-light)/40 text-xl font-bold leading-tight text-(--chart-text)">
              सह अस्तित्व में प्रकृति में (क्रिया) सम्पन्नता का विकास <br />
              <span className="text-(--chart-primary)! font-black text-2xl uppercase tracking-wide">प्रकृति में चार अवस्थाओं में स्वभाव, धर्म</span>
            </div>

            <div className="flex flex-col gap-4">
              {['gyanavastha', 'jeevavastha', 'pranavastha', 'padarthavastha'].map((key) => (
                <div key={key} onClick={(e) => openModal(e, key)} className="grid grid-cols-12 gap-3 group cursor-pointer h-full min-h-[140px]">
                  <div className="col-span-3 border border-(--chart-blue) p-3 rounded bg-(--chart-blue-light)/20 flex flex-col justify-center text-center text-sm font-medium group-hover:bg-(--chart-blue-light)/40 transition-all">
                    <p className="text-(--chart-text)">ऊर्जा सम्पन्नता</p>
                    <p className="text-(--chart-text)">क्रियाशीलता</p>
                    <p className="text-(--chart-primary)! font-bold mt-1">प्रमाण सम्पन्नता</p>
                  </div>

                  <div className="col-span-6 border-2 border-(--chart-orange) p-4 rounded bg-(--chart-orange-light)/20 text-center shadow-sm group-hover:bg-(--chart-orange-light)/40 transition-all">
                    <h4 className="text-(--chart-primary)! font-black text-xl mb-1">{chartData[key].title}</h4>
                    <p className="text-sm opacity-80 italic text-(--chart-text)">{chartData[key].subtitle}</p>
                    <div className="mt-2 pt-2 border-t border-(--chart-orange) border-dashed">
                      <p className="text-(--chart-primary)! font-bold text-lg">धर्म: {chartData[key].details?.[0].split(': ')[1] || chartData[key].title}</p>
                    </div>
                  </div>

                  <div className="col-span-3 border border-(--chart-blue) p-3 rounded bg-(--chart-blue-light)/20 flex flex-col justify-center text-center text-sm font-medium group-hover:bg-(--chart-blue-light)/40 transition-all">
                    <p className="text-(--chart-text)">पदार्थता</p>
                    <p className="text-(--chart-text)">निर्वाह करना</p>
                    <p className="text-(--chart-primary)! font-bold mt-1">मानना</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ARROWS */}
            <div className="absolute -right-11.25 top-32 bottom-20 flex flex-col justify-around text-(--chart-primary)! text-5xl font-black opacity-30 pointer-events-none">
               <span>↑</span> <span>↑</span> <span>↑</span>
            </div>

            <div className="bg-(--chart-orange-light)/40 border-2 border-(--chart-orange) p-3 text-center rounded font-bold mt-auto shadow-sm text-(--chart-text)">
              प्रकृति में विकासक्रम विकास
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-(--border-color) pt-6 text-center">
          <p className="body-md italic opacity-50 max-w-4xl mx-auto leading-relaxed text-(--chart-text)">
            अस्तित्व मूलक मानव केंद्रित चिंतन — मध्यस्थ दर्शन सहअस्तित्ववाद — मानव व्यवहार दर्शन — ए नागराज [2003] pg 2-5 जीवन विद्या प्रकाशन, अमरकंटक
          </p>
        </footer>
      </div>

      {/* --- INTEGRATED DICTIONARY CARD UI --- */}
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
                  Key Points
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

export default Chart02;