import { CardHeader, CardTitle } from "@/shared/components/ui/card";

interface AuthHeadingProps {
  text: string;
}

export default function AuthHeading({ text }: AuthHeadingProps) {
  return (
    <CardHeader className="gap-2">
      <CardTitle className="text-3xl font-inter font-bold text-gray-800 mb-4">
        {text}
      </CardTitle>
    </CardHeader>
  );
}
