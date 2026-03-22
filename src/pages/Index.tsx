import AIBackground from "@/components/AIBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhySection from "@/components/WhySection";
import ComplianceSection from "@/components/ComplianceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import { LanguageProvider } from "@/hooks/useLanguage";

const Index = () => {
  return (
    <LanguageProvider>
      <AIBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <ServicesSection />
        <WhySection />
        <ComplianceSection />
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
    </LanguageProvider>
  );
};

export default Index;
