import type { Metadata } from "next";
import PharmaPage from "@/components/industry/PharmaPage";

export const metadata: Metadata = {
  title: "Pharma - OrbitOps",
  description:
    "AI consulting, validated software delivery, quality workflows, inventory visibility, and automation for pharma operations under scrutiny.",
};

export default function Page() {
  return <PharmaPage />;
}
