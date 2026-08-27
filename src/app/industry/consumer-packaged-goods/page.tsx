import type { Metadata } from "next";
import ConsumerPackagePage from "@/components/industry/ConsumerPackagePage";

export const metadata: Metadata = {
  title: "Consumer Packaged Goods - OrbitOps",
  description:
    "AI consulting, operational software, demand planning, trade spend visibility, and automation for consumer packaged goods teams.",
};

export default function Page() {
  return <ConsumerPackagePage />;
}
