import { GraduationCap } from "lucide-react";
import DashboardHeader from "../../shared/components/dashboard-header";
import DiplomasList from "../../features/diplomas/components/diplomas-list";
import { DiplomasBreadcrumb } from "@/features/diplomas/components/diplomas-breadcrumb";

// Diplomas page
export default async function HomePage() {
  return (
    <div className="bg-gray-50">
      <DiplomasBreadcrumb />
      <main className="p-6">
        <DashboardHeader icon={GraduationCap} title={"Diplomas"} />
        <DiplomasList />
      </main>
    </div>
  );
}
