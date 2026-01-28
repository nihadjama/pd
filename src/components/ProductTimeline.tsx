"use client";

interface TimelineItem {
  year: string;
  features: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2014",
    features: [
      "Patient Mobile App",
      "Bill Payment, Appointment Booking via App",
    ],
  },
  {
    year: "2016",
    features: [
      "Dentrix Integration",
      "Appointment Reminders, Confirmations",
    ],
  },
  {
    year: "2018",
    features: [
      "Opendental, Eaglesoft Integration",
      "2-Way Texting, Online Reviews",
    ],
  },
  {
    year: "2020",
    features: [
      "Paperless Forms, Automated Recalls",
      "Campaigns & Promotions, Mass Texting",
    ],
  },
  {
    year: "2022",
    features: [
      "Dental Insurance Verifications",
      "Online Payments, Text to Pay",
    ],
  },
  {
    year: "2024",
    features: [
      "Patient Check In",
      "Self Scheduling",
    ],
  },
];

export default function ProductTimeline() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className="border border-border rounded-xl bg-card p-6 md:p-8 flex flex-col gap-4 hover:border-primary transition-all duration-200"
          >
            {/* Year Badge */}
            <div className="flex items-center gap-3">
              <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center px-4 py-2 rounded-lg shrink-0">
                <p className="font-heading font-semibold text-lg text-primary">
                  {item.year}
                </p>
              </div>
            </div>

            {/* Features List */}
            <ul className="flex flex-col gap-3">
              {item.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-start gap-2"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="font-sans font-normal text-sm leading-5 text-muted">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
