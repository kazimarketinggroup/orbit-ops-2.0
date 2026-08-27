const industries = [
  "Private Equity",
  "Consumer Packaged Goods",
  "Healthcare",
  "Hospitality & Catering",
  "Logistics & Travel",
  "Pharma",
  "Security Guarding",
];

export default function ComplexOperations() {
  return (
    <section id="industry" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Built for Complex Operations
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">
          Every industry runs differently. OrbitOps is engineered to fit the
          operational reality of yours, not the other way round.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-sm border border-black/[.06] bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
