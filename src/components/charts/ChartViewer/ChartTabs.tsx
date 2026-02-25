"use client"
import { useState } from "react"

const tabs = ["पूर्ण चार्ट", "चार्ट व्याख्या", "चार्ट का विश्लेषण"]

export default function ChartTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full bg-(--color-bg-1)">
      <div className="flex flex-wrap sm:flex-nowrap w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              flex-1 min-w-30 py-3 sm:py-4
              text-xs sm:text-sm font-semibold tracking-wide
              transition-all duration-200
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
    </div>
  )
}