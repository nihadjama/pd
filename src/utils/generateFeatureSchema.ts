interface FeatureData {
  slug: string;
  hero: {
    category?: {
      icon: string;
      text: string;
    };
    heading: {
      text: string;
      highlighted: string;
      suffix: string;
    };
    description: string;
    badges?: string[];
  };
  list: {
    heading: {
      text: string;
      highlighted: string;
      suffix: string;
    };
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits?: {
    heading: {
      text: string;
      highlighted: string;
      suffix: string;
    };
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  whyChoose: {
    heading: {
      text: string;
      highlighted: string;
      suffix: string;
    };
    description: string;
    items?: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    heading: {
      text: string;
      highlighted: string;
    };
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
  };
}

const BASE_URL = "https://practicedilly.com";

export function generateFeatureSchema(featureData: FeatureData) {
  const { slug, hero, list, benefits, whyChoose, faq, seo } = featureData;
  
  // Generate full title
  const fullTitle = `${hero.heading.text}${hero.heading.highlighted}${hero.heading.suffix}`;
  
  // Generate comprehensive summary from content (use SEO description as base, enhance with content)
  const summary = seo.description || [
    hero.description,
    list.description,
    benefits?.description,
    whyChoose.description,
  ]
    .filter(Boolean)
    .join(" ");
  
  // Generate feature list from list.features
  const featureList = list.features.map((f) => f.title);
  
  // Generate benefits list
  const benefitsList = benefits?.items?.map((item) => item.title) ?? [];
  
  // Image URL - ensure it points to public folder
  const imageUrl = seo.ogImage.startsWith("http")
    ? seo.ogImage
    : `${BASE_URL}${seo.ogImage.startsWith("/") ? "" : "/"}${seo.ogImage}`;
  
  // Logo URL - placeholder in public folder
  const logoUrl = `${BASE_URL}/logo.png`;
  
  const schemas = [];
  
  // 1. WebPage Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${seo.canonicalUrl}#webpage`,
    "url": seo.canonicalUrl,
    "name": seo.title,
    "description": seo.description,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
      "name": "PracticeDilly",
      "url": BASE_URL,
    },
    "about": {
      "@type": "SoftwareApplication",
      "@id": `${seo.canonicalUrl}#software`,
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `${seo.canonicalUrl}#breadcrumb`,
    },
  });
  
  // 2. SoftwareApplication Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${seo.canonicalUrl}#software`,
    "name": fullTitle,
    "description": summary,
    "url": seo.canonicalUrl,
    "applicationCategory": "HealthcareApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
    },
    "featureList": featureList,
    "screenshot": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
    },
  });
  
  // 3. Organization Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#organization`,
    "name": "PracticeDilly",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": 200,
      "height": 200,
    },
    "sameAs": [
      "https://www.linkedin.com/company/practicedilly",
      "https://twitter.com/practicedilly",
      "https://www.facebook.com/practicedilly",
    ],
  });
  
  // 4. BreadcrumbList Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${seo.canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": `${BASE_URL}/features`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": fullTitle,
        "item": seo.canonicalUrl,
      },
    ],
  });
  
  // 5. FAQPage Schema (if FAQs exist)
  if (faq.items && faq.items.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  }
  
  // 6. ItemList Schema for Features
  if (list.features && list.features.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${fullTitle} - Features`,
      "description": list.description,
      "itemListElement": list.features.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": feature.title,
        "description": feature.description,
      })),
    });
  }
  
  // 7. ItemList Schema for Benefits
  if (benefits?.items && benefits.items.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${fullTitle} - Benefits`,
      "description": benefits.description,
      "itemListElement": benefits.items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "description": item.description,
      })),
    });
  }
  
  return schemas;
}
