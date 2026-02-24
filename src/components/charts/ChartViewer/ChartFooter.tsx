export default function ChartFooter() {
  return (
    <div className="bg-(--color-bg-1) flex justify-end items-center gap-4 p-6 ">

      {/* Simple Text Button */}
      <button className="text-sm font-semibold tracking-widest text-(--color-text-body) hover:text-(--color-text-title) transition-colors">
        चार्ट से सम्बंधित लेख
      </button>

      {/* Filled Button */}
      <button className="bg-(--color-primary) text-white text-sm font-semibold tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition">
        चार्ट पूर्ण करें
      </button>

    </div>
  )
}