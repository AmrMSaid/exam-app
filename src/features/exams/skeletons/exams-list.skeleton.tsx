import { Skeleton } from "@/shared/components/ui/skeleton";

export function SkeletonCards() {
  return (
    <div className="bg-white p-4 mt-6 flex flex-col gap-2 items-center">
      {Array.from({ length: 3 }).map((_, i) => (
        // Card
        <div key={i} className="flex gap-4 items-center w-full p-4">
          {/* Image */}
          <Skeleton className="h-24 w-28" />

          {/* Text */}
          <div className="space-y-4 w-full">
            <Skeleton className="h-5 w-xl" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
