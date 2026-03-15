import { LucideIcon } from "lucide-react";

interface HeaderProps {
  icon: LucideIcon;
  title: string;
}

export default function DashboardHeader({
  icon: GraduationCap,
  title,
}: HeaderProps) {
  return (
    <div className="flex items-center gap-2.5 w-fill bg-blue-600 mx-6 mt-6 text-white font-inter font-semibold text-3xl p-4">
      <GraduationCap size={45} />
      {title}
    </div>
  );
}
