import Image from "next/image";

const footerColumns = [
  {
    title: "PLATFORM",
    links: [
      {
        label: "Autonomous Operation System",
        href: "/platform/autonomous-operation-system",
      },
      {
        label: "Deal Pipeline Solution",
        href: "/platform/deal-pipeline-solution",
      },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      {
        label: "Bespoke Software Development",
        href: "/solutions/bespoke-software-development",
      },
      {
        label: "Warehouse Management System",
        href: "/solutions/warehouse-management-system",
      },
      { label: "Workflow Automation", href: "/solutions" },
      { label: "System Integration", href: "/solutions" },
      { label: "AI Implementation", href: "/solutions" },
      { label: "Consulting", href: "/solutions" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { label: "Private Equity", href: "/industry/private-equity" },
      { label: "CPG", href: "/industry/consumer-packaged-goods" },
      { label: "Healthcare", href: "/industry/healthcare" },
      { label: "Hospitality & Catering", href: "/industry/hospitality-and-catering" },
      { label: "Logistics & Travel", href: "/industry/logistics-and-travel" },
      { label: "Pharma", href: "/industry/pharma" },
      { label: "Security Guarding", href: "/industry/security-guarding" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-study" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "/demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pb-10">
      <div className="mx-auto max-w-6xl rounded-lg bg-zinc-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/home/updatedFooterlogo.png"
                alt=""
                width={1126}
                height={1121}
                className="h-7 w-7"
              />
              <span className="font-heading text-lg font-medium text-[#152250]">
                OrbitOps
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              OrbitOps is an autonomous operations & software platform, built
              to help businesses run smarter, faster and with less friction.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-wide text-zinc-500">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-zinc-600 hover:text-zinc-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[.06] pt-8 text-xs text-zinc-400 sm:flex-row">
          <p>(c) 2026 OrbitOps. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="hover:text-zinc-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-700">
              Responsible Disclosure
            </a>
            <a href="#" className="hover:text-zinc-700">
              Terms &amp; Condition
            </a>
            <a href="#" className="hover:text-zinc-700">
              Contact
            </a>
          </div>
          <p>
            Powered by{" "}
            <a
              href="http://kazimarketinggroup.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Kazi Marketing Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
