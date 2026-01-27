import SectionContainer from "@/common/SectionContainer";
import StatCard from "@/common/StatCard";
import SectionHeader from "@/common/SectionHeader";
import { CalendarCheck, Clock, Star, MessageCircleHeart } from "lucide-react";

export default function WhyPracticeDilly() {
  return (
    <SectionContainer className="items-center">
      {/* Header Section */}
      <SectionHeader
        icon={MessageCircleHeart}
        label="Why PracticeDilly"
        heading={{
          text: "The Why, and the ",
          highlighted: "What",
        }}
        description="500+ practices trust PracticeDilly to handle their patient communication. There's a reason for that."
        className="max-w-[434px] w-full px-4"
      />

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row items-stretch w-full">
        <StatCard
          icon={<CalendarCheck className="w-full h-full" />}
          title="Reduce No-Shows"
          value="45"
          valueUnit="%"
          description={`reduction in no-shows`}
          explanation="Smart reminders and automated confirmation flows keep your chairs full."
        />
        <StatCard
          icon={<Clock className="w-full h-full" />}
          title="Saved Staff Time"
          value="15"
          valueUnit="hrs"
          description={`saved per week`}
          explanation="Automate intake forms, insurance verification, and routine inquiries."
        />
        <StatCard
          icon={<Star className="w-full h-full" />}
          title="Boost Reputation"
          value="3"
          valueUnit="x"
          description={`more 5-star reviews`}
          explanation="Automatically request reviews after positive visits to grow your online presence."
        />
      </div>

      {/* 5-Star Rating Section */}
      <div className="flex flex-col gap-2 items-center mt-8">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-[#fbbf24] fill-[#fbbf24]" />
          ))}
        </div>
        <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
          5-Star Rated by <span className="text-[#5e48f0]">500+</span> Practices
        </p>
      </div>
    </SectionContainer>
  );
}

