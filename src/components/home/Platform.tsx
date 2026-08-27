import Image from "next/image";

const cards = [
  {
    icon: "OS",
    title: "Autonomous Operation System",
    description:
      "The engine behind your operations. Monitors, decides and acts, automating routine operational work in real time so your team only steps in when it matters.",
    image: "/images/home/Background+Border+Shadow (1).png",
    href: "#autonomous-operations",
  },
  {
    icon: "DP",
    title: "Deal Pipeline Solution",
    description:
      "Built for teams that live in pipelines. Track deals, surface risk, and forecast outcomes with a system that learns from every stage.",
    image: "/images/home/Background+Border+Shadow.png",
    href: "#deal-pipeline",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
              Two Platforms. Total Visibility.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Two systems we design and manage for you, so your team can focus on the work that actually needs a person.
            </p>
          </div>
          <a
            href="#platform"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
          >
            Explore the platform
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="rounded-lg bg-zinc-50 p-8">
              <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-md bg-white text-[10px] font-bold text-zinc-600 shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-950">
                {card.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                {card.description}
              </p>

              <div className="mt-7 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={640}
                  height={280}
                  className="h-auto w-full"
                />
              </div>

              <a
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors hover:text-[#1a2436]"
              >
                Explore <span aria-hidden>+</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
