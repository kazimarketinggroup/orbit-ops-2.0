"use client";

import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [pinnable, setPinnable] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;

    const update = () => {
      frame = 0;
      const pin = pinRef.current;
      const sticky = stickyRef.current;
      if (!pin || !sticky) return;

      // Distance the pinned panel travels while stuck to the viewport.
      const travel = pin.offsetHeight - sticky.offsetHeight;
      if (travel <= 0) {
        setProgress(1);
        return;
      }

      const scrolled = sticky.getBoundingClientRect().top - pin.getBoundingClientRect().top;
      setProgress(Math.min(1, Math.max(0, scrolled / travel)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const sync = () => {
      const active = desktop.matches && !reduced.matches;
      setPinnable(active);
      if (!active) {
        setProgress(1);
        return;
      }
      update();
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  return { pinRef, stickyRef, progress, pinnable };
}

const problems = [
  {
    icon: "</>",
    title: "Operations run blind",
    description:
      "Digital lives in spreadsheets, inboxes and separate tools. By the time a problem surfaces in a report, it has already cost you.",
  },
  {
    icon: "[]",
    title: "Manual work never ends",
    description:
      "Teams spend their week chasing updates, re-keying data and firefighting exceptions instead of doing the work they were hired for.",
  },
  {
    icon: "()",
    title: "Revenue slips quietly",
    description:
      "Deals drift, follow-ups are missed and forecasts are guesswork. The pipeline only looks wrong at the end of the quarter.",
  },
  {
    icon: "<>",
    title: "Systems don't talk",
    description:
      "ERP, CRM, WMS and finance each hold part of the truth. Nobody holds all of it, so decisions are made on partial information.",
  },
];

const solutions = [
  {
    title: "One operational picture",
    description:
      "Every system feeds a single live view of your business, so the state of operations is never in question.",
  },
  {
    title: "Risk surfaced early",
    description:
      "Drift, exceptions and at-risk deals are flagged while there is still time to act on them.",
  },
  {
    title: "Work that runs itself",
    description:
      "Routine decisions and actions execute automatically, in real time, with a full audit trail behind them.",
  },
  {
    title: "People on the right problems",
    description:
      "Your team is escalated to only when human judgement genuinely changes the outcome.",
  },
];

export default function Capabilities() {
  const { pinRef, stickyRef, progress, pinnable } = useScrollReveal();

  // Ease the travel so the panel settles instead of stopping abruptly.
  const eased = progress * progress * (3 - 2 * progress);
  const translate = pinnable
    ? `translate3d(0, ${(1 - eased) * 100}%, 0)`
    : undefined;

  return (
    <section className="bg-white py-16 lg:pb-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={pinRef} className="relative lg:h-[220vh]">
          <div
            ref={stickyRef}
            className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-hidden"
          >
          <div className="border-t border-[#84d8db] pt-6">
            <p className="text-xs font-semibold text-zinc-500">The Problem</p>
            <h2 className="mt-3 max-w-2xl font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
              Most operations are held together
              <br />
              by people, not systems
            </h2>
            <p className="mt-4 max-w-[520px] text-sm leading-6 text-zinc-600">
              The tooling exists. The data exists. What&apos;s missing is
              something that connects them and acts on what it sees.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-black/[.04] bg-zinc-50 p-6"
                >
                  <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-md bg-white text-xs font-semibold text-zinc-600 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={translate ? { transform: translate } : undefined}
            className="relative z-10 mt-14 border-t border-[#f0a27c] bg-white pt-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:pb-10 lg:will-change-transform lg:shadow-[0_-30px_60px_rgba(255,255,255,0.98)]"
          >
            <p className="text-xs font-semibold text-zinc-500">The Solution</p>
            <h2 className="mt-3 max-w-2xl font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
              A system that watches,
              <br />
              decides and acts
            </h2>
            <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#0f2142]/70">
              We sit across the tools you already run, turn their data into a
              live operational picture and execute the routine work on your behalf
              continuously.
            </p>

            <div className="mt-8 grid gap-x-16 gap-y-7 sm:grid-cols-2">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-400 text-[10px] text-zinc-500">
                    +
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
