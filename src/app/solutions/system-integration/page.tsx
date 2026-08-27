import type { Metadata } from "next";
import SystemIntegrationPage from "@/components/solutions/SystemIntegrationPage";

export const metadata: Metadata = {
  title: "System Integration - OrbitOps",
  description:
    "Integration consulting for organisations tired of duplicate data entry: architecture, data quality, and resilient interfaces.",
};

export default function Page() {
  return <SystemIntegrationPage />;
}
