import Image from "next/image";
import AnimatedMolar from "@/components/AnimatedMolar";
import BackgroundElements from "@/components/BackgroundElements";
import GridBackground from "@/components/GridBackground";
import WhyPracticeDilly from "@/components/WhyPracticeDilly";
import WaveAnimation from "@/components/WaveAnimation";
import TestimonialSection from "@/components/TestimonialSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ModernPracticeSection from "@/components/ModernPracticeSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import CTASection from "@/components/CTASection";
import Button from "@/common/Button";
import { H1 } from "@/common/headings";
import { Play,Star, Check, Circle, LucideArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
  description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices. Trusted by 500+ practices.",
  keywords: [
    "dental practice management",
    "patient communication",
    "dental software",
    "appointment reminders",
    "patient texting",
    "online scheduling",
    "dental practice automation",
    "HIPAA compliant",
    "dental practice software",
    "patient engagement"
  ],
  alternates: {
    canonical: "https://practicedilly.com",
  },
  openGraph: {
    title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
    description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices.",
    url: "https://practicedilly.com",
    siteName: "PracticeDilly",
    images: [
      {
        url: "https://practicedilly.com/og-images/home.jpg",
        width: 1200,
        height: 630,
        alt: "PracticeDilly - AI-Powered Patient Communication for Dental Practices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
    description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices.",
    images: ["https://practicedilly.com/og-images/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Avatar images from Unsplash
const img1 = "/images/avatar-1.png";
const img2 = "/images/avatar-2.png";
const img3 = "/images/avatar-3.png";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <BackgroundElements /> */}
      
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 lg:px-16 border-b border-[#e5e7eb]">
        {/* Grid Background */}
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        
        {/* ASCII Background Art */}
        {/* <AnimatedMolar /> */}

        {/* Main Hero Content */}
        <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center gap-8 text-center p-4 md:p-8 lg:p-[64px]">
          {/* Badge */}
          <div className="flex items-center gap-2.5 rounded-full border px-1.5 py-1">
            <div className="flex items-center rounded-full bg-[#5e48f0] px-1.5 py-px">
              <p className="text-xs leading-4 text-[#f9f9f9]">New</p>
            </div>
            <p className="text-sm leading-5 text-[#262626]">AI Voice Intelligence 2.0</p>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-6 items-center">
            <H1>
              AI-Powered Patient Communication for{" "}<br/>
              <span className="text-[#5e48f0]">Dental Practices</span>
            </H1>
            <p className="max-w-[455px] font-sans text-base text-[#262626]">
              Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[15px]">
            <Button variant="primary"
            icon={<LucideArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Get Started
            </Button>
            {/* <Button 
              variant="secondary" 
            >
              Watch Demo
            </Button> */}
          </div>

          {/* Trust Indicator */}
          <div className="flex flex-col gap-4">
            {/* <div className="h-px w-full bg-[#e5e7eb]" /> */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#ddaa29] fill-[#fbbf24]" />
                ))}
              </div>
              <p className="text-sm sm:text-base font-medium leading-5 text-[#262626] text-center sm:text-left">
                PracticeDilly is Trusted by <span className="text-[#5e48f0]">500+</span> practices
              </p>
            </div>
          </div>
        </div>

        {/* Left Widget - Action Items */}
        {/* Outer border-radius: 6.4px, inner adjusted to match (no gap between them) */}
        <div className="absolute z-40 left-4 top-[388px] hidden w-[280px] md:w-[328.8px] rounded-[6.4px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] lg:left-[91px] xl:block">
          <div className="overflow-hidden rounded-[6.4px] border border-[#f0f0f0] bg-white">
            {/* Header */}
            <div className="border-b border-[#f0f0f0] px-2.5 py-3.5">
              <p className="text-sm font-medium leading-[22.4px] text-[#262626]">Action Items</p>
              <p className="text-right text-[9.6px] leading-[12.8px] text-[#606060]">Priority To-Dos</p>
            </div>

            {/* Items */}
            <div className="border-b border-[#f0f0f0] bg-[#f8f8f8] px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Check className="h-4 w-4 text-[#5e48f0]" />
                </div>
                <div className="flex w-16 flex-col text-xs leading-[12.8px] text-[#606060]">
                  <p className="text-xs leading-[19.2px] text-[#262626]">11:23 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">30 mins</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-[#262626]">Follow up: Missed call</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">(949) 555-0123 - 11:23 AM</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Patient called about insurance</p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#f0f0f0] px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Circle className="h-4 w-4 text-[#606060]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-[#262626]">Confirm: Neville L. appointment</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">10:30 AM tomorrow</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Crown prep - 90 min blocked</p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#f0f0f0] px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Circle className="h-4 w-4 text-[#606060]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-[#262626]">Recalls Due</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Cho C. - 6mo Hygiene</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Last visit: 6 months ago</p>
                  <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Preferred: Weekday mornings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Widget - Today's Appointments */}
        {/* Outer border-radius: 6.4px, inner adjusted to match (no gap between them) */}
        <div className="absolute z-50 right-4 top-[467.1px] hidden w-[280px] md:w-[355.2px] rounded-[6.4px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] xl:right-[calc(50%+285px)] xl:block">
          <div className="overflow-hidden rounded-[6.4px] border border-[#f0f0f0] bg-white">
            {/* Header */}
            <div className="border-b border-[#f0f0f0] px-2.5 py-3.5">
              <p className="text-sm font-medium leading-[22.4px] text-[#262626]">Today's Appointments</p>
              <p className="text-right text-[9.6px] leading-[12.8px] text-[#606060]">3 appointments</p>
            </div>

            {/* Appointment 1 */}
            <div className="border-b border-[#f0f0f0] px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-[#606060]">
                  <p className="text-xs leading-[19.2px] text-[#262626]">09:00 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">30 mins</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="Avatar" className="h-full w-full object-cover" src={img1} />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-[#262626]">Luna L.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Cleaning & Checkup</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-[#8ed6ae] bg-[#f0fdf4] px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-[#606060]">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment 2 */}
            <div className="border-b border-[#f0f0f0] px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-[#606060]">
                  <p className="text-xs leading-[19.2px] text-[#262626]">10:30 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">90 min</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="Avatar" className="h-full w-full object-cover" src={img2} />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-[#262626]">Neville L.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Crown Prep</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-[#f7db76] bg-[#fefce8] px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-[#606060]">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment 3 */}
            <div className="border-b border-[#f0f0f0] px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-[#606060]">
                  <p className="text-xs leading-[19.2px] text-[#262626]">02:00 PM</p>
                  <p className="text-[9.6px] leading-[12.8px]">1 hr 30 mins</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="Avatar" className="h-full w-full object-cover" src={img3} />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-[#262626]">Ginny W.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-[#606060]">Root Canal Follow-up</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-[#8ec5ff] bg-[#eff6ff] px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-[#606060]">Checked out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyPracticeDilly />
      <TestimonialSection />
      <IntegrationsSection />
      <ModernPracticeSection />
      <FeaturesShowcaseSection />
      <PricingSection />
      <HomeFAQSection />
      <CTASection />
      
      {/* <WaveAnimation /> */}
    </div>
  );
}
