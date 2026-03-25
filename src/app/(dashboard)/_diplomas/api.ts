import { DiplomasResponse } from "./types";

export const getDiplomas = async (page: number) => {
  const response = await fetch(`/api/diplomas?page=${page}&limit=6`);
  const data: DiplomasResponse = await response.json();
  return data;
};
