import type { Metadata } from "next";
import PrivateEquityPage from "@/components/industry/PrivateEquityPage";

export const metadata: Metadata = {
  title: "Private Equity - OrbitOps",
  description:
    "AI advisory, diligence support, value creation systems, and operational software for private equity funds and portfolio companies.",
};

export default function Page() {
  return <PrivateEquityPage />;
}
