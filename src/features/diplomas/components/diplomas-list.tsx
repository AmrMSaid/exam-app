"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiplomas } from "../lib/apis/diplomas.api";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChevronDown } from "lucide-react";
import { SkeletonCards } from "../skeletons/diplomas-list.skeleton";
import Link from "next/link";

export default function DiplomasList() {
  // Manage server state with useInfiniteQuery
  const {
    data: diplomas,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["diplomas"],
    queryFn: ({ pageParam }) => getDiplomas(pageParam),
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
    if (isLoading) return "Loading diplomas...";
    else if (isFetchingNextPage) return "Loading more diplomas...";
    else if (hasNextPage) return "Scroll to view more";
    else return "End of list";
  }

  // Get loaded data for InfiniteScroll component
  const loadedData = diplomas?.pages.flatMap((page) => page.payload.data) ?? [];

  return (
    <>
      {/* Handle fetch on scoll with react-infinite-scroll-component */}
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        height={470}
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
        {isLoading ? <SkeletonCards /> : ""}

        {/* Diplomas list */}
        {diplomas && (
          <div className="grid grid-cols-3 gap-2.5 py-6">
            {diplomas?.pages
              .flatMap((page) => page.payload.data)
              .map((diploma) => (
                // Card
                <Link
                  key={diploma.id}
                  href={`/${diploma.id}`}
                  className="relative"
                >
                  {/* Image */}
                  <div className="h-52">
                    <img
                      // src={diploma.image}
                      src={`/api/image?url=${encodeURIComponent(diploma.image)}`}
                      alt={diploma.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Title and description */}
                  <div className="absolute w-full max-h-full z-10 inset-0 p-4 text-white flex group">
                    <div className="bg-blue-600/75 backdrop-blur-md p-2.5 max-h-fit w-full mt-auto">
                      <h3 className="text-xl font-semibold">{diploma.title}</h3>
                      <p className="text-sm line-clamp-1 group-hover:line-clamp-none opacity-80">
                        {diploma.description}
                      </p>
                    </div>
                  </div>
                </Link>
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
