import type { Metadata } from "next";
import AiImplementationPage from "@/components/solutions/AiImplementationPage";

export const metadata: Metadata = {
  title: "AI Implementation - OrbitOps",
  description:
    "AI consulting for organisations tired of pilots that never ship: opportunity assessment, production builds and ongoing assurance.",
};

export default function Page() {
  return <AiImplementationPage />;
}
