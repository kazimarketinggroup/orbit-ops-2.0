import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import BuiltToRun from "@/components/home/BuiltToRun";
import Platform from "@/components/home/Platform";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import ComplexOperations from "@/components/home/ComplexOperations";
import Intelligence from "@/components/home/Intelligence";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustedBy />
      <BuiltToRun />
      <Platform />
      <WhatWeBuild />
      <ComplexOperations />
      <Intelligence />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
