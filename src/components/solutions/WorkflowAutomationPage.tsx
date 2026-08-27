import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";

const findingBullets = [
  "Bad processes get automated, so the organisation now does the wrong thing faster.",
  "Pilots impress the steering committee and never reach production.",
  "Nobody owns the bot after the consultants leave, so it silently breaks.",
  "Savings are claimed in a deck but never appear in a budget line.",
  "AI is applied to tasks where a rule and a form would have been cheaper and safer.",
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

const coverCards = [
  {
    title: "Work audit",
    image: "/images/solution/workflowAutomation/covers-work-audit.png",
  },
  {
    title: "Process redesign",
    image: "/images/solution/workflowAutomation/covers-process-redesign.png",
  },
  {
    title: "Agent implementation",
    image: "/images/solution/workflowAutomation/covers-agent-implementation.png",
  },
  {
    title: "Governance model",
    image: "/images/solution/workflowAutomation/covers-governance-model.png",
  },
  {
    title: "Benefit tracking",
    image: "/images/solution/workflowAutomation/covers-benefit-tracking.png",
  },
  {
    title: "Internal capability",
    image: "/images/solution/workflowAutomation/covers-internal-capability.png",
  },
];

const engagementSteps = [
  {
    phase: "Weeks 1-2",
    title: "Opportunity assessment",
    description:
      "Interviews and system data to size the work and rank candidates by value and risk.",
    output: "Costed automation roadmap.",
    image: "/images/solution/workflowAutomation/step-assessment.png",
  },
  {
    phase: "Weeks 3-5",
    title: "Redesign and pilot",
    description:
      "One workflow taken end to end into production with real users.",
    output: "Live pilot with measured before/after.",
    image: "/images/solution/workflowAutomation/step-redesign.png",
  },
  {
    phase: "Weeks 6-10",
    title: "Scale",
    description:
      "Roll the pattern across adjacent processes, with governance applied consistently.",
    output: "Portfolio of live, monitored automations.",
    image: "/images/solution/workflowAutomation/step-scale.png",
  },
  {
    phase: "Ongoing",
    title: "Capability handover",
    description:
      "Your team takes ownership; we review quarterly.",
    output: "Runbooks, training and an internal centre of practice.",
    image: "/images/solution/workflowAutomation/step-capability.png",
  },
];

function WorkflowHero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden bg-[#f4f2fb]">
      <Image
        src="/images/solution/workflowAutomation/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#f4f2fb]/55" />

      <div className="relative mx-auto grid min-h-[calc(100svh-var(--nav-h))] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.72fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Solutions &middot; Workflow Automation
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[2rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.45rem] lg:text-[2.75rem]">
            Automation advisory that removes work before it automates it.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#0f2142]/75">
            Our consultants quantify where your organisation&apos;s hours
            actually go, eliminate what shouldn&apos;t exist, and then
            automate the remainder with AI &mdash; with a clear owner and
            measurement for every workflow.
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
            src="/images/solution/workflowAutomation/hero-photo.png"
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
    <section className="bg-[#f4f2fb] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          1 in 3 Candidate workflows we recommend deleting or simplifying
          rather than automating.
        </h2>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <h3 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
              Why automation programmes stall.
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

          <div className="overflow-hidden rounded-lg border border-black/[.06] bg-[#e7e3fa] shadow-sm">
            <div className="flex h-9 items-center gap-1.5 border-b border-black/[.05] px-5">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <span className="mx-auto text-[10px] text-zinc-500/70">
                app.orbitops.co.uk
              </span>
            </div>
            <div className="px-8 py-10">
              <h3 className="font-heading text-lg font-medium text-zinc-900">
                Our take
              </h3>
              <p className="mt-5 text-xs leading-5 text-zinc-600">
                Automation is an operating-model decision, not a tooling
                decision. We baseline the cost of the work, challenge whether
                it needs doing, redesign what remains, then automate with the
                lightest technology that will hold. Every workflow ships with
                a named business owner, a monitoring view and a stated failure
                mode.
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
    <section className="bg-[#f4f2fb] pb-4 pt-10">
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

function CoversSection() {
  return (
    <section className="bg-[#f4f2fb] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          What the engagement covers.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coverCards.map((card) => (
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

export default function WorkflowAutomationPage() {
  return (
    <main className="flex-1 bg-white">
      <WorkflowHero />
      <TrustedBy />
      <FindingsSection />
      <AdviceSection />
      <CoversSection />
      <EngagementSection />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#eee9fb]"
      />
      <CaseStudies />
      <CtaFooter ctaLabel="Book a Consultation" />
    </main>
  );
}
