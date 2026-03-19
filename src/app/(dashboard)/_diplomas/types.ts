export interface DiplomaResponse {
  status: boolean;
  code: number;
  payload: DimplomaPayload;
}

export interface DimplomaPayload {
  data: Diploma[];
  metadata: Metadata;
}

export interface Diploma {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
