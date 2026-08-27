export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden bg-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/home/hero-video-v20260804.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-[2.25rem] font-medium leading-[1.15] tracking-normal text-zinc-950 sm:text-[2.7rem]">
           We Streamline Business Through Intelligent Systems
          </h1>

          <p className="mx-auto mt-6 max-w-105 text-sm leading-6 text-[#0f2142]">
            OrbitOps builds autonomous systems, bespoke software and AI-driven
            workflows that run your operations, so your team can focus on
            growth, not admin.
          </p>

          <div className="mt-8">
            <a
              href="/demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-[#152250] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1e2f6b]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
