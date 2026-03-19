import { GraduationCap } from "lucide-react";
import DashboardHeader from "./_components/dashboard-header";
import DiplomasList from "./_diplomas/components/diplomas-list";

// Diplomas page
export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <div className="flex items center bg-white text-sm text-gray-400 p-4">
        Diplomas
      </div>
      <main className="p-6">
        <DashboardHeader icon={GraduationCap} title={"Diplomas"} />
        <DiplomasList />
      </main>
    </div>
  );
}
