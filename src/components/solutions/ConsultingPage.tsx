import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";

const findingBullets = [
  "Every vendor has an AI story and none of them start with your business.",
  "The last strategy engagement produced a deck nobody has opened since.",
  "We can't tell which initiatives are real and which are theatre.",
  "Our teams are experimenting privately with no governance and no shared learning.",
  "We need someone who will still be here when the plan meets reality.",
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

const helpCards = [
  {
    title: "AI and automation strategy",
    description: "Where to invest, where to wait, and what it does to your operating model.",
    image: "/images/solution/consulting/help-ai-strategy.png",
  },
  {
    title: "Operational diagnostics",
    description: "An evidence-based read on cost, cycle time and capacity across a function.",
    image: "/images/solution/consulting/help-operational-diagnostics.png",
  },
  {
    title: "Technology due diligence",
    description: "Independent assessment of a platform, build or acquisition target.",
    image: "/images/solution/consulting/help-tech-due-diligence.png",
  },
  {
    title: "Operating model design",
    description: "Roles, decision rights and governance for an AI-assisted organisation.",
    image: "/images/solution/consulting/help-operating-model-design.png",
  },
  {
    title: "Programme recovery",
    description: "Independent review and reset of initiatives that have lost direction.",
    image: null,
  },
  {
    title: "AI governance and policy",
    description: "Practical policy your teams will follow, mapped to incoming regulation.",
    image: "/images/solution/consulting/help-ai-governance.png",
  },
];

const engagementSteps = [
  {
    phase: "Week 0",
    title: "Frame the question",
    description: "One page agreeing the decision to be made and the evidence needed to make it.",
    output: "Signed engagement brief.",
    image: "/images/solution/consulting/step-frame-question.png",
  },
  {
    phase: "Weeks 1-2",
    title: "Evidence",
    description: "Interviews, system data and process observation across the affected areas.",
    output: "Findings pack grounded in your numbers.",
    image: "/images/solution/consulting/step-evidence.png",
  },
  {
    phase: "Week 3",
    title: "Options & recommendation",
    description: "Two or three viable paths with cost, risk and organisational impact.",
    output: "Recommendation and decision session with leadership.",
    image: "/images/solution/consulting/step-options-recommendation.png",
  },
  {
    phase: "Ongoing",
    title: "Execution support",
    description: "We stay involved through delivery, or hand over with a clear plan.",
    output: "Owned plan with named accountabilities.",
    image: "/images/solution/consulting/step-execution-support.png",
  },
];

function ConsultingHero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden bg-[#e9f6f6]">
      <Image
        src="/images/solution/consulting/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#e9f6f6]/62" />

      <div className="relative mx-auto grid min-h-[calc(100svh-var(--nav-h))] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.72fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Solutions &middot; Consulting
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[2rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.45rem] lg:text-[2.75rem]">
            Operating advisory for leaders deciding what AI should change.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#0f2142]/75">
            Strategy work that ends in decisions, not documents. Our
            consultants come from operating roles, work inside your business,
            and stay accountable through delivery.
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

        <div className="relative hidden aspect-4/3 self-center overflow-hidden rounded-lg shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] lg:block">
          <Image
            src="/images/solution/consulting/hero-photos.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function FindingsSection() {
  return (
    <section className="bg-[#e9f6f6] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          100% Of assessments end with a decision and an owner &mdash; not a
          parked deck.
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <h3 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              What executives tell us.
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
                Advice you can&apos;t act on isn&apos;t advice. We work in
                short, decision-focused engagements: a clear question,
                evidence gathered inside your operation, options with costs
                and risks, and a recommendation we&apos;re prepared to be held
                to. Then we help you execute or hand over cleanly to whoever
                will.
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
    <section className="bg-[#e9f6f6] pb-4 pt-10">
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

function HelpSection() {
  return (
    <section className="bg-[#e9f6f6] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          How we help.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {helpCards.map((card) =>
            card.image ? (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/[.04]"
              >
                <div className="relative aspect-[1.55/1] overflow-hidden bg-zinc-100">
                  <Image
                    src={card.image}
                    alt={`${card.title} — ${card.description}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div
                key={card.title}
                className="relative flex aspect-[1.55/1] flex-col justify-end overflow-hidden rounded-lg bg-linear-to-br from-[#eaf6f7] to-white p-6 shadow-sm ring-1 ring-black/[.04]"
              >
                <h3 className="font-heading text-lg font-semibold text-zinc-950">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-5 text-zinc-600">
                  {card.description}
                </p>
              </div>
            ),
          )}
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

export default function ConsultingPage() {
  return (
    <main className="flex-1 bg-white">
      <ConsultingHero />
      <TrustedBy />
      <FindingsSection />
      <AdviceSection />
      <HelpSection />
      <EngagementSection />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#e9f6f6]"
      />
      <CaseStudies />
      <CtaFooter ctaLabel="Book a Consultation" />
    </main>
  );
}
