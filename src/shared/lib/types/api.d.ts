declare interface IErrorResponse {
  status: false;
  code: number;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
}

declare interface ISuccessResponse<T> {
  status: true;
  code: number;
  message?: string;
  payload?: T;
}

declare type IApiResponse<T> = IErrorResponse | ISuccessResponse<T>;

export interface IPaginatedResponse<T> {
  data: T[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }
}

export interface IDocumentFields {
  createdAt: string;
  updatedAt: string;
}