import { BookOpenCheck } from "lucide-react";
import DashboardHeader from "../../../shared/components/dashboard-header";
import ExamsList from "../../../features/exams/components/exams-list";
import { getDiplomaById } from "../../../features/diplomas/lib/apis/diplomas.api";
import { ExamsBreadcrumb } from "@/features/exams/components/exams-breadcrumb";

interface ExamsPageProps {
  params: Promise<{
    diplomaId: string[];
  }>;
}

// Diploma exams page
export default async function ExamsPage({ params }: ExamsPageProps) {
  const paramsResult = await params;
  const id = paramsResult.diplomaId[2];

  const { payload } = await getDiplomaById(id);

  return (
    <div className="bg-gray-50">
      <ExamsBreadcrumb title={payload.diploma.title} id={id} />
      <main className="p-6">
        <DashboardHeader
          icon={BookOpenCheck}
          title={`${payload.diploma.title} Exams`}
        />
        <ExamsList id={id} />
      </main>
    </div>
  );
}
