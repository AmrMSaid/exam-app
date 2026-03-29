declare type ApiResponse<T> = T | { message: string };

export interface ErrorResponse {
  status: false;
  code: number;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
}

export interface SuccessResponse<T> {
  status: true;
  code: number;
  message?: string;
  payload?: T;
}
