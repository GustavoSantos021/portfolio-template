import Hero from "@/components/hero";
import BusinessPractices from "@/components/business-practices";
import Services from "@/components/services";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
            <Services />

      <BusinessPractices />

      <ContactSection />
    </div>
  );
}