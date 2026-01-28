import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";
import { MapPin, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PracticeDilly - Get in Touch",
  description: "Get in touch with PracticeDilly. Reach out to us via email, phone, or visit our office in Irvine, California. We're here to help your dental practice succeed.",
  alternates: {
    canonical: "https://practicedilly.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative border-b border-[#e5e7eb] py-20">
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Mail" text="Contact Us" />
            <HeadingWithHighlight
              text="Get in "
              highlighted="Touch"
              className="text-center"
              as="h1"
            />
            <p className="font-sans text-base leading-6 text-[#262626] max-w-2xl">
              Have questions? We'd love to hear from you. Reach out to us via email, phone, or visit our office in Irvine, California.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Address Card */}
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <MapPin className="w-6 h-6 text-[#5e48f0]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-[#262626]">
                    Address
                  </h3>
                  <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                    224 Kempton<br />
                    Irvine, CA 92620
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <Mail className="w-6 h-6 text-[#5e48f0]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-[#262626]">
                    Email
                  </h3>
                  <a
                    href="mailto:info@appdilly.com"
                    className="font-sans font-normal text-base leading-6 text-[#5e48f0] hover:underline"
                  >
                    info@appdilly.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <Phone className="w-6 h-6 text-[#5e48f0]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-[#262626]">
                    Phone
                  </h3>
                  <a
                    href="tel:+19494075907"
                    className="font-sans font-normal text-base leading-6 text-[#5e48f0] hover:underline"
                  >
                    (949) 407-5907
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Additional Contact Info Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="border border-[#e5e7eb] rounded-xl bg-white p-8 md:p-12">
              <div className="flex flex-col gap-6">
                <HeadingWithHighlight
                  text="We're Here to "
                  highlighted="Help"
                  className="text-center"
                  as="h2"
                />
                <p className="font-sans font-normal text-base leading-6 text-[#262626] text-center max-w-2xl mx-auto">
                  Whether you have questions about our platform, need support, or want to learn more about how PracticeDilly can help your dental practice, we're ready to assist you.
                </p>
                <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-[#e5e7eb]">
                  <div className="flex flex-col gap-2">
                    <p className="font-sans font-semibold text-base text-[#262626]">
                      Office Hours
                    </p>
                    <p className="font-sans font-normal text-base leading-6 text-[#606060]">
                      Monday - Friday: 9:00 AM - 5:00 PM PST
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-sans font-semibold text-base text-[#262626]">
                      Response Time
                    </p>
                    <p className="font-sans font-normal text-base leading-6 text-[#606060]">
                      We typically respond to emails within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
