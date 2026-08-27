import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import HealthcareDeliveryTabs from "@/components/industry/HealthcareDeliveryTabs";

const healthcareNeeds = [
  {
    number: "01",
    title: "Clinicians doing clerical work",
    body: "Documentation, letters and coding consume time that should be clinical, and burnout follows.",
  },
  {
    number: "02",
    title: "Referral and triage backlogs",
    body: "Referrals arrive in inconsistent formats and are triaged manually under pressure.",
  },
  {
    number: "03",
    title: "Fragmented systems",
    body: "EPR, PAS, diagnostics and departmental systems don't share a single view of the patient pathway.",
  },
  {
    number: "04",
    title: "Governance uncertainty",
    body: "Teams are unsure what AI is permissible, so either nothing happens or shadow tools appear.",
  },
  {
    number: "05",
    title: "Capacity planning by spreadsheet",
    body: "Rosters and clinic templates are set manually against demand that has already changed.",
  },
  {
    number: "06",
    title: "Procurement caution",
    body: "Buying an AI platform is a long process; teams need value before the next budget cycle.",
  },
];

const adviceColumns = [
  {
    title: "AI consultancy",
    body: "Half the work is judgement: diagnose the operation, size the value, decide what should - and should not - be automated.",
  },
  {
    title: "Software engineering",
    body: "A quarter is build. OrbitOps is a software development company, so our engineers ship the production systems.",
  },
  {
    title: "Two platforms",
    body: "A quarter is reuse. AOS and Deal Pipeline cut delivery time when they fit - never a licence you're pushed into.",
  },
];

const platformCards = [
  {
    title: "Autonomous Operation System",
    body: "Rules you write once, executed every day: approvals, reconciliations, rosters and handoffs move themselves.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Origination through post-close value creation in one thread, so investment teams and operators argue about strategy instead of about numbers.",
    href: "/platform/deal-pipeline-solution",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    body: "Your CRM, ERP, finance, WMS and rota tools stitched into one dependable data layer with reconciliation you can inspect.",
    href: "/solutions/system-integration",
    cta: "Discover integration",
  },
];

const governanceBullets = [
  "Clinical safety documentation aligned to DCB0129/DCB0160 per deployment",
  "Every output attributable to approved source content, with citations",
  "Clinical review retained on all patient-facing or clinical-decision outputs",
  "Data residency and retention agreed with your IG and security teams",
  "Audit-ready documentation produced as part of delivery, not afterwards",
];

function HealthcareHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#effffb]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Healthcare
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and clinically safe software delivery for healthcare
            providers.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            We help providers apply AI to the administrative burden crushing
            clinical capacity documentation, referrals, scheduling, coding -
            under governance your information governance team signs off on.
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

        <div className="relative min-h-[360px] lg:min-h-[470px]">
          <Image
            src="/images/industry/healthcare/Group 157.png"
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

function HealthcareLeadersSection() {
  return (
    <section className="bg-[#f2fffc] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#f8fffd] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-[300px] bg-[#bafbef]">
            <Image
              src="/images/industry/healthcare/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-left-top"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What healthcare leaders
              <br />
              raise with us.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most operational failures happen in the space between two
              systems, two shifts or two teams: a form that never reached
              finance, a check nobody logged, a site quietly doing it
              differently.
            </p>
          </div>
        </div>

        <div className="grid border border-[#d5ebe6] bg-[#f8fffd] sm:grid-cols-2 lg:grid-cols-3">
          {healthcareNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-[160px] border-b border-r border-[#d5ebe6] p-6 last:border-r-0"
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
            show up when they save you time and money.
          </p>
        </div>
        <div className="mt-8 flex h-2 overflow-hidden bg-zinc-100">
          <span className="w-1/2 bg-[#bffcef]" />
          <span className="w-1/4 bg-[#d6f4ef]" />
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
          Two platforms &amp; Integrations we can reuse
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {platformCards.map((card) => (
            <article
              key={card.title}
              className="border-l border-[#b9e6df] py-1 pl-6"
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
    <section className="bg-[#f2fffc] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          Give your operation back its hours.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          OrbitOps designs, builds and ships the software that runs the work:
          bespoke systems, automation and AI, delivered by one team from
          diagnosis to production.
        </p>
        <HealthcareDeliveryTabs />
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
            Validation and governance, agreed before we build.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            We work with clinical safety, information governance and IT from
            the first workshop to define intended use, risk classification and
            the evidence your governance team needs to sign off so nothing ships
            that hasn&apos;t already been agreed.
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
          src="/images/industry/healthcare/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function HealthcarePage() {
  return (
    <main className="flex-1 bg-white">
      <HealthcareHero />
      <TrustedBy />
      <HealthcareLeadersSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <GovernanceSection />
      <Integrations />
      <Testimonial
        quote="Monday mornings used to be four hours of reconciling what actually happened last week. Now the exceptions are already on my screen with a name against each one, and I spend that time on the sites that need me."
        name="Henry Hussain"
        role="UK multi-site services group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#eafffb]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
