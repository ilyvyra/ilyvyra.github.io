"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { PopularScripts } from "@/components/popular-scripts";
import { StatisticsSection } from "@/components/statistics-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturesSection />
        <PopularScripts />
        <StatisticsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
