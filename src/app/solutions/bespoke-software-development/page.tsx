import type { Metadata } from "next";
import { BespokeSoftwarePage } from "@/components/platform/DetailPages";

export const metadata: Metadata = {
  title: "Bespoke Software Development - OrbitOps",
  description:
    "Production-grade custom platforms, internal tools, portals and products shaped around how your business works.",
};

export default function Page() {
  return <BespokeSoftwarePage />;
}
