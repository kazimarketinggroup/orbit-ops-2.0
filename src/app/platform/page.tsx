import type { Metadata } from "next";
import PlatformHero from "@/components/platform/PlatformHero";
import TrustedBy from "@/components/home/TrustedBy";
import Products from "@/components/platform/Products";
import Capabilities from "@/components/platform/Capabilities";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";

export const metadata: Metadata = {
  title: "Platform - OrbitOps",
  description:
    "Two products, engineered to run in the background of your business: an Autonomous Operation System and a Deal Pipeline Solution.",
};

export default function PlatformPage() {
  return (
    <main className="flex-1">
      <PlatformHero />
      <TrustedBy />
      <Capabilities />
      <Products />
      <Integrations />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
