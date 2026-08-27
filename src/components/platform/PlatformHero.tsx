import Image from "next/image";

export default function PlatformHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-end overflow-hidden bg-[#eaf3fb]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/images/platform/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-linear-to-b from-white/78 via-white/34 to-white/82" />
      <div className="absolute inset-y-0 left-0 w-[55%] bg-linear-to-r from-white/72 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-6 pb-0 pt-14 lg:px-8">
        <div className="max-w-[530px]">
          <p className="text-xs font-semibold text-[#0f2142]/70">Platform</p>
          <h1 className="mt-4 font-heading text-[2.6rem] font-medium leading-[1.05] tracking-normal text-zinc-950 sm:text-[3.15rem]">
            One Platform.
            <br />
            Total Visibility.
          </h1>
          <p className="mt-5 max-w-[520px] text-sm leading-6 text-[#0f2142]">
            Two products, engineered to run in the background of your business:
            an Autonomous Operation System and a Deal Pipeline Solution.
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

        <div
          className="relative mt-14 min-h-0 flex-1 overflow-hidden rounded-t-xl shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-black/[.08]"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 72%, rgba(0,0,0,0.72) 84%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 72%, rgba(0,0,0,0.72) 84%, transparent 100%)",
          }}
        >
          <Image
            src="/images/platform/dashboard-overview.png"
            alt="OrbitOps dashboard overview"
            width={1295}
            height={694}
            priority
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
