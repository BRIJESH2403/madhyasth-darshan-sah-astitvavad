import HeroSection from "@/components/charts/sections/HeroSection";
import SubcategorySection from "@/components/charts/sections/SubcategorySection";

interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;

  const categorySlug = decodeURIComponent(category);
  const subcategorySlug = decodeURIComponent(subcategory);

  console.log("CATEGORY:", categorySlug);
  console.log("SUBCATEGORY:", subcategorySlug);

  return (
    <main>
      <HeroSection
        bgImage="/ChartImg/ChartHomeimg/bg.png"
      />

      <SubcategorySection
        categorySlug={categorySlug}
        subcategorySlug={subcategorySlug}
      />
    </main>
  );
}