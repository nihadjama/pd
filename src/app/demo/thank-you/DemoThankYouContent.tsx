"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import HeroPill from "@/common/HeroPill";
import Button from "@/common/Button";
import GridBackground from "@/components/GridBackground";
import { CheckCircle2 } from "lucide-react";

const PLACEHOLDER_NAME = "John Doe";
const PLACEHOLDER_EMAIL = "john.doe@example.com";

function getDisplayName(params: URLSearchParams): string {
  const firstName = params.get("firstName") ?? params.get("first_name");
  if (firstName?.trim()) return firstName.trim();

  const name = params.get("name") ?? params.get("fullName") ?? params.get("full_name");
  if (name?.trim()) {
    const first = name.trim().split(/\s+/)[0];
    if (first) return first;
  }

  return PLACEHOLDER_NAME;
}

function getDisplayEmail(params: URLSearchParams): string {
  const email = params.get("email");
  if (email?.trim()) return email.trim();
  return PLACEHOLDER_EMAIL;
}

export default function DemoThankYouContent() {
  const searchParams = useSearchParams();

  const { displayName, displayEmail } = useMemo(() => ({
    displayName: getDisplayName(searchParams),
    displayEmail: getDisplayEmail(searchParams),
  }), [searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "demo_booked",
        page: "demo_thank_you",
      });
    }
  }, []);

  return (
    <div
      className="relative min-h-screen bg-background"
      data-page="demo-thank-you"
    >
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        <GridBackground gridSize={1280 / 11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="CalendarCheck" text="Demo booked" />
            <HeadingWithHighlight
              text={`Thank you, ${displayName}`}
              className="text-center"
              as="h1"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              We&apos;ve received your request and will be in touch soon. A confirmation has been sent to{" "}
              <span className="font-medium text-foreground">{displayEmail}</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Next steps card */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="border border-border rounded-xl bg-card p-8 md:p-12">
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-heading font-semibold text-xl text-foreground">
                  What happens next?
                </h2>
                <p className="font-sans text-base leading-6 text-muted">
                  Our team will reach out to confirm your demo time and share a calendar invite. In the meantime, explore how PracticeDilly can help your practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="/" variant="primary">
                    Back to home
                  </Button>
                  <Button href="/features" variant="secondary">
                    Explore features
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
