import Image from "next/image";
import TrustedBy from "@/components/home/TrustedBy";
import Integrations from "@/components/platform/Integrations";
import Intelligence from "@/components/home/Intelligence";
import CaseStudies from "@/components/home/CaseStudies";
import CtaFooter from "@/components/home/CtaFooter";
import Testimonial from "@/components/solutions/Testimonial";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  tone?: string;
  cards?: Array<{
    src: string;
    alt: string;
    className?: string;
  }>;
};

type FeatureCard = {
  title: string;
  description: string;
};

function DetailHero({
  eyebrow,
  title,
  subtitle,
  body,
  image,
  tone = "bg-[#eef6ff]",
  cards,
}: HeroProps) {
  return (
    <section
      className={`relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden ${tone}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-linear-to-r from-white from-40% via-white/85 via-70% to-white/0" />

      {cards ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] items-center justify-center gap-5 pr-12 lg:flex">
          {cards.map((card, index) => (
            <div
              key={card.src}
              className={`relative overflow-hidden rounded-lg shadow-[0_18px_48px_rgba(15,23,42,0.16)] ring-1 ring-white/70 ${
                index === 1 ? "mt-10" : ""
              } ${card.className ?? ""}`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-6xl items-center px-6 py-16 lg:px-8">
        <div className="max-w-[560px]">
          <p className="text-xs font-semibold text-[#0f2142]/70">{eyebrow}</p>
          <h1 className="mt-4 max-w-xl font-heading text-[2.05rem] font-medium leading-[1.12] tracking-normal text-zinc-950 sm:text-[2.45rem]">
            {title}
          </h1>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#0f2142]">
            {subtitle}
          </p>
          <p className="mt-4 max-w-[500px] text-xs leading-5 text-[#0f2142]/72">
            {body}
          </p>
          <div className="mt-7">
            <a
              href="/demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tabs({ items }: { items: string[] }) {
  return (
    <div className="border-y border-black/[.06] bg-white">
      <div className="mx-auto flex max-w-6xl gap-10 overflow-x-auto px-6 py-5 lg:px-8">
        {items.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`whitespace-nowrap text-xs font-semibold ${
              index === 0 ? "text-zinc-950" : "text-zinc-400"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function FeatureBand({
  title,
  features,
}: {
  title: string;
  features: FeatureCard[];
}) {
  return (
    <section className="bg-[#edf7ff] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.5rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.8rem]">
          {title}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="mb-3 flex h-5 w-5 items-center justify-center rounded border border-zinc-300 text-[9px] text-zinc-500">
                +
              </div>
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutonomousCommandSection() {
  return (
    <section className="bg-[#f5f9ff] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-black/[.08] bg-white">
          <div className="grid gap-8 p-7 lg:grid-cols-[0.86fr_0.92fr_0.9fr]">
            <div>
              <h2 className="font-heading text-[1.55rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[1.8rem]">
                One system to plan,
                <br />
                execute & improve
                <br />
                the work.
              </h2>
              <div className="relative mt-6 aspect-[1.55/1] overflow-hidden rounded-lg">
                <Image
                  src="/images/platform/autonumus/Rectangle 23.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <ul className="space-y-4 self-center text-xs leading-5 text-zinc-700">
              {[
                "Drag-and-drop workflow designer built for operators",
                "Native connectors to your CRM, ERP, and comms tools",
                "Real-time status view for every in-flight process",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative min-h-[310px] overflow-hidden rounded-lg">
              <Image
                src="/images/platform/autonumus/Rectangle 23 (1).png"
                alt=""
                fill
                sizes="(min-width: 1024px) 330px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="border-t border-black/[.06] px-7 pb-7 pt-6">
            <h3 className="font-heading text-[1.55rem] font-medium leading-tight text-zinc-900">
              Every workflow, one place to run it from.
            </h3>
            <p className="mt-3 max-w-4xl text-xs leading-5 text-zinc-600">
              Design any operation onboarding, procurement, dispatch, reporting
              as a living workflow. Assign steps to people, systems, or AI
              agents and watch the whole thing execute end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutonomousMockSection({
  title,
  body,
  bullets,
  image,
}: {
  title: string;
  body: string;
  bullets: string[];
  image: string;
}) {
  return (
    <section className="bg-[#f5f9ff] py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-xs leading-5 text-[#0f2142]/72">
            {body}
          </p>
          <div className="mt-8 max-w-lg space-y-4">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm ring-1 ring-black/[.04]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-500">
                  +
                </span>
                {bullet}
              </div>
            ))}
          </div>
        </div>

        <div className="ml-auto w-full max-w-[500px] overflow-hidden rounded-lg bg-[#93eaff] p-8">
          <Image
            src={image}
            alt=""
            width={700}
            height={540}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function AutonomousInsightSection() {
  return (
    <section className="bg-[#f5f9ff] py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            See what&apos;s working.
            <br />
            Fix what isn&apos;t.
          </h2>
          <p className="mt-4 max-w-md text-xs leading-5 text-[#0f2142]/72">
            Live dashboards for every process, with anomaly detection that flags
            issues before they become incidents. Improvement becomes a feedback
            loop, not a quarterly review.
          </p>
          <a
            href="/demo"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-900"
          >
            <span aria-hidden>+</span> Learn more
          </a>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            <li>Process KPIs auto-generated from your workflows</li>
            <li>Alerts routed to Slack, Teams, or on-call</li>
            <li>One-click experiments to test new process variants</li>
          </ul>
          <div className="mt-8 flex items-center gap-4 border-t border-black/[.08] pt-5">
            <span className="h-9 w-12 rounded-sm bg-zinc-300" />
            <div>
              <p className="text-xs font-semibold text-zinc-900">
                See how it works
              </p>
              <p className="text-[11px] text-zinc-500">Tutorial</p>
            </div>
          </div>
        </div>

        <div className="ml-auto w-full max-w-[500px] overflow-hidden rounded-lg bg-[#93eaff] p-8">
          <Image
            src="/images/platform/autonumus/Group 110 (1).png"
            alt=""
            width={700}
            height={540}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function DealEnrichmentSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-black/[.08] bg-white p-7">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.9fr_0.62fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg">
              <Image
                src="/images/platform/dealpipeline/Rectangle 23.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="self-center">
              <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
                Every deal, always
                <br />
                up to date, always
                <br />
                progressing.
              </h2>
              <ul className="mt-6 space-y-4 text-xs leading-5 text-zinc-700">
                {[
                  "Auto-logged activity from Gmail, Outlook, and Zoom",
                  "Buyer intent and firmographics refreshed daily",
                  "No more update your CRM Slack messages",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-lg">
              <Image
                src="/images/platform/dealpipeline/Rectangle 23 (1).png"
                alt=""
                fill
                sizes="(min-width: 1024px) 260px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-7 border-t border-black/[.06] pt-6">
            <h3 className="font-heading text-[1.55rem] font-medium leading-tight text-zinc-900">
              Deals that update themselves.
            </h3>
            <p className="mt-3 max-w-4xl text-xs leading-5 text-zinc-600">
              Design any operation onboarding, procurement, dispatch, reporting
              as a living workflow. Assign steps to people, systems, or AI
              agents and watch the whole thing execute end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DealCoachSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          A private coach sitting next to every rep.
        </h2>
        <div className="mt-8 max-h-[280px] overflow-hidden rounded-lg bg-[#f8d9d0]">
          <Image
            src="/images/platform/dashboard-overview.png"
            alt="Pipeline dashboard"
            width={1295}
            height={694}
            className="h-auto w-full"
          />
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <p className="font-heading text-lg font-medium leading-snug text-zinc-900">
            Each morning, reps get a ranked list of the deals most likely to
            move today, with the exact next step and a first-draft email or
            call plan.
          </p>
          <ul className="space-y-3 text-xs leading-5 text-zinc-600">
            <li>Deal-level next-best-action recommendations</li>
            <li>Auto-drafted follow-ups you can send in one click</li>
            <li>Risk alerts when a champion goes quiet</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function DealForecastSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            A forecast leadership
            <br />
            actually believes.
          </h2>
          <p className="mt-4 max-w-md text-xs leading-5 text-[#0f2142]/72">
            Roll-ups grounded in behaviour, not vibes. See which deals are
            real, which are stalled, and where to reallocate coverage before
            quarter close.
          </p>
          <a
            href="/demo"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-900"
          >
            <span aria-hidden>+</span> Learn more
          </a>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            <li>AI-scored commit, best-case, and pipeline categories</li>
            <li>Slippage and slip-risk views for every rep and team</li>
            <li>Board-ready reporting exported in one click</li>
          </ul>
          <div className="mt-8 flex items-center gap-4 border-t border-black/[.08] pt-5">
            <span className="h-9 w-12 rounded-sm bg-zinc-300" />
            <div>
              <p className="text-xs font-semibold text-zinc-900">
                See how it works
              </p>
              <p className="text-[11px] text-zinc-500">Tutorial</p>
            </div>
          </div>
        </div>

        <div className="ml-auto w-full max-w-[500px] overflow-hidden rounded-lg">
          <Image
            src="/images/platform/dealpipeline/Blur Red Bg.png"
            alt=""
            width={700}
            height={520}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function BespokeOutcomeSection() {
  return (
    <section className="bg-[#f3f0eb] py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            We start with the outcome,
            <br />
            not the feature list.
          </h2>
          <p className="mt-4 max-w-md text-xs leading-5 text-zinc-600">
            Two weeks of structured discovery to pressure-test the idea, map
            users, and land on a build plan that ships value in the first month
            not the twelfth.
          </p>
          <a
            href="/demo"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-900"
          >
            <span aria-hidden>+</span> Learn more
          </a>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            <li>User research and journey mapping</li>
            <li>Clickable prototype for stakeholders</li>
            <li>Fixed-price scope for the first release</li>
          </ul>
        </div>
        <div className="ml-auto w-full max-w-[520px]">
          <Image
            src="/images/platform/bespokesoftware/Container.png"
            alt=""
            width={760}
            height={430}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function BespokeTeamSection() {
  return (
    <section className="bg-[#f3f0eb] py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            Small teams. Senior
            <br />
            engineers. Weekly demos.
          </h2>
          <p className="mt-4 max-w-md text-xs leading-5 text-zinc-600">
            You get product, design, and engineering leadership on every
            project: no offshore handoffs, no junior teams learning on your
            budget.
          </p>
          <ul className="mt-6 space-y-3 text-xs leading-5 text-zinc-600">
            <li>Two-week sprints with live demos</li>
            <li>Shared Slack channel with the build team</li>
            <li>Fully documented handover on day one</li>
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-[0.9fr_0.65fr]">
          <div className="relative aspect-[0.82/1] overflow-hidden rounded-lg">
            <Image
              src="/images/platform/bespokesoftware/Background.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 310px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-lg bg-[#bceeff]">
              <Image
                src="/images/platform/bespokesoftware/Container (1).png"
                alt=""
                fill
                sizes="(min-width: 1024px) 220px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-lg">
              <Image
                src="/images/platform/bespokesoftware/Container (2).png"
                alt=""
                fill
                sizes="(min-width: 1024px) 220px, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BespokeStackSection() {
  return (
    <section className="bg-[#f3f0eb] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-2xl font-heading text-[1.7rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
          Built on the stack your future team will thank you for.
        </h2>
        <p className="mt-4 max-w-2xl text-xs leading-5 text-zinc-600">
          TypeScript, Postgres, edge-ready hosting, and battle-tested UI kits.
          Fast to build, easy to hire against, and calm to operate.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            {
              image: "/images/platform/bespokesoftware/Rectangle 15.png",
              caption: "TypeScript end-to-end for type-safe delivery",
            },
            {
              image: "/images/platform/bespokesoftware/Border.png",
              caption: "Deployed on your cloud accounts",
            },
            {
              image: "/images/platform/bespokesoftware/Border (1).png",
              caption: "Automated tests and CI included",
            },
          ].map((item) => (
            <div key={item.caption}>
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-zinc-500">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutonomousOperationPage() {
  return (
    <>
      <DetailHero
        eyebrow="Platform - Autonomous Operation System"
        title="The operating system that runs your operations."
        subtitle="Fewer meetings. Fewer spreadsheets. More outcomes."
        body="OrbitOps AOS unifies your workflows, data, and AI agents into one command layer so the routine parts of your business run themselves and your team spends time on the decisions that actually matter."
        image="/images/platform/autonumus/assortment-geometric-square-shapes 1.png"
        tone="bg-[#eef8ff]"
      />
      <TrustedBy />
      <Tabs items={["Command Layer", "AI Agent", "Insight", "Features"]} />
      <AutonomousCommandSection />
      <AutonomousMockSection
        title="Agents that do the work, not just talk about it."
        body="Deploy specialised AI agents that read your data, take actions in your tools, and hand off to humans only when judgement is required."
        bullets={[
          "Pre-trained agents for sales ops, finance, and support",
          "Guardrails, approvals, and full audit trail on every action",
          "Bring your own model: GPT, Claude, or private LLMs",
        ]}
        image="/images/platform/autonumus/Group 110.png"
      />
      <AutonomousInsightSection />
      <FeatureBand
        title="Everything the operating layer of your business needs."
        features={[
          {
            title: "Agent runtime",
            description:
              "Run and observe long-lived AI agents alongside human tasks in a single queue.",
          },
          {
            title: "Workflow engine",
            description:
              "Visual, versioned workflows with branching, retries, and human approvals baked in.",
          },
          {
            title: "Ops analytics",
            description:
              "Cycle time, throughput, cost per outcome measured automatically, not manually.",
          },
        ]}
      />
      <Integrations />
      <Intelligence />
      <CaseStudies />
      <CtaFooter />
    </>
  );
}

export function DealPipelinePage() {
  return (
    <>
      <DetailHero
        eyebrow="Platform - Deal Pipeline Solution"
        title="A pipeline that moves deals forward on its own."
        subtitle="Stop chasing reps for updates. Start closing."
        body="OrbitOps Pipeline is a living deal system: it enriches, scores, and nudges every opportunity, so your team focuses on the calls that actually change the forecast."
        image="/images/platform/dealpipeline/3d-rendering-transparent-triangle 1.png"
        tone="bg-[#fff2ef]"
      />
      <TrustedBy />
      <Tabs
        items={[
          "Autonomous enrichment",
          "AI deal coach",
          "Forecast",
          "Features",
          "Integrations",
        ]}
      />
      <DealEnrichmentSection />
      <DealCoachSection />
      <DealForecastSection />
      <FeatureBand
        title="The pipeline layer your CRM was supposed to be."
        features={[
          {
            title: "Signal engine",
            description:
              "Turns noisy activity data into clear deal signals - no more manual notes.",
          },
          {
            title: "Forecast AI",
            description:
              "Probability-weighted forecasts that update as buyers move, not just as reps hope.",
          },
          {
            title: "Rep coaching",
            description:
              "Deal walk-throughs and objection prep generated from your real call transcripts.",
          },
        ]}
      />
      <Integrations />
      <Intelligence />
      <CaseStudies />
      <CtaFooter />
    </>
  );
}

export function BespokeSoftwarePage() {
  return (
    <>
      <DetailHero
        eyebrow="Solutions - Bespoke Software"
        title="Software shaped around the way you actually work."
        subtitle="Off-the-shelf tools bent your business enough. Time to build one that fits."
        body="We design and ship production-grade custom platforms web apps, internal tools, portals, and full products with a small senior team and a delivery model that rewards outcomes, not tickets."
        image="/images/platform/bespokesoftware/back.png"
        tone="bg-[#f1eee8]"
        cards={[
          {
            src: "/images/platform/bespokesoftware/Rectangle 14.png",
            alt: "Analytics dashboard on a laptop",
            className: "h-[300px] w-[180px]",
          },
          {
            src: "/images/platform/bespokesoftware/Rectangle 15.png",
            alt: "Product team collaborating",
            className: "h-[300px] w-[180px]",
          },
        ]}
      />
      <TrustedBy />
      <section className="bg-[#f3f0eb] py-14 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-[1.75rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2rem]">
            From napkin sketch to shipping product,
            <br />
            one team the whole way.
          </h2>
        </div>
      </section>
      <BespokeOutcomeSection />
      <BespokeTeamSection />
      <BespokeStackSection />
      <FeatureBand
        title="What we build best."
        features={[
          {
            title: "Internal tools",
            description:
              "Admin panels and ops consoles that replace fragile spreadsheets.",
          },
          {
            title: "Customer portals",
            description:
              "Branded self-serve areas your customers actually want to log into.",
          },
          {
            title: "AI-native products",
            description:
              "Ship copilots and agents inside your product with production-grade infra.",
          },
        ]}
      />
      <Integrations />
      <Testimonial
        quote="Before OrbitOps, our team was chasing updates across three different systems just to know where a deal stood. Now it's all in one place and we've cut the time spent on manual admin dramatically."
        name="James Whitfield"
        role="Operations Director, Harlow Logistics Group"
        avatar="/images/solution/avatar-james.png"
        tone="bg-[#f2f0ee]"
      />
      <CaseStudies />
      <CtaFooter />
    </>
  );
}
