import { ChevronLeft, LucideIcon } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  icon: LucideIcon;
  title: string;
  link: string;
}

export default function DashboardHeader({
  icon: Icon,
  title,
  link,
}: HeaderProps) {
  return (
    <header className="flex gap-2.5">
      {/* Back button */}
      <Link
        href={link}
        className="flex items-center bg-white border border-blue-600 text-blue-600 px-1.5 cursor-pointer hover:bg-blue-50"
      >
        <ChevronLeft strokeWidth={1} />
      </Link>

      {/* Title */}
      <div className="flex items-center gap-2.5 w-full bg-blue-600 text-white font-inter font-semibold text-3xl p-4">
        <Icon size={45} />
        {title}
      </div>
    </header>
  );
}
