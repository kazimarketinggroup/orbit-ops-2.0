import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import SecurityGuardingDeliveryTabs from "@/components/industry/SecurityGuardingDeliveryTabs";

const guardingNeeds = [
  {
    number: "01",
    title: "Shift coverage volatility",
    body: "Short notice call-offs, last-minute reallocation and client rescheduling create constant service risk.",
  },
  {
    number: "02",
    title: "Manual rostering and compliance checks",
    body: "Licences, qualifications and availability still sit in spreadsheets, making protected staffing harder to control.",
  },
  {
    number: "03",
    title: "Operational visibility gaps",
    body: "Client updates, guard attendance and incident history often sit in separate channels with no single source of truth.",
  },
  {
    number: "04",
    title: "Escalation without a consistent workflow",
    body: "When a site issue appears, the team may not know who is responsible, what the escalation path is or how it was recorded.",
  },
  {
    number: "05",
    title: "Tender and contract complexity",
    body: "Meeting service promises across multiple sites usually depends on manual reporting and repeated reconciliation.",
  },
  {
    number: "06",
    title: "Margin pressure on admin overhead",
    body: "Every manual task adds cost, and every delay risks a client relationship you cannot afford to lose.",
  },
];

const adviceColumns = [
  {
    title: "AI consultancy",
    body: "Half the work is judgement: diagnose the operation, size the value, decide what should — and should not — be automated.",
  },
  {
    title: "Software engineering",
    body: "A quarter is build. OrbitOps is a software development company, so our engineers ship the production systems.",
  },
  {
    title: "Two platforms",
    body: "A quarter is reuse. AOS and Deal Pipeline cut delivery time when they fit — never a licence you're pushed into.",
  },
];

const platformCards = [
  {
    title: "Autonomous Operation System",
    body: "Rules you write once, executed every day: approvals, handoffs, escalations and shift follow-up move themselves.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Commercial pipeline discipline for client growth, contract review and service-level visibility across your portfolio.",
    href: "/platform/deal-pipeline-solution",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    body: "Your rostering, payroll, incident and client systems stitched into one dependable data layer with reconciliation you can inspect.",
    href: "/solutions/system-integration",
    cta: "Discover integration",
  },
];

const governanceBullets = [
  "Clear shift ownership and escalation paths defined before a workflow ships",
  "Evidence of attendance, coverage and client changes captured in a reviewable record",
  "Licensing and qualification checks embedded into day-to-day operations",
  "Client-facing incident and reporting workflows logged in one consistent system",
  "Operational audit trails ready for governance review, contract assurance and reporting",
];

function SecurityGuardingHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#f3f5ff]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Security Guarding
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and software delivery for guarding firms competing
            on service.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            We help guarding businesses reduce admin drag, improve guard
            coverage, and make client reporting, attendance and escalation more
            reliable without adding layers of complexity.
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
            src="/images/industry/securityGurding/Group 157.png"
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

function SecurityGuardingLeadersSection() {
  return (
    <section className="bg-[#f6f8ff] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#fbfcff] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-75 bg-[#d7e4ff]">
            <Image
              src="/images/industry/securityGurding/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top-left"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What guarding operators
              <br />
              tell us.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most service failures happen in the gap between two teams, two
              systems or two shifts: a guard not reassigned, a client update
              never logged, or a weekly exception list that still depends on a
              phone call.
            </p>
          </div>
        </div>

        <div className="grid border border-[#d9e7ff] bg-[#fbfcff] sm:grid-cols-2 lg:grid-cols-3">
          {guardingNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-40 border-b border-r border-[#d9e7ff] p-6 last:border-r-0"
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
            show up when they save you time, reduce service friction and make
            operational control more reliable.
          </p>
        </div>
        <div className="mt-8 flex h-2 overflow-hidden bg-zinc-100">
          <span className="w-1/2 bg-[#bcd2ff]" />
          <span className="w-1/4 bg-[#d4e3ff]" />
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
              className="border-l border-[#c6d8ff] py-1 pl-6"
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
    <section className="bg-[#f6f8ff] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          What we actually deliver in guarding.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          The advice is sector-specific, the delivery capability behind it is
          the same everywhere. Six engineering-led services, plus two platforms
          we can drop in when they save you build time and tighten operational
          control.
        </p>
        <SecurityGuardingDeliveryTabs />
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
            Evidence and traceability,
            <br />
            agreed before we build.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            We work with operations, client account teams and internal
            stakeholders from the first workshop to define who owns a change,
            how a response is recorded and what evidence your team needs to
            prove service continuity.
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
          src="/images/industry/securityGurding/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function SecurityGuardingPage() {
  return (
    <main className="flex-1 bg-white">
      <SecurityGuardingHero />
      <TrustedBy />
      <SecurityGuardingLeadersSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <GovernanceSection />
      <Integrations />
      <Testimonial
        quote="Our planners used to spend the first two hours of every shift chasing coverage, changes and quick client updates. Now the schedule, exceptions and escalation path are already visible in one place."
        name="Omar Rahman"
        role="Regional security operations manager"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#f6f8ff]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
