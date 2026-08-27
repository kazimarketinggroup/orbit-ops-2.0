import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import LogisticsTravelDeliveryTabs from "@/components/industry/LogisticsTravelDeliveryTabs";

const logisticsNeeds = [
  {
    number: "01",
    title: "Route and dispatch volatility",
    body: "Late changes, missed handoffs and driver communication gaps create delays you can see only after they impact service.",
  },
  {
    number: "02",
    title: "Fleet and crew visibility gaps",
    body: "Invoices, jobs, duty changes and vehicle availability sit in different systems, so planners are always chasing the latest version.",
  },
  {
    number: "03",
    title: "Fragmented customer comms",
    body: "Reschedule requests, exceptions and delivery promises arrive in channels the teams cannot reconcile fast enough.",
  },
  {
    number: "04",
    title: "Manual exception handling",
    body: "Every exception is a spreadsheet and a call, which turns a small disruption into a high-cost service failure.",
  },
  {
    number: "05",
    title: "Capacity planning by intuition",
    body: "Demand changes, seasonal peaks and service promises are hard to predict without a live operating picture.",
  },
  {
    number: "06",
    title: "Low margin for service failure",
    body: "One missed route or delayed handoff is enough to erode margin, reputation and repeat business.",
  },
];

const adviceColumns = [
  {
    title: "AI consultancy",
    body: "Half the work is judgement: diagnose the operation, map where service breaks and decide what should be automated for real throughput gain.",
  },
  {
    title: "Software engineering",
    body: "A quarter is build. OrbitOps is a software development company, so our engineers ship the production systems your planners and crews need.",
  },
  {
    title: "Two platforms",
    body: "A quarter is reuse. AOS and Deal Pipeline help cut delivery time when they fit your operating model without forcing a new licence stack.",
  },
];

const platformCards = [
  {
    title: "Autonomous Operation System",
    body: "Rules you write once, executed every day to move approvals, exceptions, handoffs and follow-up across operations without another human queue.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Commercial pipeline discipline for route, contract and growth planning where a missed forecast can distort the whole business.",
    href: "/platform/deal-pipeline-solution",
    cta: "See how it works",
  },
  {
    title: "System Integration",
    body: "Your TMS, WMS, telematics, CRM and finance tools stitched into one dependable data layer with reconciliation you can inspect.",
    href: "/solutions/system-integration",
    cta: "Discover integration",
  },
];

const operationsBullets = [
  "Shift-to-shift continuity with traceable job ownership and handoff notes",
  "Exception handling routes that escalate to the right team before the customer feels the break",
  "Live operational data aligned with dispatch, route, warehouse and service records",
  "Governance-ready audit trails for service decisions, changes and approvals",
  "Implementation that starts with a live operating problem rather than a software demo",
];

function LogisticsTravelHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#eef5ff]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Logistics &amp; Travel
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and validated software delivery for logistics and
            travel teams under service pressure.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            From route exceptions to warehouse handoffs, customer promises and
            shifting service windows, we help you automate the work that breaks
            when the operation is moving fast and the margin is thin.
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
            src="/images/industry/logisticsandTravel/Group 157.png"
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

function LogisticsTravelLeadersSection() {
  return (
    <section className="bg-[#f6faff] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#f9fbff] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-75 bg-[#dce9ff]">
            <Image
              src="/images/industry/logisticsandTravel/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top-left"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What logistics leaders
              <br />
              raise with us.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most service loss happens in the gap between two teams, two
              systems or two shifts: a route change that never reached the
              driver, a handoff that never logged, or a customer promise that
              still depends on a live call.
            </p>
          </div>
        </div>

        <div className="grid border border-[#d7e4fb] bg-[#f9fbff] sm:grid-cols-2 lg:grid-cols-3">
          {logisticsNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-40 border-b border-r border-[#d7e4fb] p-6 last:border-r-0"
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
            show up when they save you time, margin and service resilience.
          </p>
        </div>
        <div className="mt-8 flex h-2 overflow-hidden bg-zinc-100">
          <span className="w-1/2 bg-[#bfd7ff]" />
          <span className="w-1/4 bg-[#cfe3ff]" />
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
              className="border-l border-[#bfd7ff] py-1 pl-6"
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
    <section className="bg-[#f6faff] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          What we actually deliver in logistics &amp; travel.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          From shipment visibility to service recovery, our work is designed to
          keep the operation moving when time windows are tight and customers
          expect real-time updates. The same team can advise, build, integrate
          and support production delivery end-to-end.
        </p>
        <LogisticsTravelDeliveryTabs />
      </div>
    </section>
  );
}

function ControlSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
            Validation and governance,
            <br />
            agreed before we build.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            We work with operations, IT and commercial stakeholders from the
            first workshop to define the service decision boundaries, risk
            controls and evidence each team needs before a workflow ships.
          </p>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            {operationsBullets.map((item) => (
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
          src="/images/industry/logisticsandTravel/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function LogisticsTravelPage() {
  return (
    <main className="flex-1 bg-white">
      <LogisticsTravelHero />
      <TrustedBy />
      <LogisticsTravelLeadersSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <ControlSection />
      <Integrations />
      <Testimonial
        quote="Our dispatch team used to spend the first hour of the day reconciling route changes by phone. Now the exceptions are already triaged and the customer update is automatic."
        name="Kashif Rahman"
        role="Regional logistics operations lead"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#eef5ff]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
