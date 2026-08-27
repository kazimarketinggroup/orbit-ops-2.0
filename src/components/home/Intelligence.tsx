import Image from "next/image";

const floatingCards = [
  {
    name: "Warehouse Stock Alert",
    detail: "Updated 12 min ago",
    avatar: "/images/home/avatar-1-v20260804.png",
    accent: "bg-amber-100 text-amber-700",
    position: "left-0 top-10 lg:left-4",
    width: "w-[220px] lg:w-[230px]",
  },
  {
    name: "Client Contract",
    detail: "Renewed on its day",
    avatar: "/images/home/avatar-2-v20260804.png",
    accent: "bg-sky-100 text-sky-700",
    position: "right-0 top-20 lg:right-4",
    width: "w-[240px] lg:w-[250px]",
  },
  {
    name: "Automation Log",
    detail: "128 tasks completed today",
    avatar: "/images/home/avatar-3-v20260804.png",
    accent: "bg-emerald-100 text-emerald-700",
    position: "bottom-4 left-8 lg:left-10",
    width: "w-[220px] lg:w-[240px]",
  },
];

export default function Intelligence() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-14">
      <video
        className="absolute inset-x-0 bottom-0 h-[82%] w-full object-cover object-bottom opacity-80"
        src="/images/home/intelligence-bg-v20260804.mov"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.72),rgba(255,255,255,0.9))]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-[580px] text-center">
          <h2 className="font-heading text-[2rem] font-medium leading-[1.14] tracking-normal text-[#0f2142] sm:text-[2.35rem]">
            The System That Knows
            <br />
            How Your Business Runs
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-xs leading-5 text-[#0f2142]/75">
            OrbitOps Intelligence sits underneath every workflow watching
            patterns, flagging risk, and handling the decisions that don&apos;t
            need a human in the loop. The longer it runs, the sharper it gets.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#consultation"
              className="inline-flex h-9 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
            >
              Book a Consultation
            </a>
            <a
              href="#platform"
              className="inline-flex h-9 items-center justify-center rounded-sm border border-[#0b1220] bg-white/75 px-5 text-xs font-semibold text-[#0b1220] transition-colors hover:bg-white"
            >
              See the Platform
            </a>
          </div>
        </div>

        <div className="relative mt-8 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]">
          {floatingCards.map((card, index) => (
            <div
              key={card.name}
              className={`absolute ${card.position} ${card.width} flex items-center gap-3 rounded-lg bg-white/72 px-3.5 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.12)] ring-1 ring-black/[.04] backdrop-blur-md ${
                index === 0 ? "z-20" : index === 1 ? "z-30" : "z-10"
              }`}
            >
              <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={card.avatar}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 text-left">
                <p className="truncate text-[11px] font-semibold text-zinc-900">
                  {card.name}
                </p>
              </div>
              <p className="ml-auto text-[9px] text-zinc-400">{card.detail}</p>
            </div>
          ))}

          <div className="absolute left-1/2 top-[170px] flex w-[92%] max-w-[470px] -translate-x-1/2 items-center rounded-lg bg-white/78 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-black/[.04] backdrop-blur-md">
            <p className="text-sm text-zinc-700">
              Which orders are at risk this week?
            </p>
            <span className="ml-auto h-2 w-px animate-pulse bg-zinc-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
