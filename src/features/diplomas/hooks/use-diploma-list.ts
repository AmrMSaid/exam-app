"use client";

import { IApiResponse, IPaginatedResponse } from "@/shared/lib/types/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { PAGINATION_LIMIT } from "@/shared/lib/constants/api.constants";
import { DIPLOMA_KEYS } from "../lib/apis/diploma.options";
import { IDiploma } from "../lib/types/diploma";

export function useDiplomaList() {
  // Navigation
  const searchParams = useSearchParams();

  // Variables
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || PAGINATION_LIMIT);

  // Queries
  return useInfiniteQuery<IPaginatedResponse<IDiploma>, Error>({
    queryKey: DIPLOMA_KEYS.list(page, limit),
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/diplomas?page=${pageParam}&limit=${limit}`,
      );
      const data: IApiResponse<IPaginatedResponse<IDiploma>> =
        await response.json();

      if (!data.status) throw new Error(data.message);
      if (!data.payload) throw new Error("Diplomas payload is missing");

      return data.payload;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.metadata.page === lastPage.metadata.totalPages)
        return undefined;

      return lastPage.metadata.page + 1;
    },
  });
}
