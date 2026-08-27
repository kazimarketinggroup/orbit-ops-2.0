"use client";

import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    number: "01",
    icon: "code",
    title: "Bespoke Software\nDevelopment",
    solves: "Off-the-shelf tools that don't match how your business actually works.",
    body: "We build custom platforms and applications, engineered around your workflows not the other way round. From internal ops tools to customer-facing platforms, our engineering team designs and ships production systems that fit exactly.",
  },
  {
    number: "02",
    icon: "warehouse",
    title: "Warehouse\nManagement System",
    solves: "Fragmented visibility across stock, fulfilment and logistics.",
    body: "An end-to-end warehouse management layer built to scale with volume. Real-time inventory, pick and pack workflows, courier integrations and reporting unified in a single operating layer.",
  },
  {
    number: "03",
    icon: "flow",
    title: "Workflow\nAutomation",
    solves: "Repeatable manual work draining your team's time and attention.",
    body: "We map, redesign and automate the workflows that eat your operational hours approvals, handoffs, data entry, reconciliation. What used to take hours runs in seconds, with humans looped in only where it matters.",
  },
  {
    number: "04",
    icon: "integrate",
    title: "System\nIntegration",
    solves: "A stack of tools that don't talk to each other.",
    body: "We connect the tools you already rely on CRM, ERP, finance, HR, ops into a single seamless operating layer. Clean data flows, reliable syncs, and a source of truth you can actually trust.",
  },
  {
    number: "05",
    icon: "ai",
    title: "AI\nImplementation",
    solves: "AI experiments that never make it out of a proof-of-concept.",
    body: "Practical AI, embedded into your existing operations not a bolt-on. We identify where LLMs and models create measurable leverage, then ship them into production with the guardrails and monitoring you'd expect from any operational system.",
  },
  {
    number: "06",
    icon: "consult",
    title: "Consulting",
    solves: "Not sure where automation or AI actually pays back.",
    body: "Strategic guidance on where automation, AI and bespoke systems create the most impact. We help operators, founders and PE-backed leadership teams choose the right bets and often build them alongside you.",
  },
];

const iconPaths: Record<string, string> = {
  code: "M7 6l-4 4 4 4M13 6l4 4-4 4",
  warehouse: "M3 8l7-4 7 4v9H3zM7 17v-5h6v5",
  flow: "M4 5h5M4 10h9M4 15h5M15 7v6M13 10h4",
  integrate: "M7 7a3 3 0 014 0l2 2a3 3 0 010 4M13 13a3 3 0 01-4 0l-2-2a3 3 0 010-4",
  ai: "M10 2v3M10 15v3M3.5 6l2.5 1.5M14 12.5L16.5 14M3.5 14L6 12.5M14 7.5L16.5 6M10 7a3 3 0 000-6z",
  consult: "M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM10 7v3.5l2.5 1.5",
};

function SolutionIcon({ name }: { name: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

const TOTAL = solutions.length;
const STACK_GAP = 14; 

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export default function SolutionList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateYs, setTranslateYs] = useState<number[]>(() =>
    solutions.map((_, i) => (i === 0 ? 0 : 1000))
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stackable = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (!sectionRef.current) return;

      if (!stackable.matches) {
        setTranslateYs(solutions.map(() => 0));
        setActive(-1);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const scrollProgress = clamp(-rect.top / (rect.height - vh), 0, 1);

      let currentActive = 0;

      const newYs = solutions.map((_, i) => {
        if (i === 0) return 0;

        const step = 1 / (TOTAL - 1);
        const start = (i - 1) * step;
        const end = start + step;

        const progress = clamp((scrollProgress - start) / (end - start), 0, 1);

        if (progress > 0.1) {
          currentActive = i;
        }

        const initialY = vh;
        const finalY = i * STACK_GAP;

        return initialY - progress * (initialY - finalY);
      });

      setTranslateYs(newYs);
      setActive(currentActive);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative bg-white"
      style={{
        height: `${TOTAL * 60}vh`, // স্ক্রলিং ট্র্যাভেল হাইট সামঞ্জস্য করা হয়েছে
      }}
    >
      {/* items-start pt-28 দিয়ে কার্ডগুলোকে পেজের ওপরের অংশে পিন করে বসানো হয়েছে */}
      <div className="sticky top-0 flex h-screen items-start pt-28 justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          {/* min-h-[420px] যোগ করা হয়েছে যাতে নিচের সেকশন এসে ঢেকে না ফেলে */}
          <div className="relative flex w-full items-center justify-center min-h-[420px]">
            {solutions.map((item, i) => (
              <div
                key={item.number}
                style={{
                  transform: `translateY(${translateYs[i]}px)`,
                  zIndex: i + 1,
                  top: `${i * STACK_GAP}px`,
                }}
                className={`absolute w-full grid gap-6 rounded-lg border p-7 transition-[background-color,border-color,box-shadow] duration-500 ease-out sm:grid-cols-[0.62fr_1fr] lg:gap-12 ${
                  active === i
                    ? "border-[#bcd9f7] bg-gradient-to-r from-[#cfe4fb] to-[#eaf3fd] shadow-[0_18px_44px_-12px_rgba(15,23,42,0.28)]"
                    : "border-black/[.07] bg-white shadow-[0_8px_24px_-14px_rgba(15,23,42,0.2)]"
                }`}
              >
                <div>
                  <div className="text-zinc-900">
                    <SolutionIcon name={item.icon} />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold text-zinc-500">
                    {item.number}
                  </p>
                  <h3 className="mt-1 whitespace-pre-line font-heading text-lg font-medium leading-snug text-zinc-900">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-zinc-500">
                    WHAT IT SOLVES
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-900">
                    {item.solves}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.body}
                  </p>
                  <a
                    href="/demo"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 transition-all hover:gap-2.5"
                  >
                    Learn More <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}