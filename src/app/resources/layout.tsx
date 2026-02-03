import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Articles, Case Studies & Demo Videos | PracticeDilly",
  description:
    "Explore articles, case studies, and demo videos to learn how PracticeDilly helps dental practices improve efficiency, patient communication, and growth.",
  keywords: [
    "dental practice resources",
    "dental practice management tips",
    "dental case studies",
    "practice management demo",
  ],
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
