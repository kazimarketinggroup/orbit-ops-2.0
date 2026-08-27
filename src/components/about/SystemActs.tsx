const columns = [
  {
    title: "Autonomous Operation System",
    description:
      "Rules you write once, executed every day: approvals, reconciliations, rotas and handoffs move themselves and escalate only when they should.",
    cta: "Explore the platform",
    href: "#platform",
  },
  {
    title: "Deal Pipeline Solution",
    description:
      "Origination through post-close value creation in one thread, so investment teams and operators argue about strategy instead of numbers.",
    cta: "See how it works",
    href: "#deal-pipeline",
  },
  {
    title: "System Integration",
    description:
      "Your CRM, ERP, finance, WMS and niche tools stitched into one dependable data layer with reconciliation you can inspect.",
    cta: "Discover integration",
    href: "#integration",
  },
];

export default function SystemActs() {
  return (
    <section id="platform" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          A system that watches, decides and acts
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
          We sit across the tools you already run, turn their data into a live
          operational picture and execute the routine work on your behalf
          continuously.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className="border-l border-[#d7c3ef] py-1 pl-6"
            >
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {col.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {col.description}
              </p>
              <a
                href={col.href}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors hover:text-[#1a2436]"
              >
                <span aria-hidden>+</span> {col.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
