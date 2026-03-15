"use client";

import { useQuery } from "@tanstack/react-query";
import { DiplomaResponse } from "./types";

export default function DiplomasList() {
  const {
    data: diplomas,
    error,
    isError,
  } = useQuery({
    queryKey: ["diplomas"],
    queryFn: async () => {
      const response = await fetch("/api/diplomas");
      const data: DiplomaResponse = await response.json();
      return data.payload;
    },
    select: (response) => response.data,
  });

  if (isError) {
    console.error("Query Error:", error);
  }

  return (
    <div className="grid grid-cols-3 gap-2.5 p-6">
      {diplomas?.map((diploma) => (
        <div key={diploma.id} className="h-52">
          <img
            src={diploma.image}
            alt={diploma.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
