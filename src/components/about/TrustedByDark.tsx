const brands = ["Northwind", "Meridian", "Halcyon", "Vantage", "Cadence", "Lumen"];

export default function TrustedByDark() {
  return (
    <section className="border-t border-white/10 bg-[#050506] py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 lg:flex-row lg:justify-between lg:px-8">
        <p className="text-sm font-medium text-white/62">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex items-center gap-2 text-xs font-medium text-white/45"
            >
              <span className="h-2 w-2 rounded-full border border-white/30" />
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
