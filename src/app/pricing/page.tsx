import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import TrustedBy from "@/components/home/TrustedBy";
import Included from "@/components/pricing/Included";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import AddOns from "@/components/pricing/AddOns";
import DemoBlock from "@/components/pricing/DemoBlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing - OrbitOps",
  description:
    "Three ways to work with OrbitOps: a fixed-scope build, a running operations platform, or a full enterprise partnership.",
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <PricingHero />
      <TrustedBy />
      <Included />
      <ComparisonTable />
      <AddOns />
      <DemoBlock />
      <Footer />
    </main>
  );
}
