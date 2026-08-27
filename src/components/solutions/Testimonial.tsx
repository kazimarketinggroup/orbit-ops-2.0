import Image from "next/image";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  /** Panel background colour class, e.g. "bg-[#dceaf9]". */
  tone?: string;
};

export default function Testimonial({
  quote,
  name,
  role,
  avatar,
  tone = "bg-[#dceaf9]",
}: TestimonialProps) {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className={`grid items-center gap-8 rounded-lg px-10 py-12 lg:grid-cols-[1fr_0.3fr] ${tone}`}
        >
          <div>
            <p className="max-w-xl font-heading text-lg font-medium leading-relaxed text-zinc-900 sm:text-xl">
              {quote}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <Image
                src={avatar}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-zinc-900">{name}</p>
                <p className="text-[11px] text-zinc-500">{role}</p>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="hidden justify-self-end font-heading text-[7rem] leading-none text-white lg:block"
          >
            &rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
