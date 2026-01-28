import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";
import StickyNav from "@/common/StickyNav";
import Footer from "@/common/Footer";
import DarkModeToggle from "@/common/DarkModeToggle";
import { generateOrganizationSchemas } from "@/utils/generateOrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PracticeDilly - AI-Powered Patient Communication for Dental Practices",
    template: "%s | PracticeDilly",
  },
  description: "AI-powered patient communication platform for dental and healthcare practices. Appointment reminders, texting, online scheduling, reviews, and more. Trusted by 500+ practices.",
  keywords: [
    "dental practice management",
    "patient communication",
    "dental software",
    "appointment reminders",
    "patient texting",
    "online scheduling",
    "HIPAA compliant",
    "dental practice automation",
  ],
  authors: [{ name: "PracticeDilly" }],
  creator: "PracticeDilly",
  publisher: "PracticeDilly",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com"),
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "PracticeDilly",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://practicedilly.com",
    siteName: "PracticeDilly",
    title: "PracticeDilly - AI-Powered Patient Communication for Dental Practices",
    description: "AI-powered patient communication platform for dental and healthcare practices. Trusted by 500+ practices.",
    images: [
      {
        url: "/og-images/default.jpg",
        width: 1200,
        height: 630,
        alt: "PracticeDilly - AI-Powered Patient Communication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PracticeDilly - AI-Powered Patient Communication for Dental Practices",
    description: "AI-powered patient communication platform for dental and healthcare practices. Trusted by 500+ practices.",
    images: ["/og-images/default.jpg"],
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchemas = generateOrganizationSchemas();

  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body
        className="antialiased bg-background text-foreground"
      >
        {organizationSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <StickyNav />
        {children}
        <Footer />
        <div className="fixed bottom-4 right-4 z-50">
          <DarkModeToggle />
        </div>
      </body>
    </html>
  );
}
