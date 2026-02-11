import React from "react";
import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { CircleUser } from "lucide-react";

interface PaperlessAdvantageComparisonProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  subtitle?: string;
}

const ADAM_STEPS = [
  { time: "3:55 PM", text: "Adam comes in at 3:55 pm" },
  { time: "3:56 PM", text: "The front office staff hands him a notepad to fill out the New Patient paperwork." },
  { time: "3:58 PM", text: "The pen stops working. He waits for the staff to provide him with a new pen." },
  { time: "4:00 PM", text: "Adam keeps waiting for the pen." },
  { time: "4:10 PM", text: "Adam fills out the form and hands it over to the staff." },
  { time: "4:12 PM", text: "Unfortunately, the staff cannot read Adam's handwriting and ask him for clarifications while they make the changes themselves." },
  { time: "4:14 PM", text: "Adam sits in the waiting area patiently as the staff types the form information into the Patient Information System." },
  { time: "4:20 PM", text: "Once the information is entered, Adam is let into the dentist's office for his appointment." },
  { time: "4:25 PM", text: "The front office staff hands over the notepad to the next patient and gets busy in filing Adam's form in the filing cabinet." },
];

const STEVE_STEPS = [
  { time: "3:55 PM", text: "Steve comes in at 3:55 pm" },
  { time: "3:56 PM", text: "Your front office staff simply verifies the information on the paperless new patient form Steve filled out which was sent to him." },
  { time: "4:00 PM", text: "Steve breezes into your office." },
];

export default function PaperlessAdvantageComparison({
  heading,
  subtitle = "Scroll down to see a comparison of two patients trying to get their new patient forms completed.",
}: PaperlessAdvantageComparisonProps) {
  const allTimes = Array.from(
    new Set([
      ...ADAM_STEPS.map((s) => s.time),
      ...STEVE_STEPS.map((s) => s.time),
    ])
  ).sort((a, b) => timeToMinutes(a) - timeToMinutes(b));

  return (
    <SectionContainer className="items-center md:items-start border-t">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center md:items-start px-4 md:px-8 lg:px-12 w-full max-w-3xl">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className="text-center md:text-left"
          as="h2"
        />
        {subtitle && (
          <p className="font-sans font-normal leading-[1.6] text-muted text-[15px] tracking-normal w-full text-center md:text-left">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-12">
        {/* VS bar */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-2xl mb-4 md:mb-6">
          <span className="rounded-full border border-border bg-card px-5 py-2.5 font-sans text-sm font-medium text-foreground shadow-sm">
            Paper Forms
          </span>
          <span className="font-heading font-semibold text-muted text-base uppercase tracking-widest">
            vs
          </span>
          <span className="rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground shadow-sm">
            Paperless Forms
          </span>
        </div>

        {/* MONDAY – centered on timeline */}
        <p className="font-sans text-sm font-medium text-muted mb-8 md:mb-10" style={{ maxWidth: 900 }} aria-hidden>
          MONDAY
        </p>

        {/* Figureheads + appointment lines at top – same column alignment as timeline */}
        <div
          className="grid grid-cols-[1fr_80px_1fr] md:grid-cols-[1fr_100px_1fr] w-full mb-10 md:mb-12 gap-x-3 md:gap-x-6 items-center"
          style={{ maxWidth: 900 }}
        >
          <div className="flex items-center justify-end gap-3 pr-3 md:pr-6">
            <div className="flex items-center gap-3 max-w-[300px] md:max-w-[340px] w-full justify-end">
              <p className="font-sans text-sm text-foreground text-right">
                Adam has a 4 pm appointment at a dental office
              </p>
              <div className="shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted" aria-hidden>
                <CircleUser className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex justify-center" aria-hidden />
          <div className="flex items-center justify-start gap-3 pl-3 md:pl-6">
            <div className="flex items-center gap-3 max-w-[300px] md:max-w-[340px] w-full justify-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground" aria-hidden>
                <CircleUser className="w-5 h-5" />
              </div>
              <p className="font-sans text-sm text-foreground text-left">
                Steve has a 4 pm appointment at your office
              </p>
            </div>
          </div>
        </div>

        {/* Timeline – 3-column grid: left | center (line + time) | right */}
        <div
          className="relative w-full rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm"
          style={{ maxWidth: 900 }}
        >
          {/* Vertical dashed line – behind center column so it doesn’t cross timestamps */}
          <div
            className="absolute hidden md:block top-16 bottom-16 border-l border-dashed border-border pointer-events-none z-0"
            style={{
              left: "50%",
              width: 0,
              transform: "translateX(-50%)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-[1fr_80px_1fr] md:grid-cols-[1fr_100px_1fr] gap-y-8 md:gap-y-10 items-center">
            {allTimes.map((time) => {
              const adamStep = ADAM_STEPS.find((s) => s.time === time);
              const steveStep = STEVE_STEPS.find((s) => s.time === time);
              const hasSteve = !!steveStep;

              return (
                <React.Fragment key={time}>
                  {/* Left column – Adam (paper) – left-aligned */}
                  <div className="flex justify-start pl-0 pr-3 md:pr-6">
                    {adamStep ? (
                      <div className="w-full max-w-[300px] md:max-w-[340px] rounded-xl border border-border bg-card p-4 md:p-5 text-left shadow-sm">
                        <p className="font-sans text-[15px] leading-[1.65] text-foreground">
                          {adamStep.text}
                        </p>
                      </div>
                    ) : (
                      <span className="sr-only">No step at this time</span>
                    )}
                  </div>

                  {/* Center column – time on timeline (visible, line doesn’t cross) */}
                  <div className="relative flex flex-col items-center justify-center gap-2 py-1 z-10 bg-card rounded-lg px-2 min-w-[4.5rem]">
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 rounded-full border-2 items-center justify-center ${
                        hasSteve
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted"
                      }`}
                    >
                      <span className="sr-only">{time}</span>
                    </span>
                    <span className="font-sans text-sm font-semibold text-foreground tabular-nums whitespace-nowrap">
                      {time}
                    </span>
                  </div>

                  {/* Right column – Steve (paperless) */}
                  <div className="flex justify-start pl-3 md:pl-6">
                    {steveStep ? (
                      <div className="w-full max-w-[300px] md:max-w-[340px] rounded-xl bg-primary p-4 md:p-5 text-left shadow-md">
                        <p className="font-sans text-[15px] leading-[1.65] text-primary-foreground">
                          {steveStep.text}
                        </p>
                      </div>
                    ) : (
                      <span className="sr-only">No step at this time</span>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}

function timeToMinutes(t: string): number {
  const [part, period] = t.replace(" ", "").toLowerCase().split(/(?=am|pm)/);
  const [h, m] = part.split(":").map(Number);
  let hours = h;
  if (period === "pm" && h !== 12) hours += 12;
  if (period === "am" && h === 12) hours = 0;
  return hours * 60 + (m || 0);
}
