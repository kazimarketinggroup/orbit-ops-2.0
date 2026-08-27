import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";

const findingBullets = [
  "Impressive pilots that never survive contact with real users or real volumes.",
  "Use cases chosen by enthusiasm rather than by value and feasibility.",
  "No evaluation harness, so nobody can prove the model is good enough to trust.",
  "Costs that scale invisibly until finance asks an uncomfortable question.",
  "Risk and compliance brought in at the end, then blamed for blocking launch.",
];

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

const deliverCards = [
  {
    title: "AI opportunity assessment",
    image: "/images/solution/aiImplementation/deliver-opportunity-assessment.png",
  },
  {
    title: "Solution design",
    image: "/images/solution/aiImplementation/deliver-solution-design.png",
  },
  {
    title: "Build and deployment",
    image: "/images/solution/aiImplementation/deliver-build-deployment.png",
  },
  {
    title: "Evaluation and assurance",
    image: "/images/solution/aiImplementation/deliver-evaluation-assurance.png",
  },
  {
    title: "AI governance",
    image: "/images/solution/aiImplementation/deliver-ai-governance.png",
  },
  {
    title: "Team enablement",
    image: "/images/solution/aiImplementation/deliver-team-enablement.png",
  },
];

const engagementSteps = [
  {
    phase: "Weeks 1-2",
    title: "Assessment",
    description:
      "Workshops, data review and use-case scoring across the business.",
    output: "Prioritised roadmap and business case.",
    image: "/images/solution/aiImplementation/step-assessment.png",
  },
  {
    phase: "Weeks 3-8",
    title: "Proof in production",
    description:
      "The top use case built for real users, with evaluation and cost tracking.",
    output: "Live system plus honest performance evidence.",
    image: "/images/solution/aiImplementation/step-proof-in-production.png",
  },
  {
    phase: "Weeks 7-20",
    title: "Scale",
    description:
      "Additional use cases delivered on shared foundations and governance.",
    output: "Reusable AI platform patterns in your cloud.",
    image: "/images/solution/aiImplementation/step-scale.png",
  },
  {
    phase: "Ongoing",
    title: "Assure",
    description: "Drift monitoring, cost review and roadmap refresh each quarter.",
    output: "Quarterly assurance report and updated plan.",
    image: "/images/solution/aiImplementation/step-assure.png",
  },
];

function AiImplementationHero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden bg-[#f3f6f8]">
      <Image
        src="/images/solution/aiImplementation/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#f3f6f8]/55 via-[#f3f6f8]/10 to-[#f3f6f8]/45" />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        <p className="text-xs font-semibold text-[#0f2142]/70">
          Solutions &middot; AI Implementation
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-[2rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.45rem] lg:text-[2.75rem]">
          AI consulting for organisations tired of pilots that never ship.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#0f2142]/75">
          From opportunity assessment to production, our team takes
          accountability for the whole path: what to build, whether it&apos;s
          safe, whether it works, and whether it earned its cost.
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
    <section className="bg-[#f3f6f8] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          2 wks From first workshop to a costed, prioritised AI roadmap.
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <h3 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              Where AI programmes go wrong.
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
                We treat AI as an operating change with a technical component.
                Use cases are ranked on value, feasibility and risk. Every
                build ships with an evaluation set, a cost-per-outcome model
                and an agreed human oversight design. If a use case
                doesn&apos;t clear the bar, we recommend stopping &mdash; that
                advice is part of what you&apos;re paying for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdviceSection() {
  return (
    <section className="bg-[#f3f6f8] pb-4 pt-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-lg bg-white/70 p-8 shadow-sm ring-1 ring-black/[.04] lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr]">
            <h2 className="max-w-md font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              Advice first, engineering second, platform only when it earns
              its place.
            </h2>
            <p className="text-sm leading-6 text-zinc-600 lg:pt-2">
              Consulting leads, our engineers build, and our two platforms
              only show up when they save you time and money.
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

function DeliverSection() {
  return (
    <section className="bg-[#f3f6f8] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          What we deliver.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverCards.map((card) => (
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
          How the engagement runs.
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

export default function AiImplementationPage() {
  return (
    <main className="flex-1 bg-white">
      <AiImplementationHero />
      <TrustedBy />
      <FindingsSection />
      <AdviceSection />
      <DeliverSection />
      <EngagementSection />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#eef3f7]"
      />
      <CaseStudies />
      <CtaFooter ctaLabel="Book a Consultation" />
    </main>
  );
}
