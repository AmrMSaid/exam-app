import { GraduationCap } from "lucide-react";
import DashboardHeader from "./_components/dashboard-header";
import DiplomasList from "./_diplomas/diplomas-list";

export default function HomePage() {
  return (
    <div>
      <DashboardHeader icon={GraduationCap} title={"Diplomas"} />
      <DiplomasList />
    </div>
  );
}
