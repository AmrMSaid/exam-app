import { CardHeader, CardTitle } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils/tailwind.utils";

interface AuthHeadingProps {
  text: string;
  className?: string;
}

export default function AuthHeading({ text, className }: AuthHeadingProps) {
  return (
    <CardHeader className="gap-2">
      <CardTitle
        className={cn(
          "text-3xl font-inter font-bold mb-6 text-gray-800",
          className,
        )}
      >
        {text}
      </CardTitle>
    </CardHeader>
  );
}
