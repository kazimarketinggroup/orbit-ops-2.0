import type { Metadata } from "next";
import WarehouseManagementPage from "@/components/solutions/WarehouseManagementPage";

export const metadata: Metadata = {
  title: "Warehouse Management System - OrbitOps",
  description:
    "Warehouse visibility, slotting, pick paths, dispatch flow, and forecasting designed to run your operations around the floor.",
};

export default function Page() {
  return <WarehouseManagementPage />;
}
