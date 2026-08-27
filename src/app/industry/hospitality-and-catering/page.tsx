import type { Metadata } from "next";
import HospitalityPage from "@/components/industry/HospitalityPage";

export const metadata: Metadata = {
  title: "Hospitality & Catering - OrbitOps",
  description:
    "AI consulting, scheduling and service software, stock visibility, and automation for hospitality and catering operators under service pressure.",
};

export default function Page() {
  return <HospitalityPage />;
}
