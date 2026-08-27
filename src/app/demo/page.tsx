import type { Metadata } from "next";
import DemoIntro from "@/components/demo/DemoIntro";
import DemoForm from "@/components/demo/DemoForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a Consultation — OrbitOps",
  description:
    "Discover how smarter operations help your team work faster, stay aligned, and scale without the chaos.",
};

export default function DemoPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <DemoIntro />
          <DemoForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
