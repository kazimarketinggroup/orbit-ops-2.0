import type { Metadata } from "next";
import ConsultingPage from "@/components/solutions/ConsultingPage";

export const metadata: Metadata = {
  title: "Consulting - OrbitOps",
  description:
    "Operating advisory for leaders deciding what AI should change: strategy work that ends in decisions, not documents.",
};

export default function Page() {
  return <ConsultingPage />;
}
