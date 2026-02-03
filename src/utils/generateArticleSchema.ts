/**
 * Generates Article JSON-LD schema for blog posts and case studies.
 * @see https://schema.org/Article
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

export interface ArticleAuthor {
  slug: string;
  name: string;
  role?: string;
}

export interface BlogArticleInput {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: ArticleAuthor | null;
  image?: string;
  readTime?: string;
  category?: string;
}

export interface CaseStudyArticleInput {
  slug: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

/**
 * Generates Article JSON-LD for a blog post (BlogPosting subtype).
 */
export function generateBlogArticleSchema(input: BlogArticleInput): object {
  const url = `${BASE_URL}/blog/${input.slug}`;
  const imageUrl = input.image
    ? (input.image.startsWith("http") ? input.image : `${BASE_URL}${input.image}`)
    : undefined;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url,
    datePublished: input.date,
    dateModified: input.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "PracticeDilly",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
  };

  if (imageUrl) {
    schema.image = {
      "@type": "ImageObject",
      url: imageUrl,
    };
  }

  if (input.author) {
    schema.author = {
      "@type": "Person",
      name: input.author.name,
      url: `${BASE_URL}/author/${input.author.slug}`,
      jobTitle: input.author.role || undefined,
    };
  }

  if (input.category) {
    schema.articleSection = input.category;
  }

  return schema;
}

/**
 * Generates Article JSON-LD for a case study (Article type, no author Person).
 */
export function generateCaseStudyArticleSchema(input: CaseStudyArticleInput): object {
  const url = `${BASE_URL}/case-studies/${input.slug}`;
  const imageUrl = input.image
    ? (input.image.startsWith("http") ? input.image : `${BASE_URL}${input.image}`)
    : undefined;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    datePublished: input.datePublished || undefined,
    dateModified: input.dateModified || input.datePublished || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "PracticeDilly",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
  };

  if (imageUrl) {
    schema.image = {
      "@type": "ImageObject",
      url: imageUrl,
    };
  }

  return schema;
}

export interface AuthorProfileInput {
  slug: string;
  name: string;
  role?: string;
  bio?: string;
}

/**
 * Generates ProfilePage + Person JSON-LD for an author page.
 */
export function generateAuthorProfileSchema(input: AuthorProfileInput): object[] {
  const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";
  const profileUrl = `${BASE}/author/${input.slug}`;

  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: input.name,
    url: profileUrl,
    jobTitle: input.role || undefined,
    description: input.bio || undefined,
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE}#organization`,
      name: "PracticeDilly",
    },
  };

  const profilePage: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profileUrl}#profilepage`,
    url: profileUrl,
    mainEntity: {
      "@id": `${profileUrl}#person`,
    },
  };

  return [person, profilePage];
}
