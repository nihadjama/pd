import FeatureHeroSection from "@/components/feature-child/FeatureHeroSection";
import FeatureListSection from "@/components/feature-child/FeatureListSection";
import FeatureBenefitsSection from "@/components/feature-child/FeatureBenefitsSection";
import FeatureWhyChooseSection from "@/components/feature-child/FeatureWhyChooseSection";
import FeatureFAQSection from "@/components/feature-child/FeatureFAQSection";
import featuresData from "@/data/features.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateFeatureSchema } from "@/utils/generateFeatureSchema";

interface FeaturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Allow all dynamic routes
export const dynamicParams = true;

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const featureData = featuresData.find((feature) => feature.slug === slug);

  if (!featureData || !featureData.seo) {
    return {
      title: "Feature Not Found | PracticeDilly",
      description: "The requested feature page could not be found.",
    };
  }

  const seo = featureData.seo;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl,
      siteName: "PracticeDilly",
      images: [
        {
          url: seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`],
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
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  
  // Find the feature data by slug
  const featureData = featuresData.find((feature) => feature.slug === slug);
  
  if (!featureData) {
    notFound();
  }
  
  // Generate JSON-LD schema
  const schemas = generateFeatureSchema(featureData);
  
  return (
    <>
      {/* JSON-LD Schema */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <div className="relative min-h-screen">
        <FeatureHeroSection {...featureData.hero} />
        <FeatureListSection {...featureData.list} />
        <FeatureBenefitsSection {...featureData.benefits} />
        <FeatureWhyChooseSection {...featureData.whyChoose} />
        <FeatureFAQSection {...featureData.faq} />
      </div>
    </>
  );
}
