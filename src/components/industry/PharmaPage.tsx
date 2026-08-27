import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import PharmaDeliveryTabs from "@/components/industry/PharmaDeliveryTabs";

const pharmaNeeds = [
  {
    number: "01",
    title: "Documentation burden",
    body: "Quality, safety and operational records consume hours that should be spent on higher-risk, higher-value work.",
  },
  {
    number: "02",
    title: "Validation and traceability pressure",
    body: "Every process has to show where an input came from, what changed and who approved it.",
  },
  {
    title: "Supply chain and inventory fragmentation",
    number: "03",
    body: "Warehouse, procurement and commercial systems are often disconnected, making true inventory visibility difficult.",
  },
  {
    number: "04",
    title: "Regulatory and compliance uncertainty",
    body: "Teams are unsure where AI adds value safely, so sometimes nothing ships or change is delayed too long.",
  },
  {
    number: "05",
    title: "Capacity gaps by spreadsheet",
    body: "Planning remains manual against volumes that are moving faster than the admin function can keep up.",
  },
  {
    number: "06",
    title: "Commercial complexity",
    body: "Field teams, central teams and distributors need one operating thread with evidence that can be reviewed on demand.",
  },
];

const adviceColumns = [
  {
    title: "AI consultancy",
    body: "Half the work is judgement: diagnose the operation, size the value and decide what should — and should not — be automated.",
  },
  {
    title: "Software engineering",
    body: "A quarter is build. OrbitOps is a software development company, so our engineers ship the production systems.",
  },
  {
    title: "Two platforms",
    body: "A quarter is reuse. AOS and Deal Pipeline cut delivery time when they fit — never a licence you are pushed into.",
  },
];

const platformCards = [
  {
    title: "Autonomous Operation System",
    body: "Rules you write once, executed every day: approvals, reviews, exceptions and handoffs move themselves.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Commercial pipeline discipline and value creation visibility, from origination to post-close operating rhythm.",
    href: "/platform/deal-pipeline-solution",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    body: "Your ERP, quality, inventory and commercial tools stitched into one dependable data layer with reconciliation you can inspect.",
    href: "/solutions/system-integration",
    cta: "Discover integration",
  },
];

const governanceBullets = [
  "Risk and intended-use definition agreed before design work begins",
  "Every output attributable to approved source material with quality review checkpoints",
  "Clinical and operational review retained where human oversight is required",
  "Change control and traceability built into the process from day one",
  "Evidence packs prepared as part of delivery rather than after the fact",
];

function PharmaHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#fdfbf0]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Pharma
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and validated software delivery for pharma teams
            under scrutiny.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            From batch and trade workflows to compliance evidence, document
            control and quality review, we design systems your teams can trust
            and scale without losing operational control.
          </p>
          <div className="mt-8">
            <a
              href="/demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="relative min-h-90 lg:min-h-117.5">
          <Image
            src="/images/industry/pharma/Group 157.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}

function PharmaLeadersSection() {
  return (
    <section className="bg-[#fbf8e8] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#fdfbf0] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-75 bg-[#f2e8a5]">
            <Image
              src="/images/industry/pharma/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top-left"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What pharma leaders
              <br />
              raise with us.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most operational failures happen in the space between two
              systems, two shifts or two teams: a form that never reached the
              right reviewer, a record that lacks auditable evidence, or a
              workflow that still depends on a live phone call.
            </p>
          </div>
        </div>

        <div className="grid border border-[#ebe2a4] bg-[#fdfbf0] sm:grid-cols-2 lg:grid-cols-3">
          {pharmaNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-40 border-b border-r border-[#ebe2a4] p-6 last:border-r-0"
            >
              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-zinc-600">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdviceSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.5fr]">
          <h2 className="max-w-2xl font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
            Advice first, engineering second,
            <br />
            platform only when it earns its place.
          </h2>
          <p className="max-w-sm text-xs leading-5 text-zinc-600">
            Consulting leads, our engineers build, and our two platforms only
            show up when they save you time, reduce operational friction and
            protect evidence quality.
          </p>
        </div>
        <div className="mt-8 flex h-2 overflow-hidden bg-zinc-100">
          <span className="w-1/2 bg-[#fae65e]" />
          <span className="w-1/4 bg-[#f5e59d]" />
          <span className="flex-1 bg-zinc-200" />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {adviceColumns.map((item) => (
            <div key={item.title}>
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-zinc-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReuseSection() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
          Two platforms &amp; integrations we can reuse
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {platformCards.map((card) => (
            <article
              key={card.title}
              className="border-l border-[#f1d685] py-1 pl-6"
            >
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {card.title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-zinc-600">
                {card.body}
              </p>
              <a
                href={card.href}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors hover:text-[#1a2436]"
              >
                <span aria-hidden>+</span> {card.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section className="bg-[#fbf8e8] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          What we actually deliver in pharma.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          The advice is sector-specific, the delivery capability behind it is
          the same everywhere. Six engineering-led services, plus two platforms
          we can drop in when they save you build time and reduce governance
          overhead.
        </p>
        <PharmaDeliveryTabs />
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
            Validation and traceability,
            <br />
            agreed before we build.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            We work with quality, compliance and operations from the first
            workshop to define intended-use boundaries, risk controls and the
            evidence your teams need before a workflow ships.
          </p>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            {governanceBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="/platform"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
          >
            Explore Platforms
          </a>
        </div>

        <Image
          src="/images/industry/pharma/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function PharmaPage() {
  return (
    <main className="flex-1 bg-white">
      <PharmaHero />
      <TrustedBy />
      <PharmaLeadersSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <GovernanceSection />
      <Integrations />
      <Testimonial
        quote="Monday mornings used to be four hours of reconciling paperwork that should have been a planned workflow. Now the exceptions are already triaged with evidence attached."
        name="Sana Rahman"
        role="Quality and operations lead"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#fbf8e8]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
