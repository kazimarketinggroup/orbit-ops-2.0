import Image from "next/image";

const blocks = [
  {
    title: "Autonomous Operation System",
    description:
      "Rules you write once, executed every day: approvals, reconciliations, rosters and handoffs move themselves and escalate only when they should.",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    description:
      "Origination through post-close value creation in one thread, so investment teams and operators argue about strategy instead of about numbers.",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    description:
      "Your CRM, ERP, finance, WMS and niche tools stitched into one dependable data layer with reconciliation you can inspect.",
    cta: "Discover integration",
  },
];

export default function BuildingBlocks() {
  return (
    <section className="bg-linear-to-b from-white via-[#fdf4f8] to-[#fbeef4] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold text-zinc-500">The platform</p>
          <h2 className="mt-3 font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Three building blocks, configured to your sector
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-600">
            Nothing here is a template drop. We map your approved process, your
            data and your controls first then let the platform run it, with
            every automated decision traceable back to a rule someone signed
            off.
          </p>
          <div className="mt-6">
            <a
              href="/platform"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-[#3b2f7a] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#4a3c92]"
            >
              Explore Platforms
            </a>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-lg"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.35) 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.35) 82%, transparent 100%)",
          }}
        >
          <Image
            src="/images/industry/command-center.png"
            alt="OrbitOps command center"
            width={1142}
            height={395}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {blocks.map((block) => (
            <div key={block.title} className="border-l border-[#e0b7cd] py-1 pl-6">
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {block.description}
              </p>
              <a
                href="/platform"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors hover:text-[#1a2436]"
              >
                <span aria-hidden>→</span> {block.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
