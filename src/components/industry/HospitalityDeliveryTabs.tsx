"use client";

import { useState } from "react";
import Image from "next/image";

const deliveryItems = [
  {
    title: "Bespoke Software Development",
    body: "Operational systems for site planning, service standards and team coordination built around how your hospitality business already runs.",
  },
  {
    title: "Warehouse Management System",
    body: "Stock visibility, supply ordering and markdown control for kitchens and service teams where waste and timing both drive margin.",
  },
  {
    title: "Workflow Automation",
    body: "Shift routines, stock replenishment and service escalation workflows automated with clear ownership and auditability.",
  },
  {
    title: "System Integration",
    body: "Connect POS, scheduling, procurement and finance systems into a single operating layer your teams can trust.",
  },
  {
    title: "AI Implementation",
    body: "AI-powered forecasting, planning and service intelligence that helps teams react faster in a high-volume, time-sensitive environment.",
  },
  {
    title: "Consulting",
    body: "Diagnostic guidance that identifies where the service breaks, where automation creates value and where governance matters most.",
  },
];

export default function HospitalityDeliveryTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = deliveryItems[activeIndex];

  return (
    <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1fr]">
      <div className="space-y-3">
        {deliveryItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            className={`flex h-12 w-full items-center justify-between rounded-lg border px-5 text-left text-[11px] font-semibold transition-colors ${
              activeIndex === index
                ? "border-transparent bg-[#d6f2fb] text-zinc-950"
                : "border-black/[.08] bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#f6fbff]"
            }`}
          >
            <span>{item.title}</span>
            <span aria-hidden>{activeIndex === index ? "+" : "/"}</span>
          </button>
        ))}
      </div>

      <div className="flex min-h-[340px] flex-col overflow-hidden rounded-lg border border-black/[.05] bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="bg-[#d6f2fb] px-7 py-6">
          <p className="text-xs font-semibold text-zinc-950">{active.title}</p>
          <h3 className="mt-2 max-w-lg font-heading text-sm font-medium leading-snug text-zinc-950 sm:text-base">
            {active.body}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/35">
          <Image
            src="/images/industry/hospitality/Background+Border+Shadow.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
