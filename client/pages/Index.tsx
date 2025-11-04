import { HeroSection } from "@/components/home/HeroSection";
import { OurCoursesSection } from "@/components/home/OurCoursesSection";
import { PopularProgramsSection } from "@/components/home/PopularProgramsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { AboutSection } from "@/components/home/AboutSection";
import { AcademicPartnersSection } from "@/components/home/AcademicPartnersSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <OurCoursesSection />
      <PopularProgramsSection />
      <WhyChooseSection />
      <AboutSection />
      <AcademicPartnersSection />
      <ContactSection />
    </main>
  );
}
