"use client";

export default function DemoForm() {
  return (
    <form className="rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.06)]">
      <h2 className="font-heading text-xl font-semibold text-zinc-950">
        Book a Consultation
      </h2>

      <div className="mt-6 grid gap-5">
        <label className="block">
          <span className="text-xs font-medium text-zinc-500">Name</span>
          <input
            type="text"
            placeholder="Enter username"
            className="mt-1.5 w-full rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-medium text-zinc-500">Phone</span>
            <input
              type="tel"
              placeholder="+44"
              className="mt-1.5 w-full rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-zinc-500">Email</span>
            <input
              type="email"
              placeholder="Your email"
              className="mt-1.5 w-full rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-medium text-zinc-500">Company</span>
            <input
              type="text"
              placeholder="Company"
              className="mt-1.5 w-full rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-zinc-500">Job Title</span>
            <select className="mt-1.5 w-full rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-zinc-400 focus:outline-none">
              <option value="">Select...</option>
              <option value="founder">Founder / Owner</option>
              <option value="operations">Operations Lead</option>
              <option value="technology">Technology Lead</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-medium text-zinc-500">
            Write about your company
          </span>
          <textarea
            rows={4}
            placeholder="Write here"
            className="mt-1.5 w-full resize-none rounded-lg border border-black/[.08] bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
          />
        </label>

        <label className="flex items-start gap-2.5">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-black/[.15] text-[#0b1220] focus:ring-0"
          />
          <span className="text-xs leading-relaxed text-zinc-500">
            By checking this box, you agree to the OrbitOps Privacy Policy and
            consent to receive updates about OrbitOps products and services.
            You may unsubscribe at any time.
          </span>
        </label>

        <button
          type="submit"
          className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-[#0b1220] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2436]"
        >
          Book a Consultation
        </button>
      </div>
    </form>
  );
}
