import { H1, H2, H3 } from "./headings";

interface HeadingWithHighlightProps {
  text: string;
  highlighted?: string;
  suffix?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function HeadingWithHighlight({
  text,
  highlighted,
  suffix,
  className = "",
  as = "h2",
}: HeadingWithHighlightProps) {
  const content = (
    <>
      <span>{text}</span>
      {highlighted && <span className="text-primary">{highlighted}</span>}
      {suffix && (
        <span>
          {suffix.includes('\n') ? (
            <>
              {suffix.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </>
          ) : (
            suffix
          )}
        </span>
      )}
    </>
  );

  switch (as) {
    case "h1":
      return <H1 className={`tracking-normal w-full ${className}`}>{content}</H1>;
    case "h3":
      return <H3 className={`tracking-normal w-full ${className}`}>{content}</H3>;
    case "h2":
    default:
      return <H2 className={`tracking-normal w-full ${className}`}>{content}</H2>;
  }
}
