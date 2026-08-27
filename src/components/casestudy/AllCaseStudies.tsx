import Image from "next/image";

const industries = [
  "All Industries",
  "Private Equity",
  "Healthcare",
  "Hospitality & Catering",
  "Logistics & Travel",
  "Pharma",
  "Security Guarding",
];

const solutions = [
  "All Solutions",
  "Bespoke Software Development",
  "Warehouse Management System",
  "Workflow Automation",
  "System Integration",
  "Consulting",
];

const studies = [
  {
    image: "/images/casestudy/study-portfolio.png",
    title: "Unified reporting across a 12-company portfolio",
  },
  {
    image: "/images/casestudy/study-scheduling.png",
    title: "Automated 90% of shift scheduling and compliance",
  },
  {
    image: "/images/casestudy/study-stockout.png",
    title: "Cut stock-out incidents by 62%",
  },
  {
    image: "/images/casestudy/study-clinic.png",
    title: "Reclaimed 30+ admin hours per clinic per week",
  },
  {
    image: "/images/casestudy/study-staffing.png",
    title: "Coordinated staffing across 40 sites, live",
  },
  {
    image: "/images/casestudy/study-compliance.png",
    title: "Faster turnaround on compliance reporting",
  },
];

export default function AllCaseStudies() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            All Case Studies
          </h2>

          <label className="relative w-full sm:w-72">
            <span className="sr-only">Search case studies</span>
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <circle cx="9" cy="9" r="6" />
              <path d="M13.5 13.5L17 17" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-full rounded-full border border-black/[.1] bg-white pl-10 pr-4 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[190px_1fr]">
          <aside className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold text-zinc-500">
                By Industry
              </p>
              <ul className="mt-3 space-y-2.5">
                {industries.map((item, i) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`text-xs transition-colors hover:text-zinc-950 ${
                        i === 0
                          ? "font-semibold text-zinc-950"
                          : "text-zinc-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-zinc-500">
                By Solutions
              </p>
              <ul className="mt-3 space-y-2.5">
                {solutions.map((item, i) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`text-xs transition-colors hover:text-zinc-950 ${
                        i === 0
                          ? "font-semibold text-zinc-950"
                          : "text-zinc-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {studies.map((study) => (
                <a key={study.title} href="#" className="group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-800">
                    {study.title}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full ${
                    i === 0 ? "w-6 bg-zinc-900" : "w-1.5 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
