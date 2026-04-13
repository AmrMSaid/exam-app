import { GraduationCap } from "lucide-react";
import DiplomasList from "../../features/diplomas/components/diplomas-list";
import { DiplomasBreadcrumb } from "@/features/diplomas/components/diplomas-breadcrumb";

// Homepage (diplomas page)
export default async function HomePage() {
  return (
    <div className="bg-gray-50">
      <DiplomasBreadcrumb />
      <main className="p-6">
        <header className="flex items-center gap-2.5 w-fill bg-blue-600 text-white font-inter font-semibold text-3xl p-4">
          <GraduationCap size={45} />
          Diplomas
        </header>
        <DiplomasList />
      </main>
    </div>
  );
}
