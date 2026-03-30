import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/shared/components/ui/breadcrumb";

export function DiplomasBreadcrumb() {
  return (
    <nav className="bg-white p-4">
      <Breadcrumb>
        {/* Links */}
        <BreadcrumbList>
          {/* Diplomas (home, same page) */}
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              <Link href="/">Diplomas</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
