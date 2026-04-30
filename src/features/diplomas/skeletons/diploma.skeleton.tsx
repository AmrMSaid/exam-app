import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export function DiplomaSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        // Card
        <Card key={i}>
          {/* Image */}
          <CardContent>
            <Skeleton className="aspect-video w-full h-32" />
          </CardContent>

          {/* Text */}
          <CardHeader>
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
