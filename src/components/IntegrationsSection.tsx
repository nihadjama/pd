import Button from "@/common/Button";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Integration {
  name: string;
  logo: string;
  slug: string;
}

const integrations: Integration[] = [
  {
    name: "Dentrix",
    logo: "/integrations/logos/dentrix.png",
    slug: "dentrix",
  },
  {
    name: "Eaglesoft",
    logo: "/integrations/logos/eagle-soft.png",
    slug: "eaglesoft",
  },
  {
    name: "Open Dental",
    logo: "/integrations/logos/open-dental.png",
    slug: "opendental",
  }
];

export default function IntegrationsSection() {
  return (
    <SectionContainer className="items-center border-t border-[#e5e7eb]" id="integrations">
      {/* Header Section */}
      <SectionHeader
        icon={Link2}
        label="Integrations"
        heading={{
          text: "Seamlessly Integrated ",
          highlighted: "With",
        }}
        description="Connect PracticeDilly with your existing practice management system for a unified workflow."
        className="max-w-[600px] px-4"
      />

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-3xl">
        {integrations.map((integration) => (
          <Link
            key={integration.name}
            href={`/integrations/${integration.slug}`}
            className="flex items-center justify-center  hover:border-[#5e48f0] transition-colors"
          >
            <Image
              src={integration.logo}
              alt={integration.name}
              width={200}
              height={80}
              className="object-contain max-w-full h-auto"
            />
          </Link>
        ))}
      </div>

      {/* Additional Info */}
      <div className="flex flex-col items-center gap-2 px-4">
        <p className="font-sans font-normal text-sm text-[#606060] text-center mb-4">
          And 50+ more integrations available
        </p>
        <Button href="/integrations" variant="secondary" className="px-6">View all integrations</Button>
      </div>
    </SectionContainer>
  );
}
