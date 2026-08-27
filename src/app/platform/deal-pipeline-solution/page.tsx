import type { Metadata } from "next";
import { DealPipelinePage } from "@/components/platform/DetailPages";

export const metadata: Metadata = {
  title: "Deal Pipeline Solution - OrbitOps",
  description:
    "A pipeline that moves deals forward on its own with enrichment, scoring, coaching and forecasting.",
};

export default function Page() {
  return <DealPipelinePage />;
}
