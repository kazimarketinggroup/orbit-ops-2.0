import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import HospitalityDeliveryTabs from "@/components/industry/HospitalityDeliveryTabs";

const hospitalityNeeds = [
  {
    number: "01",
    title: "Roster and headcount volatility",
    body: "Sickness, last-minute swaps and demand change create staffing gaps that show up in service before they are visible in payroll.",
  },
  {
    number: "02",
    title: "Stock, waste and ordering drag",
    body: "Kitchen and procurement teams are still chasing yesterday’s numbers, which quietly impacts margin and service continuity.",
  },
  {
    number: "03",
    title: "Operations split across sites",
    body: "Each site runs slightly differently, which means service standards and approvals are hard to keep aligned in real time.",
  },
  {
    number: "04",
    title: "Manual handoffs and client updates",
    body: "Service issues, changes and customer promises still depend too heavily on live calls, messages and manually updated records.",
  },
  {
    number: "05",
    title: "Forecasting by instinct",
    body: "Peaks, weather, bookings and staffing are difficult to balance without a reliable operating picture.",
  },
  {
    number: "06",
    title: "Retention and service pressure",
    body: "When the guest experience slips, it is not just one service issue. It is a repeatability problem for the whole venue or group.",
  },
];

const adviceColumns = [
  {
    title: "AI consultancy",
    body: "Half the work is judgement: diagnose the operation, find where service breaks and decide what should — and should not — be automated.",
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
    body: "Rules you write once, executed every day: approvals, handoffs, staffing follow-up and service alerts move themselves.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Commercial pipeline discipline for demand planning, venue growth and service-level performance in a multi-site business.",
    href: "/platform/deal-pipeline-solution",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    body: "Your POS, payroll, procurement and finance tools stitched into one dependable data layer with reconciliation you can inspect.",
    href: "/solutions/system-integration",
    cta: "Discover integration",
  },
];

const governanceBullets = [
  "Standard operating rules defined for every venue, service and shift pattern",
  "Live exception and update records tied to a clear owner and time stamp",
  "Cross-site reporting built around one source of operational truth",
  "Operational and service evidence available when a client, manager or compliance reviewer asks for it",
  "System changes designed to keep service continuity high even during peak demand",
];

function HospitalityHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#ecf8ff]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Hospitality &amp; Catering
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and software delivery for hospitality groups running
            on thin margins.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            We help operators make service more predictable: staffing,
            procurement, readiness, customer experience and operational
            reporting — all connected so the venue can keep service level high
            without absorbing more admin.
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
            src="/images/industry/hospitality/Group 157.png"
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

function HospitalityLeadersSection() {
  return (
    <section className="bg-[#f4fbff] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#f8fdff] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-75 bg-[#d1f1fb]">
            <Image
              src="/images/industry/hospitality/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top-left"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What operators tell us
              <br />
              on site.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most service losses happen in the gap between two teams, two
              systems or two shifts: a rota change that never reached the site,
              a stock count done too late, or a customer promise that still
              depends on a whispered update.
            </p>
          </div>
        </div>

        <div className="grid border border-[#d3edf8] bg-[#f8fdff] sm:grid-cols-2 lg:grid-cols-3">
          {hospitalityNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-40 border-b border-r border-[#d3edf8] p-6 last:border-r-0"
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
            show up when they save you time, improve consistency and protect
            service delivery on tight margins.
          </p>
        </div>
        <div className="mt-8 flex h-2 overflow-hidden bg-zinc-100">
          <span className="w-1/2 bg-[#9bd8ef]" />
          <span className="w-1/4 bg-[#bfeaf8]" />
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
              className="border-l border-[#8ccfe1] py-1 pl-6"
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
    <section className="bg-[#f4fbff] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          What we actually deliver in hospitality &amp; catering.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          The advice is sector-specific, the delivery capability behind it is
          the same everywhere. Six engineering-led services, plus two platforms
          we can drop in when they save you build time and protect operational
          continuity.
        </p>
        <HospitalityDeliveryTabs />
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
            Adoption on the floor is the whole game.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            Systems are only useful when the frontline team can trust them in a
            real service moment. We design workflows that speed up attendance,
            stock decisions and escalation without replacing the operational
            judgement your managers already bring.
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
          src="/images/industry/hospitality/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function HospitalityPage() {
  return (
    <main className="flex-1 bg-white">
      <HospitalityHero />
      <TrustedBy />
      <HospitalityLeadersSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <GovernanceSection />
      <Integrations />
      <Testimonial
        quote="Our kitchen and service teams were spending too much time chasing readiness and shortages instead of running service. Now the exceptions are visible before they become guest issues."
        name="James Hales"
        role="Operations director, multi-site hospitality group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#f4fbff]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
