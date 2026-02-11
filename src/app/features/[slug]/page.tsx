import FeatureHeroSection from "@/components/feature-child/FeatureHeroSection";
import FeaturePostHeroIntegrationsSection from "@/components/feature-child/FeaturePostHeroIntegrationsSection";
import FeatureListSection from "@/components/feature-child/FeatureListSection";
import FeatureTestimonialSection from "@/components/feature-child/FeatureTestimonialSection";
import FeatureBenefitsSection from "@/components/feature-child/FeatureBenefitsSection";
import FeatureDataPrivacySection from "@/components/feature-child/FeatureDataPrivacySection";
import PaperlessAdvantageComparison from "@/components/feature-child/PaperlessAdvantageComparison";
import FeatureVideoSection from "@/components/feature-child/FeatureVideoSection";
import FeatureVideosSection from "@/components/feature-child/FeatureVideosSection";
import FeaturePaperlessVideoSection from "@/components/feature-child/FeaturePaperlessVideoSection";
import FeatureCampaignsVideosSection from "@/components/feature-child/FeatureCampaignsVideosSection";
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
        {"testimonial" in featureData && featureData.testimonial ? (
          <FeatureTestimonialSection {...featureData.testimonial} />
        ) : null}
        {"postHeroIntegrations" in featureData && featureData.postHeroIntegrations ? (
          <FeaturePostHeroIntegrationsSection {...featureData.postHeroIntegrations} />
        ) : null}
        <FeatureListSection {...featureData.list} />
        {"benefits" in featureData && featureData.benefits ? (
          slug === "digital-forms" ? (
            <PaperlessAdvantageComparison
              heading={featureData.benefits.heading}
              subtitle="Scroll down to see a comparison of two patients trying to get their new patient forms completed."
            />
          ) : (
            <FeatureBenefitsSection {...featureData.benefits} />
          )
        ) : null}
        {"dataPrivacy" in featureData && featureData.dataPrivacy ? (
          <FeatureDataPrivacySection {...featureData.dataPrivacy} />
        ) : null}
        {"video" in featureData && featureData.video ? (
          <FeatureVideoSection {...featureData.video} />
        ) : null}
        {"videos" in featureData && featureData.videos?.length ? (
          <FeatureVideosSection videos={featureData.videos} />
        ) : null}
        {"paperlessVideoSection" in featureData && featureData.paperlessVideoSection ? (
          <FeaturePaperlessVideoSection {...featureData.paperlessVideoSection} />
        ) : null}
        {"campaignsVideos" in featureData && featureData.campaignsVideos?.length ? (
          <FeatureCampaignsVideosSection videos={featureData.campaignsVideos} />
        ) : null}
        <FeatureFAQSection {...featureData.faq} />
        
      </div>
    </>
  );
}
