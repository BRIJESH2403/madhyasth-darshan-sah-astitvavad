import HeroSection from "@/components/charts/sections/HeroSection";
import CategorySection from "@/components/charts/sections/CategorySection";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categorySlug = decodeURIComponent(category);

  console.log("PAGE PARAM:", categorySlug);

  return (
    <main>
      <HeroSection
        bgImage="/ChartImg/ChartHomeimg/bg.png"
      />

      <CategorySection categorySlug={categorySlug} />
    </main>
  );
}