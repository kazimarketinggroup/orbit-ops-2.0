import Image from "next/image";

export default function SolutionsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden bg-[#eaf1fb]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/solution/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-linear-to-r from-white/92 via-white/70 to-white/25" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="text-xs font-semibold text-zinc-500">Solution</p>
            <h1 className="mt-3 font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.6rem]">
              For Teams Who Need
              <br />
              Operations That Keep Up
              <br />
              with the Business
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600">
              OrbitOps advises on and builds the systems to run all of it from one place, shaped around how you actually operate, not a generic template.
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

          <div className="flex items-start justify-end gap-4">
            <div className="relative aspect-9/16 w-[46%] overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
              <Image
                src="/images/solution/hero-photo-cafe.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-12 aspect-9/16 w-[46%] overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
              <Image
                src="/images/solution/hero-photo-workspace.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
