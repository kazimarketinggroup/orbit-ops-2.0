import Image from "next/image";

export default function CaseHero() {
  return (
    <section className="relative">
      <div className="flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center bg-[#152250] pb-56 pt-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-white sm:text-[2.6rem]">
            Real Systems. Real Results.
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/70">
            A selection of operational systems OrbitOps has designed, built and
            shipped.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-44 max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] lg:grid-cols-[1fr_0.92fr]">
          <div className="p-9">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <span className="h-2.5 w-2.5 rounded-full border border-zinc-300" />
              Northwind
            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-700">
              &ldquo;We were drowning in manual processes before OrbitOps came
              in. Within weeks they&apos;d automated our order tracking and
              given us a pipeline system that actually tells us where deals are
              stalling.
            </p>
            <p className="mt-4 text-sm leading-6 text-zinc-700">
              It&apos;s the first time our operations team has felt ahead of
              the work instead of behind it.&rdquo;
            </p>

            <div className="mt-7">
              <a
                href="/demo"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-[#152250] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1e2f6b]"
              >
                Read Story
              </a>
            </div>
          </div>

          <div className="relative min-h-70">
            <Image
              src="/images/casestudy/hero-video-card.png"
              alt="Northwind customer story"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
