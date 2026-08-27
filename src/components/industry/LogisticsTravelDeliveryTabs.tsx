"use client";

import { useState } from "react";
import Image from "next/image";

const deliveryItems = [
  {
    title: "Bespoke Software Development",
    body: "From route planning to driver handoff and exception control, we build systems that fit the way your operation already runs.",
  },
  {
    title: "Warehouse Management System",
    body: "Visibility across stock, dispatch, returns and cross-dock activity so fulfilment does not become the bottleneck.",
  },
  {
    title: "Workflow Automation",
    body: "Automate repeatable dispatch, escalation and paperwork sequences across teams, sites and shifts.",
  },
  {
    title: "System Integration",
    body: "Connect ERP, TMS, WMS, telematics and finance tools into one dependable layer of operational truth.",
  },
  {
    title: "AI Implementation",
    body: "Practical AI for demand forecasting, automation triage, customer exceptions and service recovery when timing matters.",
  },
  {
    title: "Consulting",
    body: "Diagnose where the service breaks, define the shortest path to value and help your team scale without chaos.",
  },
];

export default function LogisticsTravelDeliveryTabs() {
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
                ? "border-transparent bg-[#dbe8ff] text-zinc-950"
                : "border-black/[.08] bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#f7faff]"
            }`}
          >
            <span>{item.title}</span>
            <span aria-hidden>{activeIndex === index ? "+" : "/"}</span>
          </button>
        ))}
      </div>

      <div className="flex min-h-[340px] flex-col overflow-hidden rounded-lg border border-black/[.05] bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="bg-[#dbe8ff] px-7 py-6">
          <p className="text-xs font-semibold text-zinc-950">{active.title}</p>
          <h3 className="mt-2 max-w-lg font-heading text-sm font-medium leading-snug text-zinc-950 sm:text-base">
            {active.body}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/35">
          <Image
            src="/images/industry/logisticsandTravel/Background+Border+Shadow.png"
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
