"use client";

import Link from "next/link";
import Image from "next/image";
import SectionContainer from "@/common/SectionContainer";
import { H2 } from "@/common/headings";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import { getIcon } from "@/utils/iconMap";
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
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
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
              <Button href="tel:9494075907" variant="secondary" className="px-6">
                Call (949) 407-5907
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <SectionContainer className="items-start">
        <div className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto">
            {featuresData.map((feature) => {
              const IconComponent = getIcon(feature.hero.category.icon);
              return (
                <Link
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className="group bg-white border border-[#f0f0f0] rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-[#5e48f0] transition-all duration-200 hover:shadow-lg"
                >
                  {/* Image */}
                  {feature.hero.image && (
                    <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden bg-[#f9f9f9] mb-2">
                      <Image
                        src={feature.hero.image}
                        alt={feature.hero.heading.text + (feature.hero.heading.highlighted || "") + (feature.hero.heading.suffix || "")}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}

                  {/* Icon and Category */}
                  <div className="flex items-center gap-3">
                    {IconComponent && (
                      <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center p-2.5 rounded-[10px] shrink-0">
                        <IconComponent className="w-5 h-5 text-[#5e48f0]" />
                      </div>
                    )}
                    <span className="text-xs font-medium text-[#606060] uppercase tracking-wide">
                      {feature.hero.category.text}
                    </span>
                  </div>

                  {/* Title */}
                  <H2 className="text-xl md:text-2xl group-hover:text-[#5e48f0] transition-colors">
                    {feature.hero.heading.text}
                    {feature.hero.heading.highlighted && (
                      <span className="text-[#5e48f0]">
                        {feature.hero.heading.highlighted}
                      </span>
                    )}
                    {feature.hero.heading.suffix}
                  </H2>

                  {/* Description */}
                  <p className="font-sans font-normal text-sm md:text-base leading-6 text-[#606060] line-clamp-3">
                    {feature.hero.description}
                  </p>

                  {/* Badges */}
                  {feature.hero.badges && feature.hero.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.hero.badges.slice(0, 3).map((badge, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium text-[#606060] bg-[#f9f9f9] px-2.5 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link Arrow */}
                  <div className="flex items-center gap-2 text-[#5e48f0] font-medium text-sm mt-auto pt-2">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Reusable Sections from Homepage */}
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
