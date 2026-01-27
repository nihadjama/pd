"use client";

import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import FeatureCard from "@/common/FeatureCard";
import featuresData from "@/data/features.json";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import GridBackground from "@/components/GridBackground";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative border-b border-[#e5e7eb] py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1278 / 11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeadingWithHighlight
              text="Everything You Need to "
              highlighted="Run a Modern Practice"
              as="h1"
              className="text-4xl md:text-5xl lg:text-[60px] lg:leading-[60px]"
            />
            <p className="font-sans text-base leading-6 text-[#262626] max-w-2xl">
              Comprehensive tools designed to modernize every aspect of your practice management and patient communication.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button href="#get-started" variant="primary" className="px-6">
                Get Started - No Setup Fee!
              </Button>
              <Button href="tel:+19494075907" variant="secondary" className="px-6">
                Call (949) 407-5907
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <SectionContainer className="items-start">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] mx-auto border-t border-[#e5e7eb]">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.slug}
                icon={feature.hero.category.icon}
                title={feature.hero.heading.text + (feature.hero.heading.highlighted || "") + (feature.hero.heading.suffix || "")}
                description={feature.hero.description}
                href={`/features/${feature.slug}`}
                category={feature.hero.category.text}
                badges={feature.hero.badges}
                variant="detailed"
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Reusable Sections from Homepage */}
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
