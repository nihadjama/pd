import { getIcon } from "@/utils/iconMap";

interface HeroPillProps {
  icon: string;
  text: string;
  /** Semantic heading level for hero sections (non-home). Use "h1" so the pill is the page title. */
  as?: "h1" | "div";
}

const pillClassName =
  "flex gap-1 items-center justify-center border border-border rounded-full px-2 py-1";
const textClassName =
  "font-sans font-normal leading-5 shrink-0 text-foreground text-sm text-center whitespace-nowrap text-uppercase tracking-normal";

export default function HeroPill({ icon, text, as: Component = "div" }: HeroPillProps) {
  const IconComponent = getIcon(icon);

  const content = (
    <>
      {IconComponent && (
        <div className="relative shrink-0 size-[14px] text-primary">
          <IconComponent className="w-full h-full" />
        </div>
      )}
      <span className={textClassName}>{text}</span>
    </>
  );

  if (Component === "h1") {
    return <h1 className={pillClassName}>{content}</h1>;
  }

  return <div className={pillClassName}>{content}</div>;
}
