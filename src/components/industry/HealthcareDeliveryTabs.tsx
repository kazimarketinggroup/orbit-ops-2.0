"use client";

import { useState } from "react";
import Image from "next/image";

const deliveryItems = [
  {
    title: "Bespoke Software Development",
    body: "Patient pathway and back-office systems built to your clinical governance standards.",
  },
  {
    title: "Warehouse Management System",
    body: "Stock, equipment and consumables visibility for providers where clinical flow depends on availability.",
  },
  {
    title: "Workflow Automation",
    body: "Admin, referral and triage workflows automated with human review where governance requires it.",
  },
  {
    title: "System Integration",
    body: "EPR, PAS, diagnostic and departmental systems connected without creating another source of truth.",
  },
  {
    title: "AI Implementation",
    body: "AI use cases designed with DPIA, clinical safety documentation and auditability built in.",
  },
  {
    title: "Consulting",
    body: "Clinical and operational advisory that protects governance while reducing administrative load.",
  },
];

export default function HealthcareDeliveryTabs() {
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
                ? "border-transparent bg-[#c8fff1] text-zinc-950"
                : "border-black/[.08] bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#f2fffb]"
            }`}
          >
            <span>{item.title}</span>
            <span aria-hidden>{activeIndex === index ? "+" : "/"}</span>
          </button>
        ))}
      </div>

      <div className="flex min-h-[340px] flex-col overflow-hidden rounded-lg border border-black/[.05] bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="bg-[#c8fff1] px-7 py-6">
          <p className="text-xs font-semibold text-zinc-950">
            {active.title}
          </p>
          <h3 className="mt-2 max-w-lg font-heading text-sm font-medium leading-snug text-zinc-950 sm:text-base">
            {active.body}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/35">
          <Image
            src="/images/industry/healthcare/Background+Border+Shadow.png"
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
