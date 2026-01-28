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
}

export default function SectionHeader({
  icon: Icon,
  label,
  heading,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 items-center w-full pt-12 ${className}`}>
      {(Icon || label) && (
        <div className="flex gap-1 items-center justify-center pb-1.5 border-b border-border">
          {Icon && (
            <div className="relative shrink-0 w-3.5 h-3.5 text-muted">
              <Icon className="w-full h-full" />
            </div>
          )}
          {label && (
            <p className="font-sans font-normal text-sm leading-5 text-muted text-center whitespace-nowrap">
              {label}
            </p>
          )}
        </div>
      )}
      <HeadingWithHighlight
        text={heading.text}
        highlighted={heading.highlighted}
        suffix={heading.suffix}
        className="text-center"
      />
      <p className="font-sans font-normal text-base leading-6 text-foreground text-center px-4 max-w-full">
        {description}
      </p>
    </div>
  );
}
