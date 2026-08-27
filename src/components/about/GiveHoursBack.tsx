import Image from "next/image";

const solutions = [
  { icon: "</>", label: "Bespoke Software Development" },
  { icon: "[]", label: "Warehouse Management System" },
  { icon: "<>", label: "Workflow Automation" },
  { icon: "()", label: "System Integration" },
  { icon: "**", label: "AI Implementation" },
  { icon: "o", label: "Consulting" },
];

export default function GiveHoursBack() {
  return (
    <section id="solutions" className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Give your operation back its hours.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
          OrbitOps designs, builds and ships the software that runs the bespoke
          systems, automation and AI, delivered by one team from diagnosis to
          production.
        </p>

        <div className="mt-8 grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-3">
            {solutions.map((item, i) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-4 rounded-lg border border-black/[.08] px-5 py-4 transition-colors ${
                  i === 0
                    ? "bg-[#333333] text-white"
                    : "bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold ${
                    i === 0 ? "bg-white/10" : "bg-zinc-50"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-semibold">{item.label}</span>
                <span className="ml-auto text-lg opacity-55" aria-hidden>
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-lg bg-[#f3f4f6] p-7">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/images/about/dashboard-activity-mock.png"
                alt="OrbitOps activity feed"
                width={640}
                height={340}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
