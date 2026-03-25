import { BookOpenCheck } from "lucide-react";
import DashboardHeader from "../_components/dashboard-header";
import ExamsList from "./_components/exams-list";

interface ExamsPageProps {
  params: Promise<{ diplomaId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// Diploma exams page
export default async function ExamsPage({ params }: ExamsPageProps) {
  const paramsResult = await params;
  const id = paramsResult.diplomaId;

  return (
    <div className="bg-gray-50">
      <div className="flex items center bg-white text-sm text-gray-400 p-4">
        Diplomas
      </div>
      <main className="p-6">
        <DashboardHeader icon={BookOpenCheck} title={`Exams`} />
        <ExamsList id={id} />
      </main>
    </div>
  );
}
