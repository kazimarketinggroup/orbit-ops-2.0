const items = [
  {
    icon: "</>",
    title: "Bespoke Software Development",
    description:
      "Custom-built platforms & apps engineered around how your business actually works.",
  },
  {
    icon: "[]",
    title: "Warehouse Management System",
    description:
      "End-to-end visibility over stock, fulfilment and logistics, built to scale with volume.",
  },
  {
    icon: "<>",
    title: "Workflow Automation",
    description:
      "Remove manual bottlenecks and let your systems handle the repeatable work.",
  },
  {
    icon: "()",
    title: "System Integration",
    description:
      "Connect the tools you already rely on into one seamless operating layer.",
  },
  {
    icon: "**",
    title: "AI Implementation",
    description:
      "Practical AI, embedded into your existing operations - not a bolt-on experiment.",
  },
  {
    icon: "o",
    title: "Consulting",
    description:
      "Strategic guidance on where automation and AI create the most impact for your business.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="solutions" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            What We Build
          </h2>
          <a
            href="#solutions"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
          >
            See all solutions
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-black/[.04] bg-zinc-50 p-6"
            >
              <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-md bg-white text-xs font-semibold text-zinc-600 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
