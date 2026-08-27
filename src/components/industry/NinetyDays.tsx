const columns = [
  {
    heading: "The current procedure, in the hands doing the work.",
    points: [
      "Site, floor and field teams read from the same live record, online or off",
      "Photos, checklists and sign-offs captured where the job happens",
      "Superseded versions retire automatically nobody works from last month's sheet",
    ],
  },
  {
    heading: "Numbers your board and your shift managers both trust.",
    points: [
      "See which steps generate throughput and which quietly burn hours",
      "Tie operational activity to cost per unit, margin and service level",
      "Prove what a top-performing site does differently, then roll it out",
    ],
  },
  {
    heading: "Exceptions surfaced early, owned by name.",
    points: [
      "Every stage tracked from intake to completion, without a status call",
      "Issues routed straight to whoever can actually clear them",
      "A clear record of what slipped, why and what stopped it happening twice",
    ],
  },
];

export default function NinetyDays() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          What changes in the first ninety days
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.heading}
              className="rounded-lg border border-black/[.07] bg-white p-6"
            >
              <h3 className="font-heading text-sm font-semibold leading-6 text-zinc-950">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-4">
                {col.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span className="text-xs leading-5 text-zinc-500">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
