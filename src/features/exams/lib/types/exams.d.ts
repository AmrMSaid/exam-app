export interface IExamsResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
  data: IExam[];
  metadata: Metadata;
}

export interface IExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  diplomaId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  diploma: IDiploma;
  questionsCount: number;
}

export interface IDiploma {
  id: string;
  title: string;
}

export interface Metadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
