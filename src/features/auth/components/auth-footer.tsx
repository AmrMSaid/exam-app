import Link from "next/link";
import { AUTH_NAVIGATION, AuthMode } from "../lib/constants/auth.constants";
import { cn } from "@/shared/lib/utils/tailwind.utils";

interface AuthFooterProps {
  mode: AuthMode;
  className?: string;
}

export default function AuthFooter({ mode, className }: AuthFooterProps) {
  const { message, linkText, href } = AUTH_NAVIGATION[mode];

  return (
    <p
      className={cn(
        "font-medium text-gray-500 text-sm flex gap-2 self-center mt-6.5",
        className,
      )}
    >
      {message}
      <Link
        className="text-blue-600 hover:text-blue-700 hover:underline "
        href={href}
      >
        {linkText}
      </Link>
    </p>
  );
}
