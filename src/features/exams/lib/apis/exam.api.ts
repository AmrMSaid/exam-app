import { IExamsResponse } from "../types/exam";

export const getExams = async (id: string, page: number) => {
  const response = await fetch(
    `/api/exams?diplomaId=${id}&page=${page}&limit=3`,
  );
  const data: IExamsResponse = await response.json();
  return data;
};
