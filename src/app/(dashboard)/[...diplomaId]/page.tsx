import { BookOpenCheck } from "lucide-react";
import { notFound } from "next/navigation";
import DashboardHeader from "../../../shared/components/dashboard-header";
import ExamList from "../../../features/exams/components/exam-list";
import { getDiplomaById } from "../../../features/diplomas/lib/apis/diploma.api";
import { ExamBreadcrumb } from "@/features/exams/components/exam-breadcrumb";

interface DiplomaExamsPageProps {
  params: Promise<{
    diplomaId: string[];
  }>;
}

// Diploma exams page
export default async function DiplomaExamsPage({
  params,
}: DiplomaExamsPageProps) {
  const paramsResult = await params;
  const id = paramsResult.diplomaId.at(-1);

  if (!id) {
    notFound();
  }

  let payload: Awaited<ReturnType<typeof getDiplomaById>>["payload"];
  try {
    ({ payload } = await getDiplomaById(id));
  } catch {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <ExamBreadcrumb title={payload.diploma.title} id={id} />
      <main className="p-6">
        <DashboardHeader
          icon={BookOpenCheck}
          title={`${payload.diploma.title} Exams`}
          link={"/"}
        />
        <ExamList id={id} />
      </main>
    </div>
  );
}
