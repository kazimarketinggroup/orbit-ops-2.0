import Image from "next/image";

export default function MissionStatement() {
  return (
    <section id="mission" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Autonomous operations, on your terms.
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative aspect-[1.58/1] overflow-hidden rounded-lg">
            <Image
              src="/images/about/hero-abstract-bg.png"
              alt="OrbitOps founder"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-lg bg-[#f3f4f6] p-8">
            <p className="text-sm leading-6 text-zinc-600">
              Most software is designed to be used. OrbitOps designs software
              designed to run quietly, continuously, and with as little
              human intervention as the work allows.
            </p>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              We combine a bespoke software studio with an autonomous
              operations platform. That means we can build exactly what your
              business needs, on top of infrastructure that already
              understands how operations work.
            </p>
            <div className="mt-8">
              <a
                href="#report"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
              >
                Read the report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
