import Image from "next/image";

export default function Integrations() {
  return (
    <section id="integrations" className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-[#09143a]">
          <Image
            src="/images/platform/integrations-cubes.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />

          <div className="relative mx-auto max-w-[560px] px-6 py-24 text-center">
            <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-white sm:text-[2.35rem]">
              Connects With Your Stack
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/72">
              OrbitOps sits alongside the systems you already use, without
              replacing them. CRM, warehouse software, comms tools, finance. It
              connects in and starts working from day one, with no lengthy
              migrations or downtime.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Every integration pulls data in, pushes automation out, and keeps
              your tools talking to each other in real time.
            </p>
            <div className="mt-8">
              <a
                href="/demo"
                className="inline-flex h-10 items-center justify-center rounded-sm px-5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                <span className="mr-2" aria-hidden>
                  +
                </span>
                See all integrations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
