import type { MegaMenuContent } from "@/components/MegaMenu";

export const platformMenu: MegaMenuContent = {
  title: "PLATFORM",
  columns: 1,
  items: [
    {
      icon: "server",
      label: "Autonomous Operation System",
      description: "Systems that monitor, decide and act on their own.",
      href: "/platform/autonomous-operation-system",
    },
    {
      icon: "doc",
      label: "Deal Pipeline Solution",
      description: "Forecast outcomes and catch risk early.",
      href: "/platform/deal-pipeline-solution",
    },
  ],
  moreTitle: "MORE",
  moreItems: [
    {
      icon: "briefcase",
      label: "Case Studies",
      description: "",
      href: "/case-study",
    },
    {
      icon: "building",
      label: "Industry",
      description: "",
      href: "/industry",
    },
  ],
  image: "/images/megamenu/platform.png",
};

export const solutionsMenu: MegaMenuContent = {
  title: "SOLUTIONS",
  columns: 2,
  items: [
    {
      icon: "code",
      label: "Bespoke Software Development",
      description: "Custom platforms built for how you work.",
      href: "/solutions/bespoke-software-development",
    },
    {
      icon: "flow",
      label: "Workflow Automation",
      description: "Remove the manual work between systems.",
      href: "/solutions/workflow-automation",
    },
    {
      icon: "warehouse",
      label: "Warehouse Management System",
      description: "Full visibility over stock and fulfilment.",
      href: "/solutions/warehouse-management-system",
    },
    {
      icon: "ai",
      label: "AI Implementation",
      description: "Practical AI, built into daily operations.",
      href: "/solutions/ai-implementation",
    },
    {
      icon: "integrate",
      label: "System Integration",
      description: "Connect the tools you already use.",
      href: "/solutions/system-integration",
    },
    {
      icon: "consult",
      label: "Consulting",
      description: "Guidance on where automation pays off.",
      href: "/solutions/consulting",
    },
  ],
  image: "/images/megamenu/solutions.png",
};

export const industryMenu: MegaMenuContent = {
  title: "INDUSTRIES",
  columns: 2,
  items: [
    {
      icon: "bank",
      label: "Private Equity",
      description: "Operational visibility across your portfolio.",
      href: "/industry/private-equity",
    },
    {
      icon: "consult",
      label: "Hospitality & Catering",
      description: "Smoother operations across sites and shifts.",
      href: "/industry/hospitality-and-catering",
    },
    {
      icon: "grid",
      label: "Consumer Packaged Goods",
      description: "Connected supply and demand planning.",
      href: "/industry/consumer-packaged-goods",
    },
    {
      icon: "pill",
      label: "Pharma",
      description: "Traceable, compliant processes end to end.",
      href: "/industry/pharma",
    },
    {
      icon: "shield",
      label: "Healthcare",
      description: "Compliant, reliable systems for critical operations.",
      href: "/industry/healthcare",
    },
    {
      icon: "shield",
      label: "Security Guarding",
      description: "Scheduling and oversight without the admin load.",
      href: "/industry/security-guarding",
    },
    {
      icon: "truck",
      label: "Logistics & Travel",
      description: "Real-time coordination across moving parts.",
      href: "/industry/logistics-and-travel",
    },
  ],
  image: "/images/megamenu/industry.png",
};
