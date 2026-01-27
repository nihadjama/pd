"use client";

import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import Button from "@/common/Button";
import WhyPracticeDilly from "@/components/WhyPracticeDilly";
import TestimonialSection from "@/components/TestimonialSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import GridBackground from "@/components/GridBackground";
import { H1, H2, H3 } from "@/common/headings";
import { Check } from "lucide-react";
import FAQItem from "@/common/FAQItem";
import { useState } from "react";

export default function PricingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const pricingPlans = [
    {
      name: "Basic",
      description: "For dental practices averaging 5-10 appointments daily",
      price: "$99",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      description: "For dental practices averaging 11-20 appointments daily",
      price: "$129",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: true,
    },
    {
      name: "Premier",
      description: "For dental practices averaging 21-50 appointments daily",
      price: "$179",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: false,
    },
  ];

  const allFeatures = [
    {
      category: "Reminders",
      items: [
        "Appointment Reminders",
        "Automated Confirmations",
        "Email Reminders",
        "Text Reminders",
        "Voice Call Reminders",
      ],
    },
    {
      category: "Texting",
      items: [
        "2-way Texting",
        "Landline Texting",
        "Custom Reminders",
        "Family Grouping",
        "Group Messaging",
      ],
    },
    {
      category: "Recall",
      items: [
        "On-Demand Recall",
        "Automated Recall",
        "Yearly Recall",
        "Staff Mobile App",
        "Mobile App Texting",
      ],
    },
    {
      category: "Bulk Messaging",
      items: [
        "Mass Texting",
        "Mass Emails",
        "Birthday Greetings",
        "Welcome Email",
        "Email Templates",
      ],
    },
    {
      category: "Reviews",
      items: [
        "Google Reviews",
        "Facebook Reviews",
        "Yelp Reviews",
        "Auto Requests",
        "Manual Requests",
      ],
    },
    {
      category: "Paperless Forms",
      items: [
        "Covid-19 Pre-Screening",
        "New Patient Forms",
        "Treatment Consent Form",
        "Form Customization",
      ],
    },
  ];

  const whyPracticeDillyItems = [
    {
      title: "All In One",
      description: "You don't need multiple tools. Reminders, Texting, Paperless Forms, Reputation Management, etc. all available in one platform.",
    },
    {
      title: "Great Support",
      description: "We even have our support staff providing you with assistance after hours or during the weekend.",
    },
    {
      title: "Best Pricing",
      description: "We want technology to be widely available to dental practices of all sizes and offer the best price in the market.",
    },
    {
      title: "Real-Time Communication",
      description: "Our No-Sync technology enables us to obtain accurate information, so you will not see reminders sent out for canceled appointments.",
    },
  ];

  const faqItems = [
    {
      question: "Is PracticeDilly HIPAA compliant?",
      answer: "PracticeDilly is a result of collaboration between dentists and software engineers. As such, we knew from the start to make sure PracticeDilly must be completely HIPAA compliant. Our No-Sync approach to patient data enables us to use the data only to perform necessary functions and is never stored on our servers.",
    },
    {
      question: "Why would you offer a free trial?",
      answer: "We believe our product offers important features not included with other patient communication services. But we want to be even better! Your experience will help us learn how to improve PracticeDilly even more. Plus, we are confident you will love our service and be happy to become a customer.",
    },
    {
      question: "What practice management softwares are you compatible with?",
      answer: "PracticeDilly currently works seamlessly with Dentrix, Eaglesoft, and Opendental. We are constantly adding new software integrations.",
    },
  ];


  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <SectionContainer className="relative items-center border-y border-[#e5e7eb]">
        {/* Grid Background */}
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 w-full px-4 lg:px-16">
          <div className="flex flex-col gap-6 items-center py-12">
            <H1 className="text-center">
              Affordable Plans for{" "}
              <span className="text-[#5e48f0]">All</span>
            </H1>
            <p className="max-w-[600px] font-sans text-base text-[#262626] text-center">
              We want dental practices of all sizes to take advantage of technology and automation. That's why our pricing is based on practice size and offers all the features.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Pricing Plans Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white border rounded-xl p-6 md:p-8 flex flex-col gap-6 hover:shadow-lg transition-all duration-200 h-full ${
                  plan.popular
                    ? "border-2 border-[#5e48f0]"
                    : "border-[#f0f0f0] hover:border-[#5e48f0]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#5e48f0] text-[#f9f9f9] text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <H3 className="font-semibold">
                    {plan.name}
                  </H3>
                  <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-semibold text-4xl leading-tight text-[#262626]">
                      {plan.price}
                    </span>
                    <span className="font-sans font-normal text-base text-[#606060]">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <Button 
                  variant={plan.popular ? "primary" : "secondary"} 
                  className="w-full mt-auto"
                >
                  {plan.cta}
                </Button>

                <div className="flex flex-col gap-2 pt-4 border-t border-[#e5e7eb]">
                  <p className="font-sans font-normal text-xs leading-4 text-[#606060] text-center">
                    No contracts, No setup fee
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* All Features Included Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 items-center">
              <H2 className="text-center">
                All Features Included in Each Plan
              </H2>
              <p className="font-sans font-normal text-base text-[#262626] text-center">
                Regardless of the plan you choose, you will enjoy every feature listed below
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {allFeatures.map((category, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <H3 className="font-semibold">
                    {category.category}
                  </H3>
                  <ul className="flex flex-col gap-2.5">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-[#5e48f0] shrink-0 mt-0.5" />
                        <span className="font-sans font-normal text-sm leading-5 text-[#262626]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 items-center pt-8 border-t border-[#e5e7eb] w-full">
              <p className="font-sans font-normal text-sm leading-5 text-[#262626] text-center">
                Looking for only a specific feature listed above? Let us know, we can certainly help you with that.
              </p>
              <p className="font-sans font-medium text-sm leading-5 text-[#5e48f0] text-center">
                Call us at (949) 407-5907
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Why PracticeDilly Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 items-center">
              <H2 className="text-center">
                Why PracticeDilly?
              </H2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {whyPracticeDillyItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 bg-white border border-[#f0f0f0] rounded-xl p-6">
                  <H3>
                    {item.title}
                  </H3>
                  <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* No Contracts Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto py-12 border-y border-[#e5e7eb]">
            <H2 className="text-center">
              No Contracts, No Setup Fee
            </H2>
            <p className="font-sans font-normal text-base leading-6 text-[#262626] text-center">
              We want you to be completely satisfied before you commit to making any payments. That's why we offer our service without any setup fees or contracts.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <SectionContainer className="items-start">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center mb-10">
            <SectionHeader
              heading={{
                text: "Frequently Asked ",
                highlighted: "Questions",
              }}
              description="Everything you need to know about PracticeDilly pricing and features."
              className="max-w-[600px]"
            />
          </div>

          <div className="flex flex-col max-w-[800px] mx-auto">
            {faqItems.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onToggle={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
