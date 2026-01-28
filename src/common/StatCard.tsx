import { H3 } from "./headings";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueUnit: string;
  description: string;
  explanation: string;
}

export default function StatCard({
  icon,
  title,
  value,
  valueUnit,
  description,
  explanation,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-9 items-start px-6 py-6 border-b first:border-t md:border-t md:first:border-l-0 md:border-r md:last:border-r-0 border-border flex-1">
      <div className="flex flex-col items-start w-full">
        <div className="flex gap-1.5 items-center w-full">
          <div className="relative shrink-0 w-4 h-4 text-muted">{icon}</div>
          <p className="font-sans font-normal text-sm leading-5 text-muted text-center whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3.5 items-start w-full">
        <div className="flex gap-4 items-center">
          <div className="flex items-end text-primary">
            <p className="font-sans font-medium text-5xl leading-[48px]">{value}</p>
            <p className="font-sans font-semibold text-3xl leading-[38px]">{valueUnit}</p>
          </div>
          <div className="flex flex-col font-sans font-normal justify-center leading-6 text-foreground text-base">
            {description.split("\n").map((line, index) => (
              <H3 key={index} className={`${index === 0 ? "mb-0" : ""} font-normal`}>
                {line}
              </H3>
            ))}
          </div>
        </div>
        <p className="font-sans font-normal text-base text-muted w-full">
          {explanation}
        </p>
      </div>
    </div>
  );
}
