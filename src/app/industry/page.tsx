import type { Metadata } from "next";
import IndustryHero from "@/components/industry/IndustryHero";
import TrustedBy from "@/components/home/TrustedBy";
import HandoverGap from "@/components/industry/HandoverGap";
import BuildingBlocks from "@/components/industry/BuildingBlocks";
import NinetyDays from "@/components/industry/NinetyDays";
import Integrations from "@/components/platform/Integrations";
import Testimonial from "@/components/solutions/Testimonial";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export const metadata: Metadata = {
  title: "Industries - OrbitOps",
  description:
    "Sector-shaped operations for private equity, CPG, healthcare, hospitality, logistics and security guarding built around how you already run.",
};

export default function IndustryPage() {
  return (
    <main className="flex-1">
      <IndustryHero />
      <TrustedBy />
      <HandoverGap />
      <BuildingBlocks />
      <NinetyDays />
      <Integrations />
      <Testimonial
        quote="Monday mornings used to be four hours of reconciling what actually happened last week. Now the exceptions are already on my screen with a name against each one, and I spend that time on the sites that need me."
        name="Henry Hussain"
        role="UK multi-site services group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#f9e6ef]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
