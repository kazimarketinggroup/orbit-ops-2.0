import Image from "next/image";

const products = [
  {
    id: "autonomous-operation-system",
    icon: "grid",
    title: "Autonomous Operation System",
    description:
      "The engine behind your operations. AOS monitors, decides and acts, automating routine operational work in real time so your team only steps in when it matters.",
    features: [
      {
        icon: "monitor",
        title: "Monitor",
        description:
          "Runs time signals across every operational surface - stock, staffing, orders, service.",
      },
      {
        icon: "decide",
        title: "Decide",
        description:
          "Rules and models decide the next action based on the state of your business, not a schedule.",
      },
      {
        icon: "act",
        title: "Act",
        description:
          "Trigger workflows, updates, alerts and integrations without a human in the loop.",
      },
      {
        icon: "escalate",
        title: "Escalate",
        description:
          "Your team is only pulled in when human judgement is genuinely needed.",
      },
    ],
    image: "/images/platform/activity-feed-mock.png",
    gradient: "/images/platform/gradient-teal-orange.png",
  },
  {
    id: "deal-pipeline-solution",
    icon: "flow",
    title: "Deal Pipeline Solution",
    description:
      "Built for teams that live in pipelines. Track deals, surface risk and forecast outcomes with a system that learns from every stage of your process from first contact to close.",
    features: [
      {
        icon: "track",
        title: "Track every stage",
        description:
          "A single pipeline view from first contact to close, with historical accuracy.",
      },
      {
        icon: "risk",
        title: "Surface risk",
        description:
          "Deals that are drifting get flagged before they slip not after.",
      },
      {
        icon: "forecast",
        title: "Forecast outcomes",
        description:
          "Learns from your pipeline's actual behaviour to produce forecasts you can trust.",
      },
    ],
    image: "/images/platform/pipeline-board-mock.png",
    gradient: "/images/platform/gradient-pink-purple.png",
  },
];

const iconPaths: Record<string, string> = {
  grid: "M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z",
  flow: "M4 5h5M4 10h9M4 15h5M15 7v6M13 10h4",
  monitor: "M2 10a8 8 0 0116 0 8 8 0 01-16 0zM10 7a3 3 0 100 6 3 3 0 000-6z",
  decide: "M10 2.5L17 6.5v7L10 17.5 3 13.5v-7zM10 8a2 2 0 100 4 2 2 0 000-4z",
  act: "M11 2L4 11h5l-1 7 7-9h-5z",
  escalate: "M10 3l7 13H3zM10 8v4M10 14h.01",
  track: "M3 15l4-5 3 3 6-8M13 5h4v4",
  risk: "M10 3l7 13H3zM10 8v4M10 14h.01",
  forecast: "M10 17a7 7 0 100-14 7 7 0 000 14zM10 6v4l3 2",
};

function FeatureIcon({ name, size = 14 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

export default function Products() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="space-y-20">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="grid items-stretch gap-10 lg:grid-cols-[0.98fr_0.82fr]"
            >
              <div>
                <div className="mb-5 text-zinc-900">
                  <FeatureIcon name={product.icon} size={20} />
                </div>
                <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
                  {product.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#0f2142]/72">
                  {product.description}
                </p>

                <div
                  className={`mt-5 grid gap-2.5 ${
                    product.features.length === 4
                      ? "sm:grid-cols-2"
                      : "max-w-md"
                  }`}
                >
                  {product.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-black/[.08] bg-white px-4 py-3.5"
                    >
                      <div className="mb-2 text-zinc-700">
                        <FeatureIcon name={feature.icon} />
                      </div>
                      <h3 className="font-heading text-[13px] font-semibold text-zinc-950">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-[1.45] text-zinc-500">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative ml-auto flex h-full w-full max-w-115 flex-col rounded-lg p-6">
                <Image
                  src={product.gradient}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="rounded-lg object-cover"
                />

                <div className="relative mt-auto w-full self-end overflow-hidden rounded-lg bg-white/72 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={640}
                    height={420}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
