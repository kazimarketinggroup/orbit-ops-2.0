import type { Metadata } from "next";
import SecurityGuardingPage from "@/components/industry/SecurityGuardingPage";

export const metadata: Metadata = {
  title: "Security Guarding - OrbitOps",
  description:
    "AI consulting, guarding operations software, shift and roster automation, and evidence-ready control for security guarding firms.",
};

export default function Page() {
  return <SecurityGuardingPage />;
}
