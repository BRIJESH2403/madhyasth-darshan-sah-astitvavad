"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CourseCard from "@/components/charts/cards/SubcategoryCard";
import { chartsData } from "@/data/chartsData";
import { useChartStore } from "@/store/useChartStore";

interface Props {
  categorySlug: string;
}

const CategorySection = ({ categorySlug }: Props) => {
  const router = useRouter();
  const { getCategoryProgress } = useChartStore();

  const category = chartsData.find(
    (c) => c.slug.toLowerCase().trim() === categorySlug?.toLowerCase().trim()
  );

  if (!category) {
    return (
      <p className="text-center mt-10 text-red-500">
        ❌ Category not found: {categorySlug}
      </p>
    );
  }

  const progress = getCategoryProgress(category.id);

  return (
    <section className="light-bg-2 dark-bg-2 min-h-screen">
      <div className="max-w-480 mx-auto pt-10 pb-20 px-4 sm:px-8 md:px-16 lg:px-60">

        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => router.push("/charts")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10"
          >
            ←
          </button>

          <div>
            <h3>{category.title}</h3>
            <p className="body-sm">{category.description}</p>
          </div>

          <div className="ml-auto body-sm">
            {progress.completed}/{progress.total} चार्ट
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {category.subcategories.map((sub) => {
            const total = sub.charts.length;

            return (
              <CourseCard
  key={sub.id}
  title={sub.title}
  description={sub.description}
  progressText={`0/${total} चार्ट`}
  image={sub.image}
  href={`/charts/${category.slug}/${sub.slug}`}
/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;