import type { NextConfig } from "next";

/**
 * Redirects from the legacy practicedilly.com sitemap to the new Next.js app routes.
 * Permanent (308) redirects preserve SEO value and update search engine index.
 */
const legacyRedirects: { source: string; destination: string; permanent: boolean }[] = [
  // --- Main / static pages ---
  { source: "/pricing.html", destination: "/pricing", permanent: true },
  { source: "/about-us.html", destination: "/about", permanent: true },
  { source: "/testimonials.html", destination: "/testimonials", permanent: true },

  // --- Feature pages (old .html → /features/[slug]) ---
  { source: "/two-way-texting.html", destination: "/features/texting", permanent: true },
  { source: "/dental-appointment-reminder-software.html", destination: "/features/reminders", permanent: true },
  { source: "/campaigns-and-promotions.html", destination: "/features/email-marketing", permanent: true },
  { source: "/dental-reputation-management-software.html", destination: "/features/reviews", permanent: true },
  { source: "/dental-mobile-app.html", destination: "/features/mobile-app", permanent: true },
  { source: "/automated-recalls.html", destination: "/features/reminders", permanent: true },
  { source: "/paperless-forms.html", destination: "/features/digital-forms", permanent: true },
  { source: "/text-to-pay.html", destination: "/features/text-to-pay", permanent: true },
  { source: "/features/billing-payments", destination: "/features/text-to-pay", permanent: true },
  { source: "/dental-insurance-verifications.html", destination: "/features/reminders", permanent: true },

  // --- Integration / "best companion" pages ---
  { source: "/best-companion-for-dentrix-users.html", destination: "/integrations/dentrix", permanent: true },
  { source: "/best-companion-for-eaglesoft-users.html", destination: "/integrations/eaglesoft", permanent: true },
  { source: "/best-companion-for-opendental-users.html", destination: "/integrations/opendental", permanent: true },
  { source: "/best-companion-for-practice-web.html", destination: "/integrations/practice-web", permanent: true },

  // --- Demo (legacy demo.html and /demo/*.html → /resources/demo-videos) ---
  { source: "/demo.html", destination: "/resources/demo-videos", permanent: true },
  { source: "/demo", destination: "/resources/demo-videos", permanent: true },
  {
    source: "/demo/appointment-reminders-customized-for-patients.html",
    destination: "/resources/demo-videos/how-can-appointment-reminders-be-customized-for-patients",
    permanent: true,
  },
  {
    source: "/demo/automate-google-yelp-facebook-review-requests.html",
    destination: "/resources/demo-videos/how-to-automate-google-yelp-and-facebook-reviews-requests",
    permanent: true,
  },
  {
    source: "/demo/send-appointment-reminders-in-spanish.html",
    destination: "/resources/demo-videos/send-appointment-reminders-in-spanish",
    permanent: true,
  },
  {
    source: "/demo/customize-message-that-goes-out-in-online-review-requests.html",
    destination: "/resources/demo-videos/how-to-customize-the-message-that-goes-out-in-the-online-review-requests",
    permanent: true,
  },
  {
    source: "/demo/explore-email-templates.html",
    destination: "/resources/demo-videos/explore-the-email-templates-to-strengthen-patient-relationships",
    permanent: true,
  },
  {
    source: "/demo/how-dental-offices-can-use-appointment-reminder-system.html",
    destination: "/resources/demo-videos/how-dental-offices-can-use-appointment-reminder-system",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-paperless-forms-to-patients.html",
    destination: "/resources/demo-videos/how-to-send-paperless-forms-to-patients",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-recieve-text-messages.html",
    destination: "/resources/demo-videos/how-to-send-and-receive-text-messages",
    permanent: true,
  },
  {
    source: "/demo/how-to-use-practicedilly-dental-mobile-app.html",
    destination: "/resources/demo-videos/how-to-use-practicedillys-dental-mobile-app",
    permanent: true,
  },
  {
    source: "/demo/request-google-yelp-and-facebook-reviews-from-your-patients.html",
    destination: "/resources/demo-videos/how-to-request-google-yelp-and-facebook-reviews-from-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-covid-19-pre-screening-form-to-your-patients.html",
    destination: "/resources/demo-videos/how-to-send-covid-19-pre-screening-form-to-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-email-campaign.html",
    destination: "/resources/demo-videos/how-to-send-an-email-campaign-to-all-of-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-mass-text-message.html",
    destination: "/resources/demo-videos/how-to-send-a-mass-text-message-to-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-mass-text-messages-targeting-specific-patient-groups.html",
    destination: "/resources/demo-videos/how-to-send-mass-text-messages-targeting-specific-patient-groups",
    permanent: true,
  },
  {
    source: "/demo/send-text-messages-on-specific-date.html",
    destination: "/resources/demo-videos/how-can-you-send-text-messages-to-patients-on-a-specific-date",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-payment-requests-to-patients.html",
    destination: "/resources/demo-videos/how-to-send-payment-requests-to-patients",
    permanent: true,
  },
  {
    source: "/demo/how-to-have-practiceDilly-verify-insurance-periodically-with-the-patients.html",
    destination: "/resources/demo-videos/how-practicedilly-verify-insurance-periodically-with-patients",
    permanent: true,
  },
  {
    source: "/demo/send-a-masstext-message-to-all-the-patients-who-have-missed-their-appointments-in-the-past.html",
    destination:
      "/resources/demo-videos/how-to-send-a-mass-text-message-to-all-the-patients-who-missed-their-appointments",
    permanent: true,
  },

  // --- Blog (legacy /blog/*.html → /resources/article or /resources/article/[slug]) ---
  { source: "/blog/home.html", destination: "/resources/article", permanent: true },
  { source: "/blog/dental-appointment-reminders.html", destination: "/resources/article/dental-appointment-reminders", permanent: true },
  { source: "/blog/paperless-dental-forms.html", destination: "/resources/article/paperless-dental-forms", permanent: true },
  {
    source: "/blog/reputation-management-for-dentists.html",
    destination: "/resources/article/online-reputation-management-for-dentists",
    permanent: true,
  },
  { source: "/blog/text-messaging-for-dentists.html", destination: "/resources/article/text-messaging-for-dentists", permanent: true },
  {
    source: "/blog/why-you-should-still-get-reviews-on-yelp.html",
    destination: "/resources/article/why-get-reviews-on-yelp",
    permanent: true,
  },
  {
    source: "/blog/what-is-online-review-gating.html",
    destination: "/resources/article/what-is-online-review-gating",
    permanent: true,
  },
  {
    source: "/blog/how-can-i-reduce-appointment-no-shows.html",
    destination: "/resources/article/reduce-appointment-no-shows",
    permanent: true,
  },
  { source: "/blog/why-create-a-patient-record.html", destination: "/resources/article/why-create-patient-record", permanent: true },
  {
    source: "/blog/acquire-patients-email-addresses.html",
    destination: "/resources/article/acquire-patients-email-addresses",
    permanent: true,
  },
  {
    source: "/blog/overpaying-patient-engagement-platform.html",
    destination: "/resources/article/overpaying-dental-software",
    permanent: true,
  },
  {
    source: "/blog/You-are-the-Best-Dentist-in-Town.html",
    destination: "/resources/article/best-dentist-poor-google-ratings",
    permanent: true,
  },

  // --- Case study (legacy /case-study/*.html → /resources/case-study or /resources/case-study/[slug]) ---
  { source: "/case-study/home.html", destination: "/resources/case-study", permanent: true },
  {
    source: "/case-study/pacific-ocean-dental-group.html",
    destination: "/resources/case-study/pacific-ocean-dental-group",
    permanent: true,
  },
  { source: "/case-study/saghi-parham-dds.html", destination: "/resources/case-study/saghi-parham-dds", permanent: true },
  {
    source: "/case-study/picasso-smiles-dental.html",
    destination: "/resources/case-study/picasso-smiles-dental",
    permanent: true,
  },
  { source: "/case-study/village-family-dental.html", destination: "/resources/case-study/village-family-dental", permanent: true },
  { source: "/case-study/mike-shannon-dds.html", destination: "/resources/case-study/mike-shannon-dds", permanent: true },
  { source: "/case-study/future-dental-care.html", destination: "/resources/case-study/future-dental-care", permanent: true },

  // --- Legacy paths without .html (in case linked or cached without extension) ---
  { source: "/blog", destination: "/resources/article", permanent: true },
  { source: "/blog/", destination: "/resources/article", permanent: true },
  { source: "/case-study", destination: "/resources/case-study", permanent: true },
  { source: "/case-study/", destination: "/resources/case-study", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
