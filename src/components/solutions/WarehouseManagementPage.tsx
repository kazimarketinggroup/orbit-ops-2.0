import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";

const findingBullets = [
  "Stock accuracy is quietly wrong, so every downstream forecast is wrong with it.",
  "A new WMS was installed but the old paper workarounds never went away.",
  "Pickers walk miles because slotting was set years ago and never revisited.",
  "Replenishment is one person's spreadsheet and one person's memory.",
  "Nobody can say what a pick, a putaway or a return actually costs.",
];

const buildCards = [
  {
    title: "Inventory accuracy programme",
    image: "/images/solution/wearhouse/Group 132.png",
  },
  {
    title: "Slotting and pick optimisation",
    image: "/images/solution/wearhouse/Group 130.png",
  },
  {
    title: "AI demand forecasting",
    image: "/images/solution/wearhouse/Group 140.png",
  },
  {
    title: "Dispatch and carrier flow",
    image: "/images/solution/wearhouse/Group 139.png",
  },
  {
    title: "WMS/ERP integration",
    image: "/images/solution/wearhouse/Group 140 (1).png",
  },
  {
    title: "Supervisor enablement",
    image: "/images/solution/wearhouse/Group 139 (1).png",
  },
];

const engagementSteps = [
  {
    phase: "Weeks 1-2",
    title: "Floor diagnostic",
    description:
      "Time on site: observation, data extraction, cost-per-movement analysis.",
    output: "Baseline metrics and a ranked improvement backlog.",
    image: "/images/solution/wearhouse/Border.png",
  },
  {
    phase: "Weeks 3-6",
    title: "Process and data fix",
    description:
      "Master data cleanup, counting discipline and workflow redesign with supervisors.",
    output: "Trusted stock position and stable daily routines.",
    image: "/images/solution/wearhouse/Border (1).png",
  },
  {
    phase: "Weeks 7-14",
    title: "Intelligent layer",
    description:
      "Forecasting, slotting and exception automation built onto your existing systems.",
    output: "Live models, dashboards and integration into your WMS.",
    image: "/images/solution/wearhouse/Border (2).png",
  },
  {
    phase: "Ongoing",
    title: "Performance stewardship",
    description:
      "Monthly reviews on accuracy, throughput and cost per company order.",
    output: "Trend reporting and a rolling improvement plan.",
    image: "/images/solution/wearhouse/Container.png",
  },
];

function WarehouseHero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden bg-[#f6f6f6]">
      <Image
        src="/images/solution/wearhouse/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/62" />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        <p className="text-xs font-semibold text-[#0f2142]/70">
          Solutions &middot; Warehouse Management
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.45rem] lg:text-[2.75rem]">
          Warehouse consulting, with AI applied where the floor actually hurts.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#0f2142]/75">
          We assess how your warehouse really runs, fix the process and data
          problems underneath, and then implement the intelligent layer &mdash;
          stock accuracy, picking, replenishment &mdash; on top of the WMS or
          ERP you already have.
        </p>
        <div className="mt-8">
          <a
            href="/demo"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-[#152250] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1e2f6b]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function FindingsSection() {
  return (
    <section className="bg-[#f6f6f6] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          99.4% Typical stock accuracy after a full engagement, from a 92-95%
          baseline
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <h3 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              What we usually find on site.
            </h3>
            <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
              {findingBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-black/[.06] bg-white shadow-sm">
            <div className="flex h-9 items-center gap-1.5 border-b border-black/[.05] px-5">
              <span className="h-2 w-2 rounded-full bg-zinc-200" />
              <span className="h-2 w-2 rounded-full bg-zinc-200" />
              <span className="h-2 w-2 rounded-full bg-zinc-200" />
              <span className="mx-auto text-[10px] text-zinc-300">
                app.orbitops.co.uk
              </span>
            </div>
            <div className="px-8 py-10">
              <h3 className="font-heading text-lg font-medium text-zinc-900">
                Our take
              </h3>
              <p className="mt-5 text-xs leading-5 text-zinc-600">
                Most warehouses do not need a new system: they need the truth
                about their data and a handful of well-chosen automations. We
                start with a floor-level operational review, fix master data and
                process, then apply AI to demand forecasting, slotting and
                exception handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const adviceColumns = [
  {
    title: "AI & consultancy",
    description:
      "Senior consultants who diagnose the operation, size the value and decide what should and shouldn't be automated.",
  },
  {
    title: "Software engineering",
    description:
      "We are a software development company underneath the advice: senior engineers who ship production systems you own outright.",
  },
  {
    title: "Two platforms",
    description:
      "AOS and Deal Pipeline are accelerators we reuse when they fit — never a licence you're pushed into.",
  },
];

function AdviceSection() {
  return (
    <section className="bg-[#f6f6f6] pb-4 pt-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-lg bg-white/70 p-8 shadow-sm ring-1 ring-black/[.04] lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr]">
            <h2 className="max-w-md font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              Advice first, engineering second, platform only when it earns its
              place.
            </h2>
            <p className="text-sm leading-6 text-zinc-600 lg:pt-2">
              Consulting leads, our engineers build, and our two platforms only
              show up when they save you time and money.
            </p>
          </div>

          <div
            aria-hidden
            className="mt-8 flex h-2.5 overflow-hidden rounded-full"
          >
            <span className="w-[38%] bg-[#f4cfa8]" />
            <span className="w-[30%] bg-[#a9cfe0]" />
            <span className="w-[32%] bg-[#dfe3e7]" />
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {adviceColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-sm font-semibold text-zinc-950">
                  {column.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-zinc-600">
                  {column.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildBestSection() {
  return (
    <section className="bg-[#f6f6f6] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          What we build best.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {buildCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/[.04]"
            >
              <div className="relative aspect-[1.55/1] overflow-hidden bg-zinc-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          How a warehouse engagement runs.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step) => (
            <article key={step.phase}>
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-xs font-semibold text-zinc-500">
                {step.phase}
              </p>
              <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {step.description}
              </p>
              <p className="mt-4 text-xs font-semibold text-zinc-900">
                You get
              </p>
              <p className="mt-1 text-xs leading-5 text-zinc-600">
                {step.output}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WarehouseManagementPage() {
  return (
    <main className="flex-1 bg-white">
      <WarehouseHero />
      <TrustedBy />
      <FindingsSection />
      <AdviceSection />
      <BuildBestSection />
      <EngagementSection />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#f6f6f6]"
      />
      <CaseStudies />
      <CtaFooter ctaLabel="Book a Consultation" />
    </main>
  );
}
