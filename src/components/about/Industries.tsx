const industries = [
  {
    icon: "PE",
    title: "Private Equity",
    description:
      "Consistent KPI reporting, automated portfolio packs and pipeline visibility across every holding.",
  },
  {
    icon: "CP",
    title: "Consumer Packaged Goods",
    description:
      "Demand signals, stock positions and fulfilment kept aligned from line to shelf.",
  },
  {
    icon: "HC",
    title: "Healthcare & Pharma",
    description:
      "Workflows that capture their own evidence, so audits become an export rather than a project.",
  },
  {
    icon: "HO",
    title: "Hospitality & Catering",
    description:
      "Rotas, wastage and stock balanced across venues while service is still running.",
  },
  {
    icon: "LT",
    title: "Logistics & Travel",
    description:
      "Loads, crews and exceptions coordinated continuously, including through the night shift.",
  },
  {
    icon: "SG",
    title: "Security Guarding",
    description:
      "Licence checks, shift cover and payroll-ready timesheets across national contracts.",
  },
];

const faqs = [
  {
    question: "What does OrbitOps actually do?",
    answer:
      "OrbitOps builds autonomous systems, bespoke software and AI-driven workflows that run your day-to-day operations from automating manual tasks to managing your deal pipeline and connecting the tools you already use.",
  },
  {
    question: "Is OrbitOps a software product, or a development agency?",
    answer:
      "Both. We ship a platform for autonomous operations and pipeline management, and we build bespoke software when off-the-shelf tools do not fit how your business runs.",
  },
  {
    question: "What industries does OrbitOps work with?",
    answer:
      "Private equity, consumer packaged goods, healthcare and pharma, hospitality and catering, logistics and travel, and security guarding.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Most integrations go live within a few weeks. Bespoke builds are scoped individually depending on the systems involved.",
  },
  {
    question: "Will OrbitOps work with the systems we already use?",
    answer:
      "Yes. OrbitOps integrates with your CRM, ERP, finance, WMS and niche tools, stitching them into one dependable data layer.",
  },
];

export default function Industries() {
  return (
    <section id="industry" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            The Industries we know well
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Different regulators, different rhythms, different failure points.
            Pick yours and we&apos;ll talk specifics rather than generalities.
          </p>
        </div>

        <div className="mt-10 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-zinc-300 text-[9px] font-bold text-zinc-500">
                {industry.icon}
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-zinc-950">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Frequently asked
            <br />
            questions
          </h2>

          <div className="divide-y divide-black/[.12] border-t border-black/[.12]">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-zinc-900">
                  <span className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-zinc-950 text-xs leading-none text-white group-open:bg-zinc-950">
                      +
                    </span>
                    {faq.question}
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pl-8 text-sm leading-6 text-zinc-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
