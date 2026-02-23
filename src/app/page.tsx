import HeroSection from "@/components/home/HeroSection";
import DarshanAboutSection from "@/components/home/DarshanAboutSection";
import PrernaAurAnusandhanSection from "@/components/home/PrernaAurAnusandhanSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import WorkshopsSection from "@/components/home/WorkshopsSection";
import TenLevelSocialOrderSection from "@/components/home/TenLevelSocialOrderSection";
import FAQSection from "@/components/home/FAQSection";
import EventSection from "@/components/home/EventSection";
import JoinSection from "@/components/home/JoinSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DarshanAboutSection />
      <PrernaAurAnusandhanSection />
      <ResourcesSection />
      <WorkshopsSection />
      <TenLevelSocialOrderSection />
      <FAQSection />
      <EventSection />
      <JoinSection/>
    </main>
  );
}
