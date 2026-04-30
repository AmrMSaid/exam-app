import { IDocumentFields } from "@/shared/lib/types/api";

// All diplomas

export interface IDiplomasResponse {
  status: boolean;
  code: number;
  payload: IdiplomasPayload;
}

export interface IdiplomasPayload {
  data: IDiploma[];
  metadata: Metadata;
}

export interface IDiploma extends IDocumentFields {
  id: string;
  title: string;
  description: string;
  image: string | null;
  immutable: boolean;
}

export interface Metadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Diploma by ID

export interface IDiplomaByIdResponse {
  status: boolean;
  code: number;
  payload: IdiplomaByIdPayload;
}

export interface IdiplomaByIdPayload {
  diploma: IDiplomaById;
}

export interface IDiplomaById {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  exams: IDiplomaExam[];
}

export interface IDiplomaExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  createdAt: string;
  questionsCount: number;
}
