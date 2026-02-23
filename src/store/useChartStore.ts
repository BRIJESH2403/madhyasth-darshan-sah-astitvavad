import { create } from "zustand";
import { chartsData } from "@/data/chartsData";

type Store = {
  completedCharts: Record<string, boolean>;

  markComplete: (id: string) => void;

  getCategoryProgress: (categoryId: string) => {
    completed: number;
    total: number;
  };
};

export const useChartStore = create<Store>(
  (set, get) => ({
    completedCharts: {},

    markComplete: (id: string) =>
      set((state: Store) => ({
        completedCharts: {
          ...state.completedCharts,
          [id]: true,
        },
      })),

    getCategoryProgress: (categoryId: string) => {
      const category = chartsData.find(
        (c) => c.id === categoryId
      );

      if (!category) return { completed: 0, total: 0 };

      let total = 0;
      let completed = 0;

      category.subcategories.forEach((sub) => {
        sub.charts.forEach((chart) => {
          total++;
          if (get().completedCharts[chart.id]) {
            completed++;
          }
        });
      });

      return { completed, total };
    },
  })
);