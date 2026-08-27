import Image from "next/image";

const stats = [
  {
    figure: "25%",
    label: "Less time spent on manual order processing",
    quote:
      "OrbitOps took our order pipeline from constant firefighting to something we barely think about anymore. It just runs",
    name: "James Whitfield",
    role: "Operations Director",
    avatar: "/images/solution/avatar-james.png",
    background: "/images/casestudy/stat-bg-light.png",
  },
  {
    figure: "50%",
    label: "Reduction in scheduling and admin overhead",
    quote:
      "We used to lose hours every week just coordinating shifts. OrbitOps handles it now, and our team can focus on the actual work.",
    name: "Priya Anand",
    role: "Head of Operations",
    avatar: "/images/home/avatar-3.png",
    background: "/images/casestudy/stat-bg-blue.png",
  },
];

export default function ResultsStats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
          Operations Teams Like Yours, Results You Can See
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          See how teams across industries use OrbitOps to run leaner, faster
          operations.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.figure}
              className="relative grid gap-6 overflow-hidden rounded-lg p-7 sm:grid-cols-[0.85fr_1fr]"
            >
              <Image
                src={stat.background}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              <div className="relative flex flex-col justify-center">
                <p className="font-heading text-5xl font-medium text-zinc-900">
                  {stat.figure}
                </p>
                <p className="mt-3 max-w-[190px] text-xs leading-5 text-zinc-600">
                  {stat.label}
                </p>
                <div className="mt-6">
                  <a
                    href="/demo"
                    className="inline-flex h-9 items-center justify-center rounded-sm bg-[#152250] px-4 text-[11px] font-semibold text-white transition-colors hover:bg-[#1e2f6b]"
                  >
                    Read Story
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs leading-5 text-zinc-700">{stat.quote}</p>
                <div className="mt-6 flex items-center gap-2.5">
                  <Image
                    src={stat.avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[11px] font-semibold text-zinc-900">
                      {stat.name}
                    </p>
                    <p className="text-[10px] text-zinc-500">{stat.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
