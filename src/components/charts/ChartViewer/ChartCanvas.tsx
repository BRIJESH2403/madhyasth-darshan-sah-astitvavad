"use client"

import { JSX, useState } from "react"
import ZoomControls from "./ZoomControls"
import Chart01 from "@/components/charts/custom/Chart01"
import Chart02 from "@/components/charts/custom/Chart02"

type Props = {
  chartId: string
}

export default function ChartCanvas({ chartId }: Props) {
  const [scale, setScale] = useState(1)

  const zoomIn = () => setScale((prev) => prev + 0.1)
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5))

  // 🔥 UNIVERSAL NORMALIZATION
  const cleaned = chartId.replace(/[^0-9]/g, "") 
  const padded = cleaned.padStart(2, "0")        
  const normalizedId = `chart${padded}`          

  const charts: Record<string, JSX.Element> = {
    chart01: <Chart01 />,
    chart02: <Chart02 />,
  }

  const ActiveChart =
    charts[normalizedId] || (
      <div className="flex items-center justify-center h-full text-lg font-semibold text-red-500">
        ❌ Chart not found ({normalizedId})
      </div>
    )

  return (
    <div className="w-full h-150 light-bg-1 flex flex-col relative overflow-hidden">
      <div
        style={{ transform: `scale(${scale})` }}
        className="transition-transform duration-300 flex-1 flex items-center justify-center"
      >
        {ActiveChart}
      </div>

      <ZoomControls zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  )
}