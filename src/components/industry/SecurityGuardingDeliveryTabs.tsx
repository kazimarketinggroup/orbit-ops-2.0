"use client";

import { useState } from "react";
import Image from "next/image";

const deliveryItems = [
  {
    title: "Bespoke Software Development",
    body: "Guard deployment, shift cover and client reporting systems built around how your operations already run.",
  },
  {
    title: "Warehouse Management System",
    body: "Stock and equipment visibility for sites where personnel, assets and service standards need to stay aligned.",
  },
  {
    title: "Workflow Automation",
    body: "Roster changes, absence planning and escalation workflows automated with clear ownership and auditability.",
  },
  {
    title: "System Integration",
    body: "Connect scheduling, payroll, client portals and incident systems into one dependable operating layer.",
  },
  {
    title: "AI Implementation",
    body: "AI-powered scheduling, triage and service insight that supports faster decisions without removing operational control.",
  },
  {
    title: "Consulting",
    body: "Operational diagnosis that helps you decide which workflows deserve automation, and which ones need tighter governance.",
  },
];

export default function SecurityGuardingDeliveryTabs() {
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
                ? "border-transparent bg-[#d9e7ff] text-zinc-950"
                : "border-black/[.08] bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#f6f8ff]"
            }`}
          >
            <span>{item.title}</span>
            <span aria-hidden>{activeIndex === index ? "+" : "/"}</span>
          </button>
        ))}
      </div>

      <div className="flex min-h-[340px] flex-col overflow-hidden rounded-lg border border-black/[.05] bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="bg-[#d9e7ff] px-7 py-6">
          <p className="text-xs font-semibold text-zinc-950">{active.title}</p>
          <h3 className="mt-2 max-w-lg font-heading text-sm font-medium leading-snug text-zinc-950 sm:text-base">
            {active.body}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/35">
          <Image
            src="/images/industry/securityGurding/Background+Border+Shadow.png"
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
