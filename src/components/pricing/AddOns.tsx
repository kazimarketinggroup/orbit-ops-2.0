const addOns = [
  {
    title: "Warehouse Management System",
    description:
      "Stock, picking, despatch and site-level visibility deployed as a module on top of your OrbitOps environment.",
  },
  {
    title: "AI implementation sprint",
    description:
      "A focused six-week engagement to put a working AI agent into a real process, with evaluation and guardrails.",
  },
  {
    title: "Advisory retainer",
    description:
      "Fractional CTO-level input on architecture, vendor decisions and operations roadmap, billed monthly.",
  },
  {
    title: "Legacy migration",
    description:
      "Move off spreadsheets or an end-of-life system with data mapping, parallel running and a cutover plan.",
  },
];

export default function AddOns() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-md font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Extend an engagement when the work calls for it
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Modules and services that bolt onto any tier, priced separately.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {addOns.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-black/[.07] bg-zinc-50 p-6"
            >
              <h3 className="font-heading text-sm font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
