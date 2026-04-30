"use client";

import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils/tailwind.utils";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

const VARIANTS = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400",
  secondary:
    "bg-blue-50 text-gray-800 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 outline-1 outline-blue-600 disabled:outline-0",
} as const;

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  label: string;
  icon?: LucideIcon;
  loadingLabel?: string;
  isPending?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

export function FormButton({
  type = "button",
  label,
  icon: Icon,
  loadingLabel,
  isPending,
  variant = "primary",
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type={type}
      disabled={isPending}
      className={cn(
        "w-full py-6 text-sm cursor-pointer mt-10 disabled:cursor-default",
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {isPending ? loadingLabel : label}
      {Icon && <Icon size={16} />}
    </Button>
  );
}
