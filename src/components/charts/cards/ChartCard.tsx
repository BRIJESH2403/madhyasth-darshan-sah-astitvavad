"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { useChartStore } from "@/store/useChartStore";

interface ChartCardProps {
  id: string;
  image: string;
  categorySlug: string;
  subcategorySlug: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  id,
  image,
  categorySlug,
  subcategorySlug,
}) => {
  const router = useRouter();
  const { completedCharts } = useChartStore();

  const completed = completedCharts[id];

  return (
    <div
      onClick={() =>
        router.push(
          `/charts/${categorySlug}/${subcategorySlug}/${id}`
        )
      }
      className="
        group
        relative
        w-full sm:w-70 md:w-[320px] lg:w-84
        h-72 sm:h-70 md:h-80 lg:h-84
        mx-auto
        overflow-hidden
        rounded-2xl
        border border-0.5
        border-(--border-color)
        cursor-pointer
        transition-all duration-300
        hover:border-(--color-primary)
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* COMPLETED OVERLAY */}
      {completed && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <div
            className="
              w-8 h-8
              sm:w-10 sm:h-10
              md:w-12 md:h-12
              rounded-full
              bg-(--color-primary)
              text-white
              text-lg sm:text-xl md:text-2xl
              flex items-center justify-center
            "
          >
            ✔
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartCard;