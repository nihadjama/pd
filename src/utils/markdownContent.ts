/**
 * Builds markdown content for agent/LLM consumption when Accept: text/markdown.
 * Keeps responses small and semantic (similar to Vercel changelog/docs, parallel.ai).
 */

import featuresData from "@/data/features.json";
import caseStudiesData from "@/data/case-studies.json";
import blogsData from "@/data/blogs.json";
import integrationsData from "@/data/integrations.json";
import authorsData from "@/data/authors.json";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

function link(href: string, text: string) {
  const url = href.startsWith("http") ? href : `${BASE}${href}`;
  return `[${text}](${url})`;
}

// Static markdown for key pages (concise for agents)
const STATIC_PAGES: Record<string, string> = {
  "/": `# PracticeDilly

AI-Powered Patient Communication for Dental Practices. Combine phones, texting, scheduling, and recalls in one hub. Trusted by 500+ practices.

## Product
- [Features](${BASE}/features) – Phones, reminders, texting, scheduling, reviews, call intelligence, billing, forms, email marketing, mobile app
- [Integrations](${BASE}/integrations) – Dentrix, Eaglesoft, Open Dental, and more
- [Pricing](${BASE}/pricing)
- [Case Studies](${BASE}/case-studies)
- [Blog](${BASE}/blog)
- [Testimonials](${BASE}/testimonials)

## Company
- [About Us](${BASE}/about)
- [Contact](${BASE}/contact)
- [Privacy Policy](${BASE}/privacy-policy)
- [Terms & Conditions](${BASE}/terms-conditions)
`,

  "/about": `# About PracticeDilly

Our journey from a mobile app in 2014 to a full patient engagement platform. Customer-centric approach for dental practices.

[Contact](${BASE}/contact) | [Features](${BASE}/features)
`,

  "/contact": `# Contact PracticeDilly

Get in touch for demos, support, or partnerships.

[Start here](${BASE}) | [Pricing](${BASE}/pricing)
`,

  "/pricing": `# Pricing | PracticeDilly

Flexible plans for dental and healthcare practices. Start with a free trial.

[Features](${BASE}/features) | [Contact](${BASE}/contact)
`,

  "/testimonials": `# Testimonials | PracticeDilly

What practices say about PracticeDilly.

[Case Studies](${BASE}/case-studies) | [Contact](${BASE}/contact)
`,

  "/search": `# Search | PracticeDilly

Search the site.

[Home](${BASE})
`,

  "/privacy-policy": `# Privacy Policy | PracticeDilly

Privacy policy and data practices.

[Home](${BASE}) | [Contact](${BASE}/contact)
`,

  "/terms-conditions": `# Terms & Conditions | PracticeDilly

Terms of use and conditions.

[Home](${BASE}) | [Contact](${BASE}/contact)
`,
};

export interface FeatureData {
  slug: string;
  hero: {
    category?: { text: string };
    heading?: { text: string; highlighted?: string; suffix?: string };
    description?: string;
    badges?: string[];
  };
  list?: {
    features?: Array<{ title: string; description: string }>;
  };
  benefits?: { items?: Array<{ title: string; description: string }> };
  whyChoose?: { description?: string; items?: Array<{ title: string; description: string }> };
  faq?: { items?: Array<{ question: string; answer: string }> };
  seo?: { title?: string; description?: string };
}

export interface CaseStudyData {
  slug: string;
  title: string;
  description: string;
  content: string;
  location?: string;
  website?: string;
}

export interface BlogData {
  slug: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  date?: string;
  category?: string;
}

export interface IntegrationData {
  slug: string;
  hero: {
    heading?: { text: string; highlighted?: string; suffix?: string };
    description?: string;
    badges?: string[];
  };
  features?: {
    items?: Array<{ title: string; description: string; benefits?: string[] }>;
  };
}

function featureToMarkdown(f: FeatureData): string {
  const title =
    f.hero?.heading?.text && f.hero?.heading?.highlighted && f.hero?.heading?.suffix
      ? `${f.hero.heading.text}${f.hero.heading.highlighted}${f.hero.heading.suffix}`.trim()
      : f.seo?.title || f.slug;
  const desc = f.hero?.description || f.seo?.description || "";
  let md = `# ${title}\n\n${desc}\n\n`;
  if (f.hero?.badges?.length) {
    md += `**Highlights:** ${f.hero.badges.join(", ")}\n\n`;
  }
  if (f.list?.features?.length) {
    md += "## Features\n\n";
    f.list.features.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
    });
    md += "\n";
  }
  if (f.benefits?.items?.length) {
    md += "## Benefits\n\n";
    f.benefits.items.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
    });
    md += "\n";
  }
  if (f.whyChoose?.description) {
    md += `## Why practices choose us\n\n${f.whyChoose.description}\n\n`;
  }
  if (f.faq?.items?.length) {
    md += "## FAQ\n\n";
    f.faq.items.forEach((item) => {
      md += `### ${item.question}\n\n${item.answer}\n\n`;
    });
  }
  md += `\n[All features](${BASE}/features) | [Contact](${BASE}/contact)\n`;
  return md;
}

function caseStudyToMarkdown(c: CaseStudyData): string {
  let md = `# ${c.title}\n\n${c.description}\n\n`;
  if (c.location) md += `*${c.location}*\n\n`;
  if (c.website) md += `Website: ${link(c.website, c.website)}\n\n`;
  md += c.content;
  md += `\n\n[All case studies](${BASE}/case-studies) | [Contact](${BASE}/contact)\n`;
  return md;
}

function blogToMarkdown(b: BlogData): string {
  let md = `# ${b.title}\n\n`;
  if (b.date || b.author || b.category) {
    md += `*${[b.date, b.author, b.category].filter(Boolean).join(" · ")}*\n\n`;
  }
  md += `${b.description}\n\n`;
  md += b.content;
  md += `\n\n[All blog posts](${BASE}/blog) | [Home](${BASE})\n`;
  return md;
}

function integrationToMarkdown(i: IntegrationData): string {
  const title =
    i.hero?.heading?.text && i.hero?.heading?.highlighted && i.hero?.heading?.suffix
      ? `${i.hero.heading.text}${i.hero.heading.highlighted}${i.hero.heading.suffix}`.trim()
      : i.slug;
  const desc = i.hero?.description || "";
  let md = `# ${title}\n\n${desc}\n\n`;
  if (i.hero?.badges?.length) {
    md += `**Highlights:** ${i.hero.badges.join(", ")}\n\n`;
  }
  if (i.features?.items?.length) {
    md += "## Features\n\n";
    i.features.items.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
      if (item.benefits?.length) {
        item.benefits.forEach((ben) => {
          md += `  - ${ben}\n`;
        });
      }
    });
    md += "\n";
  }
  md += `[All integrations](${BASE}/integrations) | [Contact](${BASE}/contact)\n`;
  return md;
}

export function getMarkdownForPath(path: string): string | null {
  const normalized = path.replace(/\/+$/, "") || "/";

  if (STATIC_PAGES[normalized]) {
    return STATIC_PAGES[normalized];
  }

  // /features
  if (normalized === "/features") {
    const features = featuresData as FeatureData[];
    let md = `# Features | PracticeDilly\n\nAI-powered patient communication: phones, reminders, texting, scheduling, reviews, and more.\n\n`;
    features.forEach((f) => {
      md += `- ${link(`/features/${f.slug}`, f.hero?.heading?.highlighted?.trim() || f.slug)}\n`;
    });
    md += `\n[Home](${BASE}) | [Pricing](${BASE}/pricing) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /features/[slug]
  const featureMatch = normalized.match(/^\/features\/([^/]+)$/);
  if (featureMatch) {
    const f = (featuresData as FeatureData[]).find((x) => x.slug === featureMatch[1]);
    if (f) return featureToMarkdown(f);
    return null;
  }

  // /case-studies
  if (normalized === "/case-studies") {
    const studies = caseStudiesData as CaseStudyData[];
    let md = `# Case Studies | PracticeDilly\n\nSuccess stories from dental and healthcare practices.\n\n`;
    studies.forEach((c) => {
      md += `- ${link(`/case-studies/${c.slug}`, c.title)}\n`;
    });
    md += `\n[Home](${BASE}) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /case-studies/[slug]
  const caseMatch = normalized.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const c = (caseStudiesData as CaseStudyData[]).find((x) => x.slug === caseMatch[1]);
    if (c) return caseStudyToMarkdown(c);
    return null;
  }

  // /blog
  if (normalized === "/blog") {
    const posts = blogsData as BlogData[];
    let md = `# Blog | PracticeDilly\n\nArticles on patient communication, reputation, and practice management.\n\n`;
    posts.forEach((b) => {
      md += `- ${link(`/blog/${b.slug}`, b.title)}\n`;
    });
    md += `\n[Home](${BASE}) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /blog/[slug]
  const blogMatch = normalized.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const b = (blogsData as BlogData[]).find((x) => x.slug === blogMatch[1]);
    if (b) return blogToMarkdown(b);
    return null;
  }

  // /author
  if (normalized === "/author") {
    const authors = authorsData as Array<{ slug: string; name: string }>;
    let md = `# Authors | PracticeDilly\n\nBlog authors.\n\n`;
    authors.forEach((a) => {
      md += `- ${link(`/author/${a.slug}`, a.name)}\n`;
    });
    md += `\n[Blog](${BASE}/blog) | [Home](${BASE})\n`;
    return md;
  }

  // /author/[slug]
  const authorMatch = normalized.match(/^\/author\/([^/]+)$/);
  if (authorMatch) {
    const a = (authorsData as Array<{ slug: string; name: string; role?: string; bio?: string }>).find(
      (x) => x.slug === authorMatch[1]
    );
    if (a) {
      let md = `# ${a.name}\n\n`;
      if (a.role) md += `*${a.role}*\n\n`;
      if (a.bio) md += `${a.bio}\n\n`;
      const posts = (blogsData as BlogData[]).filter((b) => b.author === a.name);
      if (posts.length) {
        md += "## Articles\n\n";
        posts.forEach((b) => {
          md += `- ${link(`/blog/${b.slug}`, b.title)}\n`;
        });
      }
      md += `\n[All authors](${BASE}/author) | [Blog](${BASE}/blog) | [Home](${BASE})\n`;
      return md;
    }
    return null;
  }

  // /integrations
  if (normalized === "/integrations") {
    const integrations = integrationsData as IntegrationData[];
    let md = `# Integrations | PracticeDilly\n\nPractice management and EHR integrations.\n\n`;
    integrations.forEach((i) => {
      const name = i.hero?.heading?.highlighted?.trim() || i.slug;
      md += `- ${link(`/integrations/${i.slug}`, name)}\n`;
    });
    md += `\n[Home](${BASE}) | [Features](${BASE}/features) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /integrations/[slug]
  const integrationMatch = normalized.match(/^\/integrations\/([^/]+)$/);
  if (integrationMatch) {
    const i = (integrationsData as IntegrationData[]).find((x) => x.slug === integrationMatch[1]);
    if (i) return integrationToMarkdown(i);
    return null;
  }

  return null;
}
