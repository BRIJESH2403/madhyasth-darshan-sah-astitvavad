"use client"
import { useState } from "react"

const tabs = ["पूर्ण चार्ट", "चार्ट व्याख्या", "चार्ट का विश्लेषण"]

export default function ChartTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex bg-(--color-bg-1)">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`w-120 h-15 py-4 text-sm font-semibold tracking-wide transition-all duration-200
            ${
              active === index
                ? "text-(--color-primary) border-b-2 border-(--color-primary)"
                : "text-(--color-text-muted) hover:text-(--color-text-title)"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}