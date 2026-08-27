const brands = ["Northwind", "Meridian", "Halcyon", "Vantage", "Cadence", "Lumen"];

export default function TrustedBy() {
  return (
    <section className="border-y border-black/[.06] bg-white py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 lg:flex-row lg:justify-between lg:px-8">
        <p className="text-sm font-semibold text-zinc-600">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex items-center gap-2 text-xs font-medium text-zinc-400"
            >
              <span className="h-2 w-2 rounded-full border border-zinc-300" />
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
