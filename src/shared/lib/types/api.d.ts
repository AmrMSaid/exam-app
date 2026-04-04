declare type ApiResponse<T> = ErrorResponse | SuccessResponse<T>;

declare interface ErrorResponse {
  status: false;
  code: number;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
}

declare interface SuccessResponse<T> {
  status: true;
  code: number;
  message?: string;
  payload?: T;
}
