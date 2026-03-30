import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { slugify } from "@/shared/lib/utils/slugify";

interface ExamsBreadcrumbParams {
  title: string;
  id: string;
}

export function ExamsBreadcrumb({ title, id }: ExamsBreadcrumbParams) {
  return (
    <nav className="bg-white p-4">
      <Breadcrumb>
        {/* Links */}
        <BreadcrumbList>
          {/* Diplomas (home) */}
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="text-gray-400 hover:text-blue-700 text-sm"
            >
              <Link href="/">Diplomas</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* Diploma exams page (same page) */}
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              <Link href={`/diplomas/${slugify(title)}/${id}`}>
                {title} Exams
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
