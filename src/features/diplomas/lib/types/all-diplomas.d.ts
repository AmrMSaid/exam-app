import { IDocumentFields } from "@/shared/lib/types/api";

export interface IDiplomasResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
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
