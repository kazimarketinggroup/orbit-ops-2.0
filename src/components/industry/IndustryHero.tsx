import Image from "next/image";

export default function IndustryHero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center bg-linear-to-b from-[#f4f0fb] to-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <p className="text-xs font-semibold text-zinc-500">Industries</p>
            <h1 className="mt-3 font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.6rem]">
              Sector-shaped
              <br />
              operations, built around
              <br />
              how you already run.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600">
              Multi-site teams, regulated processes and stacks of systems that were never designed to talk. OrbitOps is the consultancy that connects head office to the front line advising and building so work moves without being chased.
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

          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/images/industry/hero-colleagues.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
