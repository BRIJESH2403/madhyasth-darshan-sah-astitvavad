/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"

/* TYPES */
interface DictionaryItem {
  title: string;
  description: string;
  details?: string[];
}

interface NodeType {
  id: string
  label: string
  image: string
  x: number
  y: number
}

/* DICTIONARY DATA */
const headerDictionary: Record<string, DictionaryItem> = {
  prakriti: {
    title: "प्रकृति में भागीदारी",
    description: "मानव का शेष प्रकृति (पदार्थ, प्राण, जीव) के साथ पूरकता का संबंध।",
    details: ["पारिस्थितिक संतुलन", "संसाधनों का सदुपयोग", "प्रदूषण मुक्त कार्यप्रणाली", "नियम का पालन"]
  },
  samaj: {
    title: "समाज व विश्व में भागीदारी",
    description: "मानव का मानव के साथ संबंधों में मूल्यों का निर्वाह।",
    details: ["परिवार में न्याय", "समाज में अभय (निडरता)", "विश्व परिवार की भावना", "अखण्ड समाज"]
  }
};

/* CONSTANTS */
const CIRCLE_R = 55
const SVG_W = 1000
const SVG_H = 650 

const nodes: Record<string, NodeType> = {
  padarthavastha: { id: "padarthavastha", label: "पदार्थावस्था", image: "/Charts/7.png", x: 120, y: 325 },
  jeevaavastha: { id: "jeevaavastha", label: "जीवावस्था", image: "/Charts/8.png", x: 315, y: 130 },
  pranaavastha: { id: "pranaavastha", label: "प्राणावस्था", image: "/Charts/6.png", x: 315, y: 520 },
  gyanavastha: { id: "gyanavastha", label: "ज्ञानावस्था\nमानव", image: "/Charts/5.png", x: 500, y: 325 },
  samaj: { id: "samaj", label: "समाज", image: "/Charts/4.png", x: 685, y: 130 },
  parivar: { id: "parivar", label: "परिवार", image: "/Charts/3.png", x: 685, y: 520 },
  vishwa: { id: "vishwa", label: "विश्व सर्वमानव", image: "/Charts/2.png", x: 880, y: 325 },
}

/* SUB-COMPONENTS */
function DiagramNode({ node, onClick }: { node: NodeType; onClick: (n: NodeType) => void }) {
  const lines = node.label.split("\n")
  return (
    <g onClick={(e) => { e.stopPropagation(); onClick(node); }} className="cursor-pointer group">
      <defs>
        <clipPath id={`clip-${node.id}`}>
          <circle cx={node.x} cy={node.y} r={CIRCLE_R} />
        </clipPath>
      </defs>
      <circle 
        cx={node.x} cy={node.y} r={CIRCLE_R + 3} 
        fill="var(--chart-bg)" 
        stroke="var(--color-primary)" 
        strokeWidth="2" 
        className="drop-shadow-sm group-hover:stroke-[4px] transition-all"
      />
      <image
        href={node.image}
        x={node.x - CIRCLE_R}
        y={node.y - CIRCLE_R}
        width={CIRCLE_R * 2}
        height={CIRCLE_R * 2}
        clipPath={`url(#clip-${node.id})`}
        preserveAspectRatio="xMidYMid slice"
      />
      <g transform={`translate(${node.x - 60}, ${node.y + CIRCLE_R + 12})`}>
        <rect 
            x="0" y="0" width="120" height={lines.length * 22 + 10} rx="8" 
            fill="var(--chart-purple-light)" 
            stroke="var(--chart-blue)" 
            strokeWidth="1" 
        />
        {lines.map((line, i) => (
          <text 
            key={i} x="60" y={22 + i * 20} 
            textAnchor="middle" fontSize="14" fontWeight="600" 
          >
            {line}
          </text>
        ))}
      </g>
    </g>
  )
}

function Arrow({ x1, y1, x2, y2, dashed = false, biDir = false, startPadding = 65, endPadding = 75 }: any) {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const startX = x1 + startPadding * Math.cos(angle)
  const startY = y1 + startPadding * Math.sin(angle)
  const endX = x2 - endPadding * Math.cos(angle)
  const endY = y2 - endPadding * Math.sin(angle)

  return (
    <line
      x1={startX} y1={startY} x2={endX} y2={endY}
      stroke="var(--color-primary)" 
      strokeWidth="2.5"
      strokeDasharray={dashed ? "6,4" : "0"}
      markerEnd="url(#arrow)"
      markerStart={biDir ? "url(#arrow)" : ""}
    />
  )
}

export default function IntegratedChart() {
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null)
  const [activeDict, setActiveDict] = useState<DictionaryItem | null>(null) 
  
  const leftHub = { x: 315, y: 325 } 
  const rightHub = { x: 685, y: 325 } 

  // Global click handler to close cards when clicking outside
  const handleGlobalClick = () => {
    setSelectedNode(null);
    setActiveDict(null);
  };

  return (
    <div className="chart-theme flex flex-col items-center py-10 min-h-screen relative" onClick={handleGlobalClick}>
      
      {/* HEADER SECTION */}
      <div className="text-center mb-10 space-y-4 px-4">
        <div 
          className="p-5 rounded-xl border max-w-2xl mx-auto shadow-sm"
          style={{ backgroundColor: "var(--color-bg-2)", borderColor: "var(--border-color)" }}
        >
          <h3 className="font-bold mb-1" style={{ color: "var(--chart-primary)" }}>
            सह-अस्तित्व में चार अवस्थाओं में परस्पर-पूरक संबंध
          </h3>
          <p style={{ color: "var(--color-text-body)" }}>
            प्रत्येक अवस्था स्वयं में व्यवस्था है और समग्र व्यवस्था में भागीदार है
          </p>
        </div>
      </div>
        
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div 
          onClick={(e) => { e.stopPropagation(); setActiveDict(headerDictionary.prakriti); }} 
          className="p-3 rounded-lg max-w-xs text-sm font-medium border text-center cursor-pointer hover:shadow-md transition-all active:scale-95"
          style={{ backgroundColor: "var(--color-bg-2)", borderColor: "var(--chart-orange)", color: "var(--color-text-title)" }}>
          मानव की प्रकृति में भागीदारी न होने से समस्याग्रस्त है
        </div>
        <div 
          onClick={(e) => { e.stopPropagation(); setActiveDict(headerDictionary.samaj); }} 
          className="p-3 rounded-lg max-w-xs text-sm font-medium border text-center cursor-pointer hover:shadow-md transition-all active:scale-95"
          style={{ backgroundColor: "var(--color-bg-2)", borderColor: "var(--chart-orange)", color: "var(--color-text-title)" }}>
          मानव की परिवार, समाज, और विश्व में भागीदारी न होने से समस्याग्रस्त है
        </div>
      </div>

      {/* SVG DIAGRAM */}
      <div className="w-full overflow-x-auto flex justify-center px-4">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full max-w-5xl h-auto min-w-[900px]">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="var(--color-primary)" />
            </marker>
          </defs>

          <Arrow x1={nodes.padarthavastha.x} y1={nodes.padarthavastha.y} x2={nodes.jeevaavastha.x} y2={nodes.jeevaavastha.y} />
          <Arrow x1={nodes.padarthavastha.x} y1={nodes.padarthavastha.y} x2={nodes.pranaavastha.x} y2={nodes.pranaavastha.y} />
          <Arrow x1={nodes.jeevaavastha.x} y1={nodes.jeevaavastha.y} x2={nodes.gyanavastha.x} y2={nodes.gyanavastha.y} />
          <Arrow x1={nodes.pranaavastha.x} y1={nodes.pranaavastha.y} x2={nodes.gyanavastha.x} y2={nodes.gyanavastha.y} />

          <Arrow x1={leftHub.x} y1={leftHub.y} x2={nodes.padarthavastha.x} y2={nodes.padarthavastha.y} dashed biDir startPadding={75} />
          <Arrow x1={leftHub.x} y1={leftHub.y} x2={nodes.jeevaavastha.x} y2={nodes.jeevaavastha.y} dashed biDir startPadding={40} />
          <Arrow x1={leftHub.x} y1={leftHub.y} x2={nodes.pranaavastha.x} y2={nodes.pranaavastha.y} dashed biDir startPadding={40} />
          <Arrow x1={leftHub.x} y1={leftHub.y} x2={nodes.gyanavastha.x} y2={nodes.gyanavastha.y} dashed biDir startPadding={75} />

          <Arrow x1={nodes.gyanavastha.x} y1={nodes.gyanavastha.y} x2={nodes.samaj.x} y2={nodes.samaj.y} dashed />
          <Arrow x1={nodes.gyanavastha.x} y1={nodes.gyanavastha.y} x2={nodes.parivar.x} y2={nodes.parivar.y} dashed />
          <Arrow x1={nodes.samaj.x} y1={nodes.samaj.y} x2={nodes.vishwa.x} y2={nodes.vishwa.y} dashed />
          <Arrow x1={nodes.parivar.x} y1={nodes.parivar.y} x2={nodes.vishwa.x} y2={nodes.vishwa.y} dashed />

          <Arrow x1={rightHub.x} y1={rightHub.y} x2={nodes.gyanavastha.x} y2={nodes.gyanavastha.y} dashed biDir startPadding={90} />
          <Arrow x1={rightHub.x} y1={rightHub.y} x2={nodes.samaj.x} y2={nodes.samaj.y} dashed biDir startPadding={60} />
          <Arrow x1={rightHub.x} y1={rightHub.y} x2={nodes.parivar.x} y2={nodes.parivar.y} dashed biDir startPadding={60} />
          <Arrow x1={rightHub.x} y1={rightHub.y} x2={nodes.vishwa.x} y2={nodes.vishwa.y} dashed biDir startPadding={90} />

          <g>
            <rect 
              x={leftHub.x - 70} y={leftHub.y - 30} width="140" height="60" rx="6" 
              fill="var(--chart-bg)" stroke="var(--chart-blue)" strokeWidth="1.5" 
            />
            <text x={leftHub.x} y={leftHub.y + 7} textAnchor="middle" fontSize="18" fontWeight="bold" fill="var(--chart-primary)">सह-अस्तित्व</text>
          </g>

          <g>
            <rect 
              x={rightHub.x - 85} y={rightHub.y - 55} width="170" height="110" rx="10" 
              fill="var(--chart-bg)" stroke="var(--border-color)" strokeWidth="2"
              className="drop-shadow-md"
            />
            <image 
              href="/Charts/1.png" 
              x={rightHub.x - 80} y={rightHub.y - 50} 
              width="160" height="100" 
              className="rounded-lg"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>

          {Object.values(nodes).map((n) => (
            <DiagramNode key={n.id} node={n} onClick={setSelectedNode} />
          ))}
        </svg>
      </div>

      {/* IMAGE NODE MODAL (Centered - No Blur - Click Outside Close) */}
      {selectedNode && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
          <div 
            className="bg-(--color-bg-1) p-8 rounded-4xl shadow-2xl max-w-md w-full relative border border-(--border-color) pointer-events-auto animate-in zoom-in duration-200" 
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-6 right-6 text-2xl opacity-40 hover:opacity-100" onClick={() => setSelectedNode(null)}>✕</button>
            <h3 className="text-3xl font-bold mb-6 text-center text-(--color-text-title)">
              {selectedNode.label.replace('\n', ' ')}
            </h3>
            <img src={selectedNode.image} alt={selectedNode.label} className="w-full h-72 object-cover rounded-2xl mb-6 border-4 border-(--color-primary) shadow-lg" />
            <p className="text-center body-md text-(--color-text-body)">
              यह {selectedNode.label.split('\n')[0]} का विस्तृत विवरण है। यह व्यवस्था में अपनी भागीदारी सुनिश्चित करता है।
            </p>
          </div>
        </div>
      )}

      {/* DICTIONARY CARD (Bottom Right - No Blur - Click Outside Close) */}
      {activeDict && (
        <div className="fixed bottom-6 right-6 z-50 p-4 w-full max-w-md pointer-events-none">
          <div 
            className="bg-(--color-bg-1) rounded-3xl shadow-2xl border-t-8 border-(--chart-primary) overflow-hidden p-8 animate-in slide-in-from-right-10 duration-300 pointer-events-auto border border-(--border-color)" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-(--chart-primary)!">{activeDict.title}</h3>
              <button onClick={() => setActiveDict(null)} className="text-2xl opacity-40 hover:opacity-100">✕</button>
            </div>
            <p className="text-xl leading-relaxed text-(--color-text-title) mb-6">{activeDict.description}</p>
            {activeDict.details && (
              <div className="bg-(--color-bg-2) p-6 rounded-2xl border border-(--border-color)">
                <h5 className="text-sm uppercase tracking-widest font-bold opacity-40 mb-4">Key Points</h5>
                <ul className="space-y-3">
                  {activeDict.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg">
                      <span className="mt-2 w-2 h-2 rounded-full bg-(--chart-primary) shrink-0" />
                      <span className="text-(--color-text-body)">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}