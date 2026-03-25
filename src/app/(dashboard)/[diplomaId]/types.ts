import { Diploma } from "../_diplomas/types";

export interface ExamsResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
  data: Exam[];
  metadata: Metadata;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  diplomaId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  diploma: Diploma;
  _count: Count;
}

export interface Count {
  questions: number;
}

export interface Metadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
