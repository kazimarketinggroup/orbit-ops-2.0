const tabs = [
  { label: "Mission Statement", href: "#mission" },
  { label: "Meet the Team", href: "#team" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industry", href: "#industry" },
];

export default function SubNav() {
  return (
    <div className="sticky top-[57px] z-40 border-b border-black/[.06] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 overflow-x-auto px-6 py-4 lg:px-8">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`whitespace-nowrap text-sm font-medium transition-colors ${
              i === 0
                ? "text-zinc-950"
                : "text-zinc-500 hover:text-zinc-950"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
