import DemoForm from "@/components/demo/DemoForm";

const bullets = [
  "Tell us how your team works today",
  "Explore solutions tailored to your workflow",
  "Leave with a practical action plan",
];

export default function DemoBlock() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Experience Smarter
            <br />
            Business Operations
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
            Discover how smarter operations help your team work faster, stay
            aligned, and scale without the chaos.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-3 text-sm text-zinc-700"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <DemoForm />
      </div>
    </section>
  );
}
