"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircleQuestionMark, MoveRight, Timer } from "lucide-react";
import { getExams } from "../lib/apis/exams.api";
import { Button } from "@/shared/components/ui/button";
import { ExamsListSkeleton } from "../skeletons/exams-list.skeleton";
import Link from "next/link";
import { slugify } from "@/shared/lib/utils/slugify";
import Image from "next/image";
import { useMemo } from "react";
import ListStatus from "@/shared/components/list-status";
import ExamItem from "./exam-item";

interface ExamListParams {
  id: string;
}

export default function ExamList({ id }: ExamListParams) {
  // Queries
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

  // Variables
  const allExams = useMemo(
    () => exams?.pages.flatMap((page) => page.payload.data) || [],
    [exams],
  );

  return (
    <>
      {/* Handle fetch on scoll with react-infinite-scroll-component */}
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        height={475}
        dataLength={allExams.length}
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
        <article className="bg-white p-6 mt-6 flex flex-col gap-4">
          {allExams.map((exam) => (
            // Card
            <ExamItem key={exam.id} exam={exam} />
          ))}
        </article>
      </InfiniteScroll>

      {/* Status message footer */}
      <ListStatus
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        resourceName="exams"
      />
    </>
  );
}
