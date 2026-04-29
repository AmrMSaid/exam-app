export interface IDiplomaByIdResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
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
