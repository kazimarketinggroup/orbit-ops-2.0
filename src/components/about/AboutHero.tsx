import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506]">
      <Image
        src="/images/about/mission-portrait.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom opacity-95"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/15 to-black/40" />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        <h1 className="font-heading text-4xl font-medium leading-[1.12] tracking-normal text-white sm:text-[3.15rem]">
           We&apos;re the Team Behind 
          <br />
          Smarter Operations.
        </h1>
        <p className="mt-6 max-w-140 text-sm leading-6 text-white/68">
         OrbitOps was founded on a simple premise: modern businesses don&apos;t need more tools, they need a consultancy that understands operations. We advise on where automation and AI matter, then build the systems that make it real.
        </p>
        <div className="mt-9">
          <a
            href="/demo"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-white px-6 text-xs font-semibold text-[#0b0b0c] transition-colors hover:bg-zinc-200"
          >
           Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
