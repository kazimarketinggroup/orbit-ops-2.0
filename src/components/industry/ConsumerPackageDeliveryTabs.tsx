"use client";

import { useState } from "react";
import Image from "next/image";

const deliveryItems = [
  {
    title: "Bespoke Software Development",
    body: "Planning, NPD and spec tools built around your categories when the off-the-shelf option doesn't fit.",
  },
  {
    title: "Warehouse Management System",
    body: "Stock, picking and fulfilment visibility for product teams who need accurate availability by SKU and channel.",
  },
  {
    title: "Workflow Automation",
    body: "Automated approvals, checks and handoffs across retailers, finance, operations and supply chain.",
  },
  {
    title: "System Integration",
    body: "ERP, retailer portals, planning tools and finance systems connected into one dependable data layer.",
  },
  {
    title: "AI Implementation",
    body: "Forecasting, trade spend analysis and exception detection shipped where margin pressure is highest.",
  },
  {
    title: "Consulting",
    body: "Commercial and operational advice that turns messy processes into a practical automation roadmap.",
  },
];

export default function ConsumerPackageDeliveryTabs() {
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
                ? "border-transparent bg-[#ffd6c9] text-zinc-950"
                : "border-black/[.08] bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#fff7f4]"
            }`}
          >
            <span>{item.title}</span>
            <span aria-hidden>{activeIndex === index ? "+" : "/"}</span>
          </button>
        ))}
      </div>

      <div className="flex min-h-[340px] flex-col overflow-hidden rounded-lg bg-[#ffd6c9]">
        <div className="px-7 py-6">
          <p className="text-xs font-semibold text-zinc-950">
            {active.title}
          </p>
          <h3 className="mt-2 max-w-lg font-heading text-sm font-medium leading-snug text-zinc-950 sm:text-base">
            {active.body}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/35">
          <Image
            src="/images/industry/consumerPackage/Background+Border+Shadow.png"
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
