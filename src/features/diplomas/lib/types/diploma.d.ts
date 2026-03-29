export interface DiplomaByIdResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
  diploma: DiplomaById;
}

export interface DiplomaById {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  exams: Exam[];
}

export interface DiplomaExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  createdAt: string;
}
