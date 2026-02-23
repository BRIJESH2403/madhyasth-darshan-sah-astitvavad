"use client";

import React from "react";
import ExhibitionCard from "@/components/charts/cards/CatagoryCard";
import { chartsData } from "@/data/chartsData";
import { useChartStore } from "@/store/useChartStore";

const ExhibitionSection = () => {
  const { getCategoryProgress } = useChartStore();

  return (
    <section className="light-bg-2 dark-bg-2">
      <div className="max-w-480 min-h-223 mx-auto pt-20 pb-20 px-4 sm:px-8 md:px-16 lg:px-60">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {chartsData.map((category) => {
            const progress = getCategoryProgress(category.id);

            return (
              <ExhibitionCard
                key={category.id}
                title={category.title}
                description={category.description}
                progressText={`${progress.completed}/${progress.total} उप-वर्ग`}
                image={category.image}
                href={`/charts/${category.slug.toLowerCase()}`}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;