const BASE_URL = "https://practicedilly.com";

/**
 * Generates comprehensive Organization JSON-LD schema based on PracticeDilly's about-us page
 */
export function generateOrganizationSchema() {
  const logoUrl = `${BASE_URL}/logo.png`;

  return {
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
    "description": "AI-powered patient engagement platform for dental and healthcare practices. We combine phones, texting, scheduling, and recalls in one communication hub built for multi-location dental groups. Trusted by 500+ practices.",
    "foundingDate": "2014",
    "founder": {
      "@type": "Person",
      "name": "Pavan Chakka",
      "jobTitle": "CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "PracticeDilly",
      },
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "California",
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
    "knowsAbout": [
      "Dental Practice Management",
      "Patient Communication Software",
      "Healthcare Technology",
      "Appointment Reminders",
      "Two-Way Texting",
      "Online Scheduling",
      "Patient Engagement",
      "HIPAA Compliant Software",
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "SoftwareApplication",
        "name": "PracticeDilly",
        "applicationCategory": "HealthcareApplication",
        "operatingSystem": "Web",
        "description": "Patient engagement platform for dental practices with appointment reminders, two-way texting, online scheduling, reviews, and more.",
      },
    },
    "sameAs": [
      "https://www.linkedin.com/company/practicedilly",
      "https://twitter.com/practicedilly",
      "https://www.facebook.com/practicedilly",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1",
    },
    "slogan": "Listen to your customers. They'll guide you on how you should build your product, how you should market it, and everything in between.",
  };
}

/**
 * Generates WebSite JSON-LD schema for the PracticeDilly website
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}#website`,
    "name": "PracticeDilly",
    "url": BASE_URL,
    "description": "AI-powered patient engagement platform for dental and healthcare practices. Trusted by 500+ practices.",
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates all organization-related schemas (Organization + WebSite)
 * Returns an array of schema objects
 */
export function generateOrganizationSchemas() {
  return [generateOrganizationSchema(), generateWebSiteSchema()];
}
