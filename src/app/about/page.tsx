import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import TrustedByDark from "@/components/about/TrustedByDark";
import SubNav from "@/components/about/SubNav";
import MissionStatement from "@/components/about/MissionStatement";
import Team from "@/components/about/Team";
import SystemActs from "@/components/about/SystemActs";
import GiveHoursBack from "@/components/about/GiveHoursBack";
import Industries from "@/components/about/Industries";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export const metadata: Metadata = {
  title: "About - OrbitOps",
  description:
    "OrbitOps was founded on a simple premise: modern businesses don't need more tools, they need systems that run.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <TrustedByDark />
      <SubNav />
      <MissionStatement />
      <Team />
      <SystemActs />
      <GiveHoursBack />
      <Industries />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
