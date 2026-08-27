import type { Metadata } from "next";
import HealthcarePage from "@/components/industry/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare - OrbitOps",
  description:
    "AI consulting and clinically safe software delivery for healthcare providers, including admin automation, governance, integrations, and workflow systems.",
};

export default function Page() {
  return <HealthcarePage />;
}
