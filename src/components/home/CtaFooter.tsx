import Footer from "@/components/Footer";

type CtaFooterProps = {
  /** Overrides the default "Book a Consultation" button label. */
  ctaLabel?: string;
};

export default function CtaFooter({ ctaLabel = "Book a Consultation" }: CtaFooterProps) {
  return (
    <>
      <section className="bg-white pb-9 pt-4">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-heading text-[2rem] font-medium leading-tight tracking-normal text-zinc-900 sm:text-[2.35rem]">
            Ready to Run Smarter Operations?
          </h2>
          <div className="mt-6">
            <a
              href="/demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-[#0b1220] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1a2436]"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
