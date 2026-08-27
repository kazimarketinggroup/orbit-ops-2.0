import type { Metadata } from "next";
import { AutonomousOperationPage } from "@/components/platform/DetailPages";

export const metadata: Metadata = {
  title: "Autonomous Operation System - OrbitOps",
  description:
    "The operating system that runs your operations: workflows, data and AI agents in one command layer.",
};

export default function Page() {
  return <AutonomousOperationPage />;
}
