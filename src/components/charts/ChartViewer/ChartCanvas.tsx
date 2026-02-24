"use client"

import { JSX, useState, useRef } from "react"
import ZoomControls from "./ZoomControls"
import Chart01 from "@/components/charts/custom/Chart01"
import Chart02 from "@/components/charts/custom/Chart02"

type Props = {
  chartId: string
}

export default function ChartCanvas({ chartId }: Props) {
  const [scale, setScale] = useState(0.5)
  const [positionState, setPositionState] = useState({ x: 0, y: 0 })

  const positionRef = useRef({ x: 0, y: 0 })
  const dragging = useRef(false)
  const start = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  const zoomIn = () => setScale((prev) => prev + 0.1)
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5))

  // Normalize ID
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

  // 🔥 RAF Optimized Update
  const updatePosition = (x: number, y: number) => {
    if (frame.current) cancelAnimationFrame(frame.current)

    frame.current = requestAnimationFrame(() => {
      positionRef.current = { x, y }
      setPositionState({ x, y }) // safe render value
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    start.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return

    updatePosition(
      e.clientX - start.current.x,
      e.clientY - start.current.y
    )
  }

  const handleMouseUp = () => {
    dragging.current = false
  }

  return (
    <div className="w-full h-150 light-bg-1 relative overflow-hidden">
      <div
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            transform: `translate3d(${positionState.x}px, ${positionState.y}px, 0) scale(${scale})`,
            willChange: "transform",
          }}
          className="flex items-center justify-center w-full h-full"
        >
          {ActiveChart}
        </div>
      </div>

      <ZoomControls zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  )
}