const items = [
  "UK-based delivery team",
  "Discovery before a line of code",
  "Documentation you actually own",
  "Data encrypted in transit and at rest",
  "Training for the people using it",
  "No lock-in to proprietary tooling",
];

export default function Included() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            The parts we refuse to charge extra for
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Whichever tier you choose, the fundamentals come as standard.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-black/[.07] bg-zinc-50 px-5 py-3.5"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-[#152250]"
                aria-hidden
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              <span className="text-xs font-medium text-zinc-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
