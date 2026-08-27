import Image from "next/image";

const points = [
  {
    label: "Plan every workflow before it runs.",
    image: "/images/solution/proof-plan.png",
    body: "Map out processes, deal stages and handoffs before they hit the floor so every team knows what happens next, without waiting on a status update.",
  },
  {
    label: "Power operations with automation and AI.",
    image: "/images/solution/proof-automate.png",
    body: "Let the Autonomous Operation System carry the manual, repetitive work data entry, task routing, follow-ups so your team's time goes toward decisions, not admin.",
  },
  {
    label: "Prove the impact with real-time reporting.",
    image: "/images/solution/proof-report.png",
    body: "See exactly where time, cost and deals are moving and where they're stuck with live visibility across every connected system, not a monthly export.",
  },
];

export default function ProofPoints() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-2xl font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Operations leaders rely on OrbitOps to plan, power, and prove the
          value of every process.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.label}>
              <div className="overflow-hidden rounded-lg bg-[#0b1220]">
                <p className="px-5 py-4 text-xs font-semibold leading-5 text-white">
                  {point.label}
                </p>
                <div className="relative aspect-4/3">
                  <Image
                    src={point.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-zinc-500">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
