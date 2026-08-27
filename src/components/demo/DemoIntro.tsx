const bullets = [
  "Tell us how your team works today",
  "Explore solutions tailored to your workflow",
  "Leave with a practical action plan",
];

const brands = ["Northwind", "Meridian", "Halcyon", "Vantage", "Cadence", "Lumen"];

export default function DemoIntro() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
        Experience Smarter
        <br />
        Business Operations
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-500">
        Discover how smarter operations help your team work faster, stay
        aligned, and scale without the chaos.
      </p>

      <ul className="mt-8 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3 text-sm text-zinc-700">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <p className="text-sm font-medium text-zinc-500">
          Trusted by forward-thinking teams
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex items-center gap-2 text-sm font-medium text-zinc-400"
            >
              <span className="h-2 w-2 rounded-full border border-zinc-300" />
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
