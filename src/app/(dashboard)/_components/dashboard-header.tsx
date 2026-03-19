import { LucideIcon } from "lucide-react";

interface HeaderProps {
  icon: LucideIcon;
  title: string;
}

export default function DashboardHeader({ icon: Icon, title }: HeaderProps) {
  return (
    <div className="flex items-center gap-2.5 w-fill bg-blue-600 text-white font-inter font-semibold text-3xl p-4">
      <Icon size={45} />
      {title}
    </div>
  );
}
