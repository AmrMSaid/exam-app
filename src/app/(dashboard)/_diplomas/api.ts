import { DiplomaResponse } from "./types";

export const getDiplomas = async (page: number) => {
  const response = await fetch(`/api/diplomas?page=${page}&limit=6`);
  const data: DiplomaResponse = await response.json();
  return data;
};
