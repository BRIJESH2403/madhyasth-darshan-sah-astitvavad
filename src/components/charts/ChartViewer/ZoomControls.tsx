"use client"

import { Plus, Minus } from "lucide-react"

type ZoomControlsProps = {
  zoomIn: () => void
  zoomOut: () => void
}

export default function ZoomControls({
  zoomIn,
  zoomOut,
}: ZoomControlsProps) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
      
      {/* Zoom In */}
      <button
        onClick={zoomIn}
        className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        <Plus size={18} className="text-gray-700 dark:text-gray-200" />
      </button>

      {/* Zoom Out */}
      <button
        onClick={zoomOut}
        className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        <Minus size={18} className="text-gray-700 dark:text-gray-200" />
      </button>

    </div>
  )
}