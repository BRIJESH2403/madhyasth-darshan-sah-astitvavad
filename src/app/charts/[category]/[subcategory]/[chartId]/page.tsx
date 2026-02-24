import Breadcrumb from "@/app/component/Breadcrumb"
import ChartHeader from "@/components/charts/ChartViewer/ChartHeader"
import ChartTabs from "@/components/charts/ChartViewer/ChartTabs"
import ChartCanvas from "@/components/charts/ChartViewer/ChartCanvas"
import ChartFooter from "@/components/charts/ChartViewer/ChartFooter"

export default async function ChartDetailPage({
  params,
}: {
  params: Promise<{
    category: string
    subcategory: string
    chartId: string
  }>
}) {

  // ✅ IMPORTANT (Next 15 fix)
  const { category, subcategory, chartId } = await params

  // Safety fallback
  const safeChartId = chartId ?? "1"

  // 🔥 Extract number
  const cleaned = safeChartId.replace(/[^0-9]/g, "")
  const padded = cleaned.padStart(2, "0")

  const formattedSlug = `चार्ट ${padded}`

  return (
    <>
      <Breadcrumb
        items={[
          { label: "होम", href: "/" },
          { label: "प्रदर्शनी", href: `/charts/${category}` },
          { label: "अस्तित्व", href: `/charts/${category}/${subcategory}` },
          { label: formattedSlug },
        ]}
      />

      <ChartHeader title={formattedSlug} />

      <section className="bg-(--color-bg-2) min-h-screen flex justify-center items-center">
        <div className="w-full mx-60 mb-20 rounded-2xl bg-white shadow-lg flex flex-col overflow-hidden">

          <ChartTabs />

          <ChartCanvas chartId={safeChartId} />

          <ChartFooter />

        </div>
      </section>
    </>
  )
}