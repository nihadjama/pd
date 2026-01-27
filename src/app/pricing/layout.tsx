import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Pricing Plans for Dental Practices | PracticeDilly",
  description: "Affordable plans for dental practices of all sizes. No contracts, no setup fee, 30-day free trial. All features included in each plan. Starting at $99/month.",
  keywords: [
    "dental practice pricing",
    "practice management pricing",
    "dental software pricing",
    "affordable dental software",
    "patient communication pricing",
    "dental practice cost",
    "practice management cost",
    "dental automation pricing",
    "no setup fee",
    "dental software free trial"
  ],
  alternates: {
    canonical: "https://practicedilly.com/pricing",
  },
  openGraph: {
    title: "Affordable Pricing Plans for Dental Practices | PracticeDilly",
    description: "Affordable plans for dental practices of all sizes. No contracts, no setup fee, 30-day free trial. All features included in each plan.",
    url: "https://practicedilly.com/pricing",
    siteName: "PracticeDilly",
    images: [
      {
        url: "https://practicedilly.com/og-images/pricing.jpg",
        width: 1200,
        height: 630,
        alt: "PracticeDilly Pricing Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Pricing Plans for Dental Practices | PracticeDilly",
    description: "Affordable plans for dental practices of all sizes. No contracts, no setup fee, 30-day free trial.",
    images: ["https://practicedilly.com/og-images/pricing.jpg"],
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
