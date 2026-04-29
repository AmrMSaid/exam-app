import { GraduationCap } from "lucide-react";
import DiplomaList from "../../features/diplomas/components/diplomas-list";
import { DiplomaBreadcrumb } from "@/features/diplomas/components/diploma-breadcrumb";

// Homepage (diplomas page)
export default async function HomePage() {
  return (
    <div className="bg-gray-50">
      <DiplomaBreadcrumb />
      <div className="p-6">
        <header className="flex items-center gap-2.5 w-fill bg-blue-600 text-white font-inter font-semibold text-3xl p-4">
          <GraduationCap size={45} />
          Diplomas
        </header>
        <DiplomaList />
      </div>
    </div>
  );
}
