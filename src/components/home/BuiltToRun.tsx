import Image from "next/image";

export default function BuiltToRun() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Built to Run,
            <br />
            Not Just Automate
          </h2>
          <div className="text-right">
            <div className="font-heading text-[3.25rem] font-medium leading-none text-zinc-950">
              10%
            </div>
            <p className="mt-1 text-sm font-semibold text-zinc-600">
              Increase in overall sales
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:h-[315px] lg:grid-cols-[1.3fr_1fr]">
          <div className="h-full rounded-lg bg-zinc-50 p-5">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/images/home/Group 41.png"
                alt="OrbitOps activity dashboard"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 700px, 100vw"
              />
            </div>
          </div>

          <div className="flex h-full flex-col justify-center rounded-lg bg-zinc-50 p-6 lg:p-7">
            <p className="text-sm leading-6 text-zinc-600">
              OrbitOps is an autonomous operations platform combined with a
              bespoke software studio. We design, build and integrate the
              systems that let businesses operate with less friction - from
              AI-powered deal pipelines to full workflow automation and
              custom-built software.
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Whether you&apos;re scaling a private equity portfolio or
              managing a security guarding workforce, OrbitOps gives you the
              infrastructure to move faster, decide smarter and grow without
              adding headcount.
            </p>
            <div className="mt-6">
              <a
                href="#consultation"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
