import Link from "next/link";
import Image from "next/image";
import { H3 } from "@/common/headings";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  author,
  date,
  readTime,
  category,
  image,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-white border border-[#f0f0f0] flex flex-col overflow-hidden rounded-xl hover:border-[#5e48f0] transition-all duration-200 hover:shadow-lg h-full"
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-heading font-bold text-[#5e48f0]/20">
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Category */}
        <div className="flex items-center">
          <span className="text-xs font-medium text-[#5e48f0] bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <H3 className="text-xl font-heading font-semibold text-[#262626] line-clamp-2 group-hover:text-[#5e48f0] transition-colors">
          {title}
        </H3>

        {/* Description */}
        <p className="font-sans text-sm leading-6 text-[#606060] line-clamp-3 flex-1">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#f0f0f0]">
          <div className="flex items-center gap-4 text-xs text-[#606060]">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
          <p className="text-xs text-[#606060]">By {author}</p>
        </div>
      </div>
    </Link>
  );
}
