import { BookOpenCheck } from "lucide-react";
import DashboardHeader from "../../../shared/components/dashboard-header";
import ExamsList from "../../../features/exams/components/exams-list";
import { getDiplomaById } from "../../../features/diplomas/lib/apis/diplomas.api";

interface ExamsPageProps {
  params: Promise<{ diplomaId: string }>;
}

// Diploma exams page
export default async function ExamsPage({ params }: ExamsPageProps) {
  const paramsResult = await params;
  const id = paramsResult.diplomaId;

  const diploma = await getDiplomaById(id);
  console.log(diploma);

  return (
    <div className="bg-gray-50">
      <div className="flex items center bg-white text-sm text-gray-400 p-4">
        Diplomas
      </div>
      <main className="p-6">
        <DashboardHeader
          icon={BookOpenCheck}
          title={`${diploma.payload.diploma.title} Exams`}
        />
        <ExamsList id={id} />
      </main>
    </div>
  );
}
