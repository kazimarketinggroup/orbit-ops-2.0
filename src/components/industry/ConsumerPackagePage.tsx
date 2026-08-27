import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";
import ConsumerPackageDeliveryTabs from "@/components/industry/ConsumerPackageDeliveryTabs";

const cpgNeeds = [
  {
    number: "01",
    title: "Forecasts nobody believes",
    body: "Statistical output gets overridden by commercial judgement every cycle, and neither side can prove who was right.",
  },
  {
    number: "02",
    title: "Trade spend visibility",
    body: "Promotional investment is committed months ahead with limited insight into what actually drove incremental volume.",
  },
  {
    number: "03",
    title: "Retailer data overload",
    body: "EPOS and portal data arrives in a dozen formats and gets reconciled by hand every week.",
  },
  {
    number: "04",
    title: "Supply volatility",
    body: "Ingredient and packaging lead times swing, but planning parameters were set in a calmer decade.",
  },
  {
    number: "05",
    title: "New product guesswork",
    body: "NPD forecasting relies on analogues chosen by opinion rather than by data.",
  },
  {
    number: "06",
    title: "Thin analytics capability",
    body: "One or two brilliant analysts hold the whole planning process in spreadsheets.",
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
    body: "Runs the repetitive planning and admin loops behind your S&OP cycle.",
    href: "/platform/autonomous-operation-system",
    cta: "Explore the platform",
  },
  {
    title: "Deal Pipeline Solution",
    body: "Keeps national account and foodservice pipelines honest ahead of the range review.",
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

const workflowBullets = [
  "Integrates with SAP, NetSuite, Anaplan and the planning tools you run",
  "Human override kept in the loop and measured, never removed",
  "Retailer data handled under your existing commercial agreements",
  "Models explainable enough for a category review",
  "Handover into your planning team, not permanent dependency",
];

function ConsumerPackageHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-[#fff3f0]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#0f2142]/70">
            Industry - Consumer Packaged Goods
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[1.85rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.2rem] lg:text-[2.45rem]">
            AI consulting and build for CPG teams under margin pressure.
          </h1>
          <p className="mt-5 max-w-lg text-xs leading-5 text-[#0f2142]/75">
            From demand planning to trade spend and retailer compliance, we help
            brands apply AI where it protects margin - working with the ERP,
            planning tools and retailer portals you already live in.
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
            src="/images/industry/consumerPackage/Group 157.png"
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

function OperatorSection() {
  return (
    <section className="bg-[#fff5f2] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#fff8f5] lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-[300px] bg-[#ffdcd4]">
            <Image
              src="/images/industry/consumerPackage/Group 77.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-left-top"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="font-heading text-[1.45rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.7rem]">
              What CPG operators
              <br />
              tell us.
            </h2>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-600">
              Most operational failures happen in the space between two
              systems, two shifts or two teams: a form that never reached
              finance, a check nobody logged, a site quietly doing it
              differently.
            </p>
          </div>
        </div>

        <div className="grid border border-[#ead9d4] bg-[#fff8f5] sm:grid-cols-2 lg:grid-cols-3">
          {cpgNeeds.map((item) => (
            <article
              key={item.number}
              className="min-h-[160px] border-b border-r border-[#ead9d4] p-6 last:border-r-0"
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
          <span className="w-1/2 bg-[#ffc982]" />
          <span className="w-1/4 bg-[#b9d8d8]" />
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
              className="border-l border-[#e0b7cd] py-1 pl-6"
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
    <section className="bg-[#fff5f2] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
          Give your operation back its hours.
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-zinc-600">
          OrbitOps designs, builds and ships the software that runs the work:
          bespoke systems, automation and AI, delivered by one team from
          diagnosis to production.
        </p>
        <ConsumerPackageDeliveryTabs />
      </div>
    </section>
  );
}

function CommercialWorkflowSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.75rem]">
            We work the way commercial teams work.
          </h2>
          <p className="mt-4 max-w-lg text-xs leading-5 text-zinc-600">
            Planning, sales and finance rarely agree on a number. Our
            engagements are designed to produce a shared, defensible one - with
            the governance to keep it that way through the S&amp;OP cycle.
          </p>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            {workflowBullets.map((item) => (
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
          src="/images/industry/consumerPackage/ChatGPT Image Jul 28, 2026, 03_54_11 PM 1.png"
          alt=""
          width={900}
          height={506}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default function ConsumerPackagePage() {
  return (
    <main className="flex-1 bg-white">
      <ConsumerPackageHero />
      <TrustedBy />
      <OperatorSection />
      <AdviceSection />
      <ReuseSection />
      <DeliverySection />
      <CommercialWorkflowSection />
      <Integrations />
      <Testimonial
        quote="Monday mornings used to be four hours of reconciling what actually happened last week. Now the exceptions are already on my screen with a name against each one, and I spend that time on the sites that need me."
        name="Henry Hussain"
        role="UK multi-site services group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#fff5f2]"
      />
      <CaseStudies />
      <CtaFooter />
    </main>
  );
}
