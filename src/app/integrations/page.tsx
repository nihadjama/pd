"use client";

import Link from "next/link";
import Image from "next/image";
import SectionContainer from "@/common/SectionContainer";
import { H2 } from "@/common/headings";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import integrationsData from "@/data/integrations.json";
import TestimonialSection from "@/components/TestimonialSection";
import GridBackground from "@/components/GridBackground";
import CTASection from "@/components/CTASection";
import HeroPill from "@/common/HeroPill";

export default function IntegrationsPage() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative border-b border-[#e5e7eb] py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Plug" text="Integrations" />
            <HeadingWithHighlight
              text="Seamlessly Integrated "
              highlighted="With Your Practice"
              as="h1"
            />
            <p className="font-sans text-base leading-6 text-[#262626] max-w-2xl">
              Connect PracticeDilly with your existing practice management system for a unified workflow. 15-minute setup, no contracts, 30-day free trial.
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

      {/* Integrations Grid */}
      <SectionContainer className="items-start">
        <div className="w-full py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1280px] mx-auto -ml-px gap-y-16 border-[#e5e7eb]">
            {integrationsData.map((integration) => {
              // Map slugs to logo paths
              const logoMap: Record<string, string> = {
                dentrix: "/integrations/logos/dentrix.png",
                eaglesoft: "/integrations/logos/eagle-soft.png",
                opendental: "/integrations/logos/open-dental.png",
                "practice-web": "/integrations/logos/practice-web.png", // Fallback if exists
              };
              
              const logoPath = logoMap[integration.slug] || `/integrations/logos/${integration.slug}.png`;

              return (
                <Link
                  key={integration.slug}
                  href={`/integrations/${integration.slug}`}
                  className="group bg-white border-l border-y border-[#e5e7eb] flex flex-col gap-6 hover:border-[#5e48f0] transition-all duration-200 hover:shadow-lg h-full"
                >

                 
                  {/* Logo */}
                  <div className="relative w-full h-32 md:h-40 flex items-center justify-center bg-[#f9f9f9] overflow-hidden">
                    <Image
                      src={logoPath}
                      alt={integration.hero.heading.text + (integration.hero.heading.highlighted || "") + (integration.hero.heading.suffix || "")}
                      width={200}
                      height={80}
                      className="object-contain max-w-full h-auto group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="px-6 pb-6 flex flex-col gap-4 flex-1">
                  {/* Title */}

                  {/* Description */}
                  <p className="font-sans font-normal text-sm md:text-base leading-6 text-[#606060] line-clamp-3">
                    {integration.hero.description}
                  </p>



                  {/* Badges */}
                  {integration.hero.badges && integration.hero.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {integration.hero.badges.map((badge, index) => (
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
                    <span>Start Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>

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
