import { LucideIcon } from "lucide-react";
import HeadingWithHighlight from "./HeadingWithHighlight";

interface SectionHeaderProps {
  icon?: LucideIcon;
  label?: string;
  heading: {
    text: string;
    highlighted?: string;
    suffix?: string;
  };
  description: string;
  className?: string;
  /** Semantic heading level for the section heading (default h2) */
  headingAs?: "h1" | "h2" | "h3";
}

export default function SectionHeader({
  icon: Icon,
  label,
  heading,
  description,
  className = "",
  headingAs = "h2",
}: SectionHeaderProps) {
  return (
    <header className={`flex flex-col gap-4 items-center w-full pt-12 ${className}`}>
      {(Icon || label) && (
        <div className="flex gap-1 items-center justify-center pb-1.5 border-b border-border">
          {Icon && (
            <div className="relative shrink-0 w-3.5 h-3.5 text-muted" aria-hidden="true">
              <Icon className="w-full h-full" />
            </div>
          )}
          {label && (
            <span className="font-sans font-normal text-sm leading-5 text-muted text-center whitespace-nowrap">
              {label}
            </span>
          )}
        </div>
      )}
      <HeadingWithHighlight
        text={heading.text}
        highlighted={heading.highlighted}
        suffix={heading.suffix}
        className="text-center"
        as={headingAs}
      />
      <p className="font-sans font-normal text-base leading-6 text-foreground text-center px-4 max-w-full">
        {description}
      </p>
    </header>
  );
}
