import Image from "next/image";

const stories = [
  {
    image: "/images/home/case-study-northwind-v20260804.png",
    tag: "PRIVATE EQUITY",
    client: "Northwind",
    headline: "Reduced manual order processing by 40% in 6 weeks",
  },
  {
    image: "/images/home/case-study-logistics-v20260804.png",
    tag: "LOGISTICS",
    client: "Meridian",
    headline: "Cut freight dispatch delays with real-time yard visibility",
  },
  {
    image: "/images/home/case-study-healthcare-v20260804.png",
    tag: "HEALTH CARE",
    client: "Halcyon",
    headline: "Automated shift scheduling across 12 care facilities",
  },
  {
    image: "/images/home/case-study-cpg-v20260804.png",
    tag: "CPG",
    client: "Vantage",
    headline: "Improved retail stock accuracy with live inventory sync",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-study" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Real Systems. Real Results.
          </h2>
          <a
            href="#case-study"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
          >
            See All Stories
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <div
              key={story.client}
              className="group relative aspect-[0.78/1] overflow-hidden rounded-lg"
            >
              <Image
                src={story.image}
                alt={story.client}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold tracking-wide text-zinc-700">
                {story.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full border border-white/70" />
                  {story.client}
                </div>
                <p className="font-heading text-sm font-semibold leading-snug text-white">
                  {story.headline}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {stories.map((story, i) => (
            <span
              key={story.client}
              className={`h-1.5 rounded-full transition-all ${
                i === 0 ? "w-6 bg-zinc-900" : "w-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
