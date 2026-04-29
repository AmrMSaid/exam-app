import { ChevronDown } from "lucide-react";

interface ListStatusProps {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  resourceName?: "exams" | "diplomas";
}

export default function ListStatus({
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  resourceName,
}: ListStatusProps) {
  // Variables
  const statusMessage = isLoading
    ? `Loading ${resourceName}...`
    : isFetchingNextPage
      ? `Loading more ${resourceName}...`
      : hasNextPage
        ? "Scroll to view more"
        : "End of list";

  const showArrow = !isLoading && !isFetchingNextPage && hasNextPage;

  return (
    <footer
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center mt-8"
    >
      <p className="text-gray-600">{statusMessage}</p>
      {showArrow && <ChevronDown size={18} className="text-gray-400" />}
    </footer>
  );
}
