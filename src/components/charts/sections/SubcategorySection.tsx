"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ExistenceCard from "@/components/charts/cards/ChartCard";
import { chartsData } from "@/data/chartsData";
import { useChartStore } from "@/store/useChartStore";

interface Props {
  categorySlug: string;
  subcategorySlug: string;
}

const SubcategorySection = ({ categorySlug, subcategorySlug }: Props) => {
  const router = useRouter();
  const { completedCharts } = useChartStore();

  const category = chartsData.find(
    (c) => c.slug.toLowerCase().trim() === categorySlug?.toLowerCase().trim()
  );

  if (!category) {
    return <p className="text-center mt-10">❌ Category not found</p>;
  }

  const subcategory = category.subcategories.find(
    (s) =>
      s.slug.toLowerCase().trim() === subcategorySlug?.toLowerCase().trim()
  );

  if (!subcategory) {
    return <p className="text-center mt-10">❌ Subcategory not found</p>;
  }

  const total = subcategory.charts.length;

  const completed = subcategory.charts.filter(
    (chart) => completedCharts[chart.id]
  ).length;

  return (
    <section className="light-bg-2 dark-bg-2 min-h-screen">
      <div className="max-w-480 mx-auto pt-10 pb-20 px-4 sm:px-8 md:px-16 lg:px-60">

        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10"
          >
            ←
          </button>

          <div>
            <h3>{subcategory.title}</h3>
            <p className="body-sm">{subcategory.description}</p>
          </div>

          <div className="ml-auto body-sm">
            {completed}/{total} चार्ट
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {subcategory.charts.map((chart) => (
  <ExistenceCard
    key={chart.id}
    id={chart.id}
    image={chart.image}
    categorySlug={category.slug}
    subcategorySlug={subcategory.slug}
  />
))}
        </div>
      </div>
    </section>
  );
};

export default SubcategorySection;