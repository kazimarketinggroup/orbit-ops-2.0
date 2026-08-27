import Image from "next/image";

const sectors = [
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

export default function HandoverGap() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-lg bg-linear-to-br from-[#fbeef6] via-[#fdf6fa] to-[#fdf3f8] p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1fr]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/industry/handover-feed.png"
                alt="OrbitOps handover activity feed"
                width={618}
                height={438}
                className="h-auto w-full"
              />
            </div>

            <div>
              <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
                The gap is rarely effort.
                <br />
                It&apos;s the handover.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Most operational failures happen in the space between two
                systems, two shifts or two teams a form that never reached
                finance, a check nobody logged, a site quietly doing it
                differently. We close those gaps sector by sector, so the
                process runs the same on a bad week as it does on a good one.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-8 border-t border-black/[.06] pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.title} className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-zinc-300 text-[9px] font-bold text-zinc-500">
                  {sector.icon}
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-zinc-950">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
