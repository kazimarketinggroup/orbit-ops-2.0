const tiers = [
  {
    icon: "launch",
    name: "Launch",
    description: "For a first automated process or a single bespoke build.",
    price: "From £6,000",
    priceNote: "ONE-OFF PROJECT FEE",
    features: [
      "One workflow or system delivered end to end",
      "Discovery workshop and process mapping",
      "Bespoke build on your existing stack",
      "Two integrations included",
      "30 days of post-launch support",
    ],
    cta: "Scope a build",
    featured: false,
  },
  {
    icon: "operate",
    name: "Operate",
    description:
      "For teams running day-to-day operations on the Autonomous Operation System.",
    price: "From £2,400",
    priceNote: "PER MONTH, 12-MONTH TERM",
    features: [
      "Autonomous Operation System licence",
      "Unlimited automated workflows",
      "Deal Pipeline Solution included",
      "Live operations dashboards and alerting",
      "Named operations engineer",
      "Quarterly optimisation reviews",
    ],
    cta: "Book a consultation",
    featured: true,
  },
  {
    icon: "enterprise",
    name: "Enterprise",
    description: "For multi-site groups and portfolios with governance requirements.",
    price: "Bespoke",
    priceNote: "PRICED TO SCOPE",
    features: [
      "Everything in Operate",
      "Multi-entity and portfolio rollouts",
      "Private deployment & data residency options",
      "SSO, audit trails & custom retention policies",
      "Dedicated delivery pod",
      "Contracted response times",
    ],
    cta: "Talk to our team",
    featured: false,
  },
];

const iconPaths: Record<string, string> = {
  launch: "M11 2L4 11h5l-1 7 7-9h-5z",
  operate: "M10 2.5L17 6.5v7L10 17.5 3 13.5v-7zM10 8a2 2 0 100 4 2 2 0 000-4z",
  enterprise: "M4 17V4h8v13M12 9h4v8M6.5 7h3M6.5 10h3M6.5 13h3",
};

function TierIcon({ name }: { name: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#eef3fb]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/pricing/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-white/72" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-140 text-center">
          <h1 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.6rem]">
            Pay for the hours you get back.
          </h1>
          <p className="mx-auto mt-5 max-w-125 text-sm leading-6 text-[#0f2142]/75">
            Three ways to work with OrbitOps: a fixed-scope build, a running
            operations platform, or a full enterprise partnership. Every
            engagement starts with a discovery call and a written number.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-lg p-7 ${
                tier.featured
                  ? "bg-linear-to-b from-[#d6e8fb] to-[#eaf3fd] shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] lg:-mt-4 lg:pb-10 lg:pt-9"
                  : "border border-black/[.07] bg-white/85 backdrop-blur-sm"
              }`}
            >
              {tier.featured ? (
                <span className="absolute right-7 top-7 rounded-sm bg-[#0b1220] px-2.5 py-1 text-[9px] font-semibold tracking-wide text-white">
                  MOST CHOSEN
                </span>
              ) : null}

              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  tier.featured
                    ? "bg-white text-[#152250]"
                    : "bg-[#eef2fb] text-[#152250]"
                }`}
              >
                <TierIcon name={tier.icon} />
              </div>

              <h2 className="mt-5 font-heading text-xl font-medium text-zinc-900">
                {tier.name}
              </h2>
              <p className="mt-2 min-h-10 text-xs leading-5 text-zinc-500">
                {tier.description}
              </p>

              <p className="mt-5 font-heading text-[1.75rem] font-medium leading-none text-zinc-900">
                {tier.price}
              </p>
              <p className="mt-2 text-[9px] font-semibold tracking-wide text-zinc-500">
                {tier.priceNote}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-black/[.07] pt-5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-[#152250]"
                      aria-hidden
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    <span className="text-xs leading-5 text-zinc-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a
                  href="/demo"
                  className={`inline-flex h-10 items-center justify-center gap-2 rounded-sm px-5 text-xs font-semibold transition-colors ${
                    tier.featured
                      ? "bg-[#152250] text-white hover:bg-[#1e2f6b]"
                      : "border border-black/[.12] bg-white text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {tier.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
