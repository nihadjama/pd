import type { Metadata } from "next";
import { Suspense } from "react";
import DemoThankYouContent from "./DemoThankYouContent";
import GridBackground from "@/components/GridBackground";
import SectionContainer from "@/common/SectionContainer";

export const metadata: Metadata = {
  title: "Thank You | Demo Booked",
  description: "Thanks for booking a demo with PracticeDilly. We'll be in touch soon.",
  robots: {
    index: false,
    follow: true,
  },
};

function ThankYouFallback() {
  return (
    <div className="relative min-h-screen bg-background" data-page="demo-thank-you">
      <div className="relative border-b border-border py-20">
        <GridBackground gridSize={1280 / 11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <div className="font-sans text-base leading-6 text-muted">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoThankYouPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <DemoThankYouContent />
    </Suspense>
  );
}
