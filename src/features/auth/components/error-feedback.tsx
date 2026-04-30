import { CircleX } from "lucide-react";

interface ErrorFeedbackProps {
  error: string;
}

export default function ErrorFeedback({ error }: ErrorFeedbackProps) {
  return (
    <div className="flex justify-center mt-10">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2">
          <div className="w-8 h-8 flex items-center justify-center text-red-600">
            <CircleX
              size={18}
              fill="white"
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </div>
        </div>
        <div className="outline-1 outline-red-600 bg-red-50 text-red-600 text-center py-2 mx-4.5 text-sm">
          {error}
        </div>
      </div>
    </div>
  );
}
