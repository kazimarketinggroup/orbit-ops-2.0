import type { Metadata } from "next";
import WorkflowAutomationPage from "@/components/solutions/WorkflowAutomationPage";

export const metadata: Metadata = {
  title: "Workflow Automation - OrbitOps",
  description:
    "Automation advisory that removes work before it automates it, with a costed roadmap, a live pilot and governed scale.",
};

export default function Page() {
  return <WorkflowAutomationPage />;
}
