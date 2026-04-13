"use client";

import { GraduationCap, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideLinks() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col justify-between gap-4">
      {/* Diplomas */}
      <Link
        className={`flex gap-2.5 p-4 ${currentPath === "/" || currentPath.includes("diplomas") ? "text-blue-600 bg-blue-100 outline-1 outline-blue-500" : "text-gray-500 hover:text-blue-600 hover:bg-blue-100 group"}`}
        href={"/"}
      >
        <GraduationCap
          className={`${currentPath === "/" ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}`}
        />
        Diplomas
      </Link>

      {/* Account */}
      <Link
        className={`flex gap-2.5 p-4 ${currentPath === "/account" ? "text-blue-600 bg-blue-100 outline-1 outline-blue-500" : "text-gray-500 hover:bg-blue-100"}`}
        href={"/account"}
      >
        <UserRound
          className={`${currentPath === "/account" ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}`}
        />
        Account Settings
      </Link>
    </div>
  );
}
