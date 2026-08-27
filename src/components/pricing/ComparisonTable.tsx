import { Fragment } from "react";

type Row = {
  feature: string;
  launch: string | boolean;
  operate: string | boolean;
  enterprise: string | boolean;
};

type Group = {
  title: string;
  rows: Row[];
};

const groups: Group[] = [
  {
    title: "DELIVERY",
    rows: [
      { feature: "Discovery and process mapping", launch: true, operate: true, enterprise: true },
      { feature: "Bespoke development", launch: "Single build", operate: "Ongoing", enterprise: "Ongoing" },
      { feature: "Integrations included", launch: "2", operate: "Unlimited", enterprise: "Unlimited" },
      { feature: "Dedicated delivery pod", launch: false, operate: false, enterprise: true },
    ],
  },
  {
    title: "PLATFORM",
    rows: [
      { feature: "Autonomous Operation System", launch: false, operate: true, enterprise: true },
      { feature: "Deal Pipeline Solution", launch: "Add-on", operate: true, enterprise: true },
      { feature: "Operations dashboards", launch: "Basic", operate: "Advanced", enterprise: "Advanced" },
      { feature: "AI agents and assistants", launch: "Add-on", operate: true, enterprise: true },
    ],
  },
  {
    title: "SUPPORT & GOVERNANCE",
    rows: [
      { feature: "Post-launch support", launch: "30 days", operate: "Continuous", enterprise: "Continuous" },
      { feature: "Named point of contact", launch: false, operate: true, enterprise: true },
      { feature: "Response-time commitments", launch: false, operate: "Business hours", enterprise: "Contracted" },
      { feature: "SSO and audit logging", launch: false, operate: "Add-on", enterprise: true },
    ],
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto text-[#152250]"
        aria-label="Included"
      >
        <path d="M4 10.5l4 4 8-9" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <span className="text-zinc-300" aria-label="Not included">
        &ndash;
      </span>
    );
  }
  return <span className="text-xs text-zinc-600">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          What sits in each tier
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          A straight comparison, so you can see where the line falls before you
          speak to us.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/[.09]">
                <th className="py-3 pr-4 text-[11px] font-semibold text-zinc-500">
                  Feature
                </th>
                {["Launch", "Operate", "Enterprise"].map((tier) => (
                  <th
                    key={tier}
                    className="w-[17%] px-3 py-3 text-center text-[11px] font-semibold text-zinc-500"
                  >
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-zinc-50">
                    <td
                      colSpan={4}
                      className="px-3 py-2 text-[9px] font-semibold tracking-wide text-zinc-500"
                    >
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-black/[.05]"
                    >
                      <td className="py-3 pr-4 text-xs text-zinc-700">
                        {row.feature}
                      </td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.launch} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.operate} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
