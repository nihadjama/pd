/**
 * Generates VideoObject JSON-LD schema for demo videos.
 * @see https://schema.org/VideoObject
 * @see https://developers.google.com/search/docs/appearance/video
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

/**
 * Converts duration from "MM:SS" or "HH:MM:SS" to ISO 8601 duration (e.g. PT1M32S).
 */
function durationToISO8601(duration: string): string {
  const parts = duration.trim().split(":").map((p) => parseInt(p, 10) || 0);
  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return `PT${minutes}M${seconds}S`;
  }
  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours}H${minutes}M${seconds}S`;
  }
  return "PT0S";
}

export interface DemoVideoSchemaInput {
  slug: string;
  title: string;
  description?: string;
  categoryName: string;
  duration: string;
  youtubeId: string;
}

/**
 * Generates VideoObject JSON-LD for a demo video page.
 */
export function generateDemoVideoSchema(input: DemoVideoSchemaInput): object {
  const url = `${BASE_URL}/resources/demo-videos/${input.slug}`;
  const embedUrl = `https://www.youtube.com/embed/${input.youtubeId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${input.youtubeId}/maxresdefault.jpg`;
  const duration = durationToISO8601(input.duration);
  const description =
    input.description ||
    `${input.categoryName} – ${input.title}. PracticeDilly demo video.`;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.title,
    description,
    url,
    embedUrl,
    thumbnailUrl,
    duration,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "PracticeDilly",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
