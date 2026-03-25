import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCards() {
  return (
    <div className="bg-white py-6 mt-6 flex flex-col gap-2 items-center">
      {Array.from({ length: 4 }).map((_, i) => (
        // Card
        <div key={i} className="flex gap-4 items-center w-full p-4">
          {/* Image */}
          <Skeleton className="h-16 w-16" />

          {/* Text */}
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-xl" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
