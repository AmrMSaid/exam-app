"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  ChevronDown,
  CircleQuestionMark,
  MoveRight,
  Timer,
} from "lucide-react";
import { getExams } from "../lib/apis/exams.api";
import { Button } from "@/shared/components/ui/button";
import { ExamsListSkeleton } from "../skeletons/exams-list.skeleton";

interface ExamsPageParams {
  id: string;
}

export default function ExamsList({ id }: ExamsPageParams) {
  // Manage server state with useInfiniteQuery to fetch with pagination
  const {
    data: exams,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["exams", id],
    queryFn: ({ pageParam }) => getExams(id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastpage) => {
      if (
        lastpage.payload.metadata.page === lastpage.payload.metadata.totalPages
      )
        return undefined;
      return lastpage.payload.metadata.page + 1;
    },
  });

  // Handle state info in footer
  function handleState() {
    if (isLoading) return "Loading exams...";
    else if (isFetchingNextPage) return "Loading more exams...";
    else if (hasNextPage) return "Scroll to view more";
    else return "End of list";
  }

  // Get loaded data for InfiniteScroll component
  const loadedData = exams?.pages.flatMap((page) => page.payload.data) ?? [];

  return (
    <>
      {/* Handle fetch on scoll with react-infinite-scroll-component */}
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        height={475}
        dataLength={loadedData.length}
        next={() => {
          if (!isLoading && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
        loader={null}
      >
        {/* Loading skeleton */}
        {isLoading ? <ExamsListSkeleton /> : ""}

        {/* Exams list */}
        {exams && (
          <div className="bg-white p-6 mt-6 flex flex-col gap-4">
            {exams?.pages
              .flatMap((page) => page.payload.data)
              .map((exam) => (
                // Card
                <div
                  key={exam.id}
                  className="bg-blue-50 p-4 flex gap-4 relative group outline-0 hover:outline-1 outline-blue-200 outline-dashed h-31"
                >
                  {/* Image */}
                  <div className="bg-blue-100 w-fit p-3.5 outline-1 outline-blue-300">
                    <img
                      // src={exam.image}
                      src={`/api/image?url=${encodeURIComponent(exam.image)}`}
                      alt={exam.title}
                      className="w-16 h-16 object-cover object-center"
                    />
                  </div>

                  {/* Header and Description */}
                  <div className="flex flex-col gap-1.5 w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      {/* Title */}
                      <h3 className="text-blue-600 text-xl font-semibold">
                        {exam.title}
                      </h3>
                      {/* Details */}
                      <div className="flex items-center gap-1.5">
                        <CircleQuestionMark size={18} />
                        <p>25 Questions</p>
                        <span className="outline-1 outline-gray-300 h-4"></span>
                        <Timer size={18} />
                        <p>{exam.duration} minutes</p>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {exam.description}
                    </p>
                  </div>
                  <Button className="bg-blue-600 py-1.5 px-4 absolute bottom-0 right-0 m-2.5 hidden group-hover:flex gap-2.5 items-center uppercase">
                    start
                    <MoveRight size={18} />
                  </Button>
                </div>
              ))}
          </div>
        )}
      </InfiniteScroll>

      {/* State info footer */}
      <footer className="flex flex-col items-center justify-center mt-8">
        <p className="text-gray-600">{handleState()}</p>
        {!isLoading && !isFetchingNextPage && hasNextPage ? (
          <ChevronDown size={18} className="text-gray-400" />
        ) : (
          ""
        )}
      </footer>
    </>
  );
}
