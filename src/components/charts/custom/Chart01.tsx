/* eslint-disable @next/next/no-img-element */
// // "use client";

// // import React from "react";

// // const Chart01 = () => {
// //   return (
// //     <div className="chart-theme w-full p-4 md:p-8 transition-colors duration-300 text-(--color-text-body)">
// //       <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        
// //         {/* LEFT COLUMN: Astitva Darshan */}
// //         <div className="flex flex-col gap-4">
// //           {/* TOP BOX */}
// //           <div className="border border-(--border-color)! p-6 rounded-sm text-center bg-(--color-bg-2)">
// //             <h2 className="text-(--chart-primary)! text-2xl font-bold mb-2">
// //               अस्तित्व दर्शन
// //             </h2>
// //             <p className="text-xl">
// //               व्यापक वस्तु कभी शून्य में सम्पूर्ण एक बड़ा वस्तु सम्पन्न (डूबा भीगा घिरा) है
// //             </p>
// //             <p className="text-xl font-semibold mt-1">
// //               अस्तित्व = सह अस्तित्व = सत्ता में सम्पुर्ण प्रकृति
// //             </p>
// //           </div>

// //           {/* STRIP */}
// //           <div className="bg-(--color-bg-2) border border-(--border-color) text-(--chart-primary)! p-2 text-center rounded-sm font-bold text-xl">
// //             व्यापक वस्तु में सम्पुर्ण क्रियाशील वस्तु (जड़ चैतन्य प्रकृति)
// //           </div>

// //           {/* 3 BOX (Bhiga, Duba, Ghira) */}
// //           <div className="grid grid-cols-3 gap-2">
// //             {[
// //               {
// //                 title: "भीगा",
// //                 bg: "bg-green-50/10", // Subtle tint for light mode, handled by opacity in dark
// //                 content: ["ऊर्जा सम्पन्न", "बल सम्पन्न", "चुम्बकीय बल", "सम्पन्नता"],
// //               },
// //               {
// //                 title: "डूबा",
// //                 bg: "bg-orange-50/10",
// //                 content: [
// //                   "क्रियाशीलता",
// //                   "(क्रिया की निरंतरता)",
// //                   "अक्षयता",
// //                   "स्व सहित व्यवस्था",
// //                   "समग्र व्यवस्था में भागीदारी",
// //                 ],
// //               },
// //               {
// //                 title: "घिरा",
// //                 bg: "bg-blue-50/10",
// //                 content: [
// //                   "नियंत्रण",
// //                   "नियम",
// //                   "संतुलन",
// //                   "स्थिति",
// //                   "समय व्यवस्था के लिए वर्तमान",
// //                 ],
// //               },
// //             ].map((item, i) => (
// //               <div key={i} className={`border border-(--border-color) ${item.bg}`}>
// //                 <div className="text-xl bg-(--color-bg-2) p-2 text-center border-b border-(--border-color) font-bold text-(--chart-primary)!">
// //                   {item.title}
// //                 </div>
// //                 <div className="p-4 text-xl md:text-md space-y-2 text-center leading-tight">
// //                   {item.content.map((c, j) => (
// //                     <p key={j}>{c}</p>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md">
// //             नाम क्रिया सफलता
// //           </div>

// //           {/* BOTTOM TABLE SECTION */}
// //           <div className="flex border border-(--border-color)!">
// //             {/* LEFT CELL */}
// //             <div className="w-1/3 p-4 border-r border-(--border-color)! flex items-center justify-center text-center bg-(--color-bg-2)">
// //               <p className="text-(--chart-primary)! font-bold text-md">
// //                 स्वत्व <br />
// //                 स्व = होना <br />
// //                 त्व = व्यवस्था सूत्र <br />
// //                 सुव्यवस्था उपयोगिता क्रम में
// //               </p>
// //             </div>

// //             {/* RIGHT CELLS */}
// //             <div className="w-2/3 grid grid-cols-3">
// //               {[
// //                 {
// //                   title: "श्रम",
// //                   items: ["लक्ष्य (विकास)", "समाधान", "अभ्युदय", "अखण्डता", "मध्वय", "दैहिक भौतिक"],
// //                 },
// //                 {
// //                   title: "गति",
// //                   items: ["(सफलता)", "आचरण पूर्णता", "दिव्य मानवीय", "विषयबद्ध"],
// //                 },
// //                 {
// //                   title: "परिणाम",
// //                   items: ["(अमरत्व)", "जीवन", "(चैतन्य इकाई)"],
// //                 },
// //               ].map((col, i) => (
// //                 <div key={i} className="p-2 border-r last:border-r-0 border-(--border-color) bg-(--color-bg-1)">
// //                   <p className="font-bold text-center border-b border-(--border-color) mb-2 text-(--chart-primary)! text-xl">
// //                     {col.title}
// //                   </p>
// //                   <div className="text-xs md:text-xl space-y-1 text-center">
// //                     {col.items.map((it, j) => (
// //                       <p key={j}>{it}</p>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md">
// //             सह अस्तित्व की नित्य वर्तमानता
// //           </div>
// //         </div>

// //         {/* RIGHT COLUMN: Nature States */}
// //         <div className="relative flex flex-col gap-3">
// //           <div className="border border-(--border-color) p-4 text-center rounded-sm bg-(--color-bg-2) text-xl font-bold">
// //             सह अस्तित्व में प्रकृति में (क्रिया) सम्पन्नता का विकास <br />
// //             प्रकृति में चार अवस्थाओं में स्वभाव, धर्म
// //           </div>

// //           {[
// //             {
// //               title: "ज्ञानावस्था (मानव)",
// //               sub: "स्वभाव: धीरता वीरता उदारता, दया करुणा",
// //               dharma: "अस्तित्व, पुष्टि, जीने की आशा सहित सुख",
// //               badge: "चैतन्य प्रकृति",
// //               borderColor: "border-green-500/40",
// //             },
// //             {
// //               title: "जीवावस्था (जीव जंतु)",
// //               sub: "स्वभाव: क्रूर अक्रूर",
// //               dharma: "अस्तित्व, पुष्टि, जीने की आशा",
// //               borderColor: "border-(--border-color)",
// //             },
// //             {
// //               title: "प्राणावस्था",
// //               sub: "(पेड़ पौधे, शरीर रचनाएँ) स्वभाव: सारक मारक",
// //               dharma: "अस्तित्व, पुष्टि, जीने की आशा",
// //               badge: "जड़ प्रकृति",
// //               borderColor: "border-orange-500/40",
// //             },
// //             {
// //               title: "पदार्थावस्था",
// //               sub: "(मृदा मिट्टी, पत्थर, मणि और वायु) स्वभाव: संघटन विसंघटन",
// //               dharma: "अस्तित्व",
// //               borderColor: "border-(--border-color)",
// //             },
// //           ].map((item, idx) => (
// //             <div key={idx} className="grid grid-cols-12 gap-2 relative group">
// //               {/* LEFT INFO */}
// //               <div className="col-span-3 border border-(--border-color) p-2 text-xs md:text-xl bg-(--color-bg-2) text-center flex flex-col justify-center">
// //                 <p>ऊर्जा सम्पन्नता</p>
// //                 <p>क्रियाशीलता</p>
// //                 <p className="text-(--chart-primary)! font-bold">प्रमाण सम्पन्नता</p>
// //               </div>

// //               {/* CENTER CONTENT */}
// //               <div className={`col-span-6 border ${item.borderColor} p-4 text-center bg-(--color-bg-1)`}>
// //                 <h4 className="text-(--chart-primary)! font-bold text-xl mb-1">
// //                   {item.title}
// //                 </h4>
// //                 <p className="text-xl opacity-80">{item.sub}</p>

// //                 <div className="mt-2 pt-2 border-t border-(--border-color) border-dashed">
// //                   <p className="text-(--chart-primary)! font-bold text-xl">धर्म</p>
// //                   <p className="text-xl">{item.dharma}</p>
// //                 </div>
// //               </div>

// //               {/* RIGHT INFO */}
// //               <div className="col-span-3 border border-(--border-color) p-2 text-xs md:text-xl bg-(--color-bg-2) text-center flex flex-col justify-center">
// //                 <p>पदार्थता</p>
// //                 <p>निर्वाह करना</p>
// //                 <p className="text-red-500 font-bold">मानना</p>
// //               </div>

// //               {/* SIDE BADGE (Chaitanya/Jad) */}
// //               {item.badge && (
// //                 <div className="absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full bg-(--color-primary) text-black text-xs font-bold px-2 py-4 rounded-full border-2 border-(--color-bg-1) z-10 [writing-mode:vertical-lr] rotate-180">
// //                   {item.badge}
// //                 </div>
// //               )}
// //             </div>
// //           ))}

// //           {/* VERTICAL ARROWS */}
// //           <div className="absolute right-0 top-16 bottom-16 flex flex-col justify-around">
// //             {[1, 2, 3].map((i) => (
// //               <span key={i} className="text-(--chart-primary)! translate-x-4 text-2xl font-bold">
// //                 ↑
// //               </span>
// //             ))}
// //           </div>

// //           <div className="bg-(--color-bg-2) border border-(--border-color) p-2 text-center text-md mt-auto">
// //             प्रकृति में विकासक्रम विकास
// //           </div>
// //         </div>
// //       </div>

// //       {/* FOOTER */}
// //       <div className="mt-12 border-t border-(--border-color) pt-4 text-center">
// //         <p className="text-xl italic opacity-60">
// //           अस्तित्व मूलक मानव केंद्रित चिंतन — मध्यस्थ दर्शन सहअस्तित्ववाद — मानव व्यवहार दर्शन — ए नागराज [2003] pg 2-5 जीवन विद्या प्रकाशन, अमरकंटक
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chart01;



// "use client";

// import React from "react";

// export default function Chart01() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#f8f8f8] p-5">
//       <div className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-5 pt-8 pb-5 w-full max-w-[960px]">
        
//         {/* Title */}
//         <div className="text-center mb-2">
//           <h1 className="text-[20px] font-bold text-[#a93b40] leading-[1.5]">
//             सह-अस्तित्व में चार अवस्थाओं में परस्पर-पूरक संबंध
//           </h1>
//           <p className="text-[13px] text-[#555] mt-1">
//             प्रत्येक अवस्था स्वयं में व्यवस्था है और साथ व्यवस्था में भागीदार है
//           </p>
//         </div>

//         {/* Annotations */}
//         <div className="flex justify-between px-10 mb-2">
//           <div className="text-[12px] text-[#333] max-w-[320px] text-center leading-[1.6]">
//             मानव की प्रकृति में भागीदारी न होने से समस्याग्रस्त है
//           </div>
//           <div className="text-[12px] text-[#333] max-w-[320px] text-center leading-[1.6]">
//             मानव की परिवार, समाज, और विश्व में भागीदारी
//             <br />
//             न होने से समस्याग्रस्त है
//           </div>
//         </div>

//         {/* SVG Diagram */}
//         <div className="relative w-full max-w-[900px] mx-auto">
//           <svg viewBox="0 0 900 520" className="w-full h-auto">

//             <defs>
//               <clipPath id="clip-padarthaavastha">
//                 <circle cx="115" cy="255" r="52" />
//               </clipPath>

//               <clipPath id="clip-jeevaavastha">
//                 <circle cx="270" cy="115" r="52" />
//               </clipPath>

//               <clipPath id="clip-pranaavastha">
//                 <circle cx="270" cy="395" r="52" />
//               </clipPath>

//               <clipPath id="clip-gyanavastha">
//                 <circle cx="430" cy="255" r="58" />
//               </clipPath>

//               <clipPath id="clip-samaj">
//                 <circle cx="640" cy="105" r="52" />
//               </clipPath>

//               <clipPath id="clip-parivar">
//                 <circle cx="640" cy="400" r="52" />
//               </clipPath>

//               <clipPath id="clip-vishwa">
//                 <circle cx="790" cy="255" r="52" />
//               </clipPath>
//             </defs>

//             {/* Example Node (You can paste rest of SVG same way) */}

//             {/* पदार्थावस्था */}
//             <circle
//               cx="115"
//               cy="255"
//               r="53"
//               fill="none"
//               stroke="#bbb"
//               strokeWidth="2.5"
//             />
//             <image
//               href="/images/padarthavastha.jpg"
//               x="63"
//               y="203"
//               width="104"
//               height="104"
//               clipPath="url(#clip-padarthaavastha)"
//               preserveAspectRatio="xMidYMid slice"
//             />
//             <text
//               x="115"
//               y="325"
//               textAnchor="middle"
//               fontSize="13"
//               fontWeight="600"
//               fill="#333"
//             >
//               पदार्थावस्था
//             </text>

//             {/* ज्ञानावस्था (Center Example) */}
//             <circle
//               cx="430"
//               cy="255"
//               r="59"
//               fill="none"
//               stroke="#bbb"
//               strokeWidth="2.5"
//             />
//             <image
//               href="/images/gyanavastha-manav.jpg"
//               x="372"
//               y="197"
//               width="116"
//               height="116"
//               clipPath="url(#clip-gyanavastha)"
//               preserveAspectRatio="xMidYMid slice"
//             />
//             <text
//               x="430"
//               y="332"
//               textAnchor="middle"
//               fontSize="13"
//               fontWeight="600"
//               fill="#333"
//             >
//               ज्ञानावस्था
//             </text>
//             <text
//               x="430"
//               y="348"
//               textAnchor="middle"
//               fontSize="13"
//               fontWeight="600"
//               fill="#333"
//             >
//               मानव
//             </text>

//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import React, { useState } from "react"

/* TYPES */

interface NodeType {
  id: string
  label: string
  image: string
  x: number
  y: number
}

interface LineProps {
  x1: number
  y1: number
  x2: number
  y2: number
}

/* DATA */

const leftNodes: NodeType[] = [
  { id: "jeevaavastha", label: "जीवावस्था", image: "/Charts/1.png", x: 230, y: 95 },
  { id: "padarthavastha", label: "पदार्थावस्था", image: "/Charts/2.png", x: 80, y: 255 },
  { id: "pranaavastha", label: "प्राणावस्था", image: "/Charts/3.png", x: 230, y: 415 },
]

const centerNode: NodeType = {
  id: "gyanavastha",
  label: "ज्ञानावस्था\nमानव",
  image: "/Charts/4.png",
  x: 410,
  y: 255,
}

const rightNodes: NodeType[] = [
  { id: "samaj", label: "समाज", image: "/Charts/5.png", x: 590, y: 95 },
  { id: "vishwa", label: "विश्व सर्वमानव", image: "/Charts/6.png", x: 740, y: 255 },
  { id: "parivar", label: "परिवार", image: "/Charts/7.png", x: 590, y: 415 },
]

const CIRCLE_R = 52
const SVG_W = 870
const SVG_H = 530

/* SUB COMPONENTS */

function DiagramNode({
  node,
  labelPosition = "right",
  onClick,
}: {
  node: NodeType
  labelPosition?: "left" | "right" | "top" | "bottom"
  onClick?: (node: NodeType) => void
}) {
  const labelLines = node.label.split("\n")

  let textX = node.x
  let textY = node.y
  let textAnchor: "start" | "middle" | "end" = "middle"

  if (labelPosition === "left") {
    textX = node.x - CIRCLE_R - 8
    textY = node.y + 5
    textAnchor = "end"
  }

  if (labelPosition === "right") {
    textX = node.x + CIRCLE_R + 8
    textY = node.y + 5
    textAnchor = "start"
  }

  if (labelPosition === "bottom") {
    textX = node.x
    textY = node.y + CIRCLE_R + 20
  }

  if (labelPosition === "top") {
    textX = node.x
    textY = node.y - CIRCLE_R - 12
  }

  return (
    <g>
      <defs>
        <clipPath id={`clip-${node.id}`}>
          <circle cx={node.x} cy={node.y} r={CIRCLE_R} />
        </clipPath>
      </defs>

      <circle
        cx={node.x}
        cy={node.y}
        r={CIRCLE_R + 3}
        fill="none"
        stroke="var(--chart-yellow)"
        strokeWidth="2.5"
      />

      <image
        href={node.image}
        x={node.x - CIRCLE_R}
        y={node.y - CIRCLE_R}
        width={CIRCLE_R * 2}
        height={CIRCLE_R * 2}
        clipPath={`url(#clip-${node.id})`}
        preserveAspectRatio="xMidYMid slice"
        style={{ cursor: "pointer" }}
        onClick={() => onClick?.(node)}
      />

      {labelLines.map((line, i) => (
        <text
          key={i}
          x={textX}
          y={textY + i * 18}
          textAnchor={textAnchor}
          fill="var(--chart-text)"
          fontSize="16"
          fontWeight="600"
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function DashedLine({ x1, y1, x2, y2 }: LineProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--chart-yellow)"
      strokeWidth="2"
      strokeDasharray="8 4"
      opacity="0.85"
    />
  )
}

function BiArrowLine({ x1, y1, x2, y2 }: LineProps) {
  const angle = Math.atan2(y2 - y1, x2 - x1)

  const endX = x2 - (CIRCLE_R + 5) * Math.cos(angle)
  const endY = y2 - (CIRCLE_R + 5) * Math.sin(angle)

  const startX = x1 + (CIRCLE_R + 5) * Math.cos(angle)
  const startY = y1 + (CIRCLE_R + 5) * Math.sin(angle)

  return (
    <line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke="var(--chart-yellow)"
      strokeWidth="2"
      strokeDasharray="8 4"
      opacity="0.85"
    />
  )
}

/* MAIN COMPONENT */

export default function Chart01() {
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null)
  const sah = { x: 270, y: 255 }

  return (
    <div className="chart-theme w-full flex flex-col items-center py-10">

      {/* TOP TITLE (UNCHANGED) */}
      <div className="text-center max-w-175 mb-6 bg-[#F5F5FF4D] px-6 py-4 rounded-lg border border-[#E0E0FF]">
        <h3 style={{ color: "var(--chart-primary)" }}>
          सह-अस्तित्व में चार अवस्थाओं में परस्पर-पूरक संबंध
        </h3>
        <p className="body-sm opacity-80">
          प्रत्येक अवस्था स्वयं में व्यवस्था है और समग्र व्यवस्था में भागीदार है
        </p>
      </div>

      {/* TWO SIDE CARDS (UNCHANGED) */}
      <div className="flex gap-6 justify-center mb-6">
        <div className="text-center max-w-175 bg-[#F5F5FF4D] px-6 py-4 rounded-lg border border-[#E0E0FF]">
          <h5 style={{ color: "var(--chart-text)" }}>
            सह-अस्तित्व में चार अवस्थाओं में परस्पर-पूरक संबंध
          </h5>
        </div>

        <div className="text-center max-w-175 bg-[#F5F5FF4D] px-6 py-4 rounded-lg border border-[#E0E0FF]">
          <h5 style={{ color: "var(--chart-text)" }}>
            सह-अस्तित्व में चार अवस्थाओं में परस्पर-पूरक संबंध
          </h5>
        </div>
      </div>

      {/* SVG (UNCHANGED) */}
      <div className="w-full overflow-x-auto flex justify-center px-4">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full max-w-242.5 min-w-175">

          {/* LEFT CONNECTIONS */}
          <DashedLine x1={leftNodes[1].x} y1={leftNodes[1].y} x2={leftNodes[0].x} y2={leftNodes[0].y} />
          <DashedLine x1={leftNodes[0].x} y1={leftNodes[0].y} x2={centerNode.x} y2={centerNode.y} />
          <DashedLine x1={centerNode.x} y1={centerNode.y} x2={leftNodes[2].x} y2={leftNodes[2].y} />
          <DashedLine x1={leftNodes[2].x} y1={leftNodes[2].y} x2={leftNodes[1].x} y2={leftNodes[1].y} />

          {/* RIGHT CONNECTIONS */}
          {rightNodes.map((n) => (
            <BiArrowLine key={n.id} x1={centerNode.x} y1={centerNode.y} x2={n.x} y2={n.y} />
          ))}

          {/* CENTER LABEL */}
          <rect
            x={sah.x - 55}
            y={sah.y - 16}
            width={110}
            height={32}
            rx={6}
            fill="var(--chart-bg)"
            stroke="var(--chart-yellow)"
            strokeWidth="2"
          />
          <text
            x={sah.x}
            y={sah.y + 6}
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#5C4FDB"
          >
            सह-अस्तित्व
          </text>

          {/* NODES */}
          {leftNodes.map((n) => (
            <DiagramNode key={n.id} node={n} onClick={setSelectedNode} />
          ))}

          <DiagramNode node={centerNode} labelPosition="bottom" onClick={setSelectedNode} />

          {rightNodes.map((n) => (
            <DiagramNode key={n.id} node={n} onClick={setSelectedNode} />
          ))}

        </svg>
      </div>

      {/* MODAL (NO DARK BG) */}
      {selectedNode && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setSelectedNode(null)}
        >
          <div
            className="bg-white w-105 rounded-2xl shadow-2xl p-6 relative border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            <h3 className="text-lg font-bold mb-4 text-center">
              {selectedNode.label}
            </h3>

            <img
              src={selectedNode.image}
              alt={selectedNode.label}
              className="rounded-xl w-full"
            />

            <p className="text-sm text-gray-600 mt-4 text-center">
              यह चयनित अवस्था का विस्तृत विवरण है।
            </p>
          </div>
        </div>
      )}
    </div>
  )
}