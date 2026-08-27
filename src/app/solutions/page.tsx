import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import TrustedBy from "@/components/home/TrustedBy";
import SolutionList from "@/components/solutions/SolutionList";
import ProofPoints from "@/components/solutions/ProofPoints";
import Integrations from "@/components/platform/Integrations";
import Testimonial from "@/components/solutions/Testimonial";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export const metadata: Metadata = {
  title: "Solutions - OrbitOps",
  description:
    "Bespoke software, warehouse management, workflow automation, system integration, AI implementation and consulting built around how you actually operate.",
};

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <SolutionsHero />
      <TrustedBy />
      <SolutionList />
      <ProofPoints />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
