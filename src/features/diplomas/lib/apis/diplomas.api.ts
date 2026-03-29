import { DiplomasResponse } from "../types/diplomas";
import { DiplomaByIdResponse } from "../types/diploma";

export const getDiplomas = async (page: number) => {
  const response = await fetch(`/api/diplomas?page=${page}&limit=6`);
  const data: DiplomasResponse = await response.json();
  return data;
};

export const getDiplomaById = async (id: string) => {
  const response = await fetch(`${process.env.API}diplomas/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const data: DiplomaByIdResponse = await response.json();
  console.log(data);

  return data;
};
