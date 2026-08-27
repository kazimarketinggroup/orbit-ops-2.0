import type { Metadata } from "next";
import LogisticsTravelPage from "@/components/industry/LogisticsTravelPage";

export const metadata: Metadata = {
  title: "Logistics & Travel - OrbitOps",
  description:
    "AI consulting, dispatch software, warehouse visibility, and automation for logistics and travel operations that need resilient service delivery.",
};

export default function Page() {
  return <LogisticsTravelPage />;
}
