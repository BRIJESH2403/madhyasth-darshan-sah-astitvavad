"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

type ChartHeaderProps = {
  title: string
}

export default function ChartHeader({ title }: ChartHeaderProps) {
  const router = useRouter()

  return (
    <div className="light-bg-2 flex items-center gap-4 px-60 ">
      
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="p-2 transition hover:bg-(--color-bg-1)"
      >
        <ArrowLeft className="w-5 h-5 text-(--color-text-body)" />
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold text-(--color-text-title)">
        {title}
      </h1>

    </div>
  )
}