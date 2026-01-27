import Button from "@/common/Button";
import Badge from "@/common/Badge";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Image from "next/image";
import HeroPill from "@/common/HeroPill";

interface FeatureHeroSectionProps {
  category: {
    icon: string;
    text: string;
  };
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
  };
  badges: string[];
  image: string;
}

export default function FeatureHeroSection({
  category,
  heading,
  description,
  cta,
  badges,
  image
}: FeatureHeroSectionProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-32 lg:px-16 w-full ">
      <div className="flex w-full flex-col items-center gap-20  ">
        {/* Main Content Card */}

        <div className="flex max-w-[1280px] md:flex-row items-center flex-col gap-12 w-full border border-[#e5e7eb] py-12 ">

          <div className="flex flex-col items-start pl-12 w-full md:w:1/2 flex-1">
            <div className="flex flex-col gap-8 w-full">
              {/* Category Badge */}
              <div className="flex flex-col gap-6 justify-start items-start">
                <HeroPill icon={category.icon} text={category.text} />

                {/* Heading */}
                <HeadingWithHighlight
                  text={heading.text}
                  highlighted={heading.highlighted}
                  suffix={heading.suffix}
                  className="text-4xl md:text-5xl leading-[48px] max-w-[568px]"
                  as="h1"
                />

                {/* Description */}
                <p className="font-sans font-normal leading-6 text-[#262626] text-base tracking-normal max-w-[572px]">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start">
              <Button href={cta.href} variant="primary" className=" flex items-center justify-center">
                {cta.text}
              </Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <Image src={image || ""} alt={heading.text} width={650} height={650} />
          </div>

        </div>


        {/* Feature Badges */}
        <div className="flex flex-wrap gap-4 items-start justify-center px-0 py-12 w-full">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
