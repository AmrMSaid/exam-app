"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { DiplomaSkeleton } from "../skeletons/diploma.skeleton";
import { useDiplomaList } from "../hooks/use-diploma-list";
import { useMemo } from "react";
import DiplomaItem from "./diploma-item";
import ListStatus from "@/shared/components/list-status";

export default function DiplomaList() {
  // Queries
  const {
    data: diplomaPages,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useDiplomaList();

  // Variables
  const allDiplomas = useMemo(
    () => diplomaPages?.pages.flatMap((page) => page.data) || [],
    [diplomaPages],
  );

  return (
    <>
      {/* Handle fetch on scroll with react-infinite-scroll-component */}
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        height={470}
        dataLength={allDiplomas.length}
        next={() => {
          if (!isLoading && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
        loader={null}
      >
        {/* Loading skeleton */}
        {isLoading ? <DiplomaSkeleton /> : ""}

        {/* Diplomas list */}
        <div className="grid grid-cols-3 gap-2.5 py-6">
          {allDiplomas.map((diploma) => (
            // Card
            <DiplomaItem key={diploma.id} diploma={diploma} />
          ))}
        </div>
      </InfiniteScroll>

      {/* Status message footer */}
      <ListStatus
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        resourceName="diplomas"
      />
    </>
  );
}
