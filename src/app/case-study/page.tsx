import type { Metadata } from "next";
import CaseHero from "@/components/casestudy/CaseHero";
import TrustedBy from "@/components/home/TrustedBy";
import ResultsStats from "@/components/casestudy/ResultsStats";
import AllCaseStudies from "@/components/casestudy/AllCaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export const metadata: Metadata = {
  title: "Case Studies - OrbitOps",
  description:
    "A selection of operational systems OrbitOps has designed, built and shipped.",
};

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <CaseHero />
      <TrustedBy />
      <ResultsStats />
      <AllCaseStudies />
      <CtaFooter />
    </main>
  );
}
