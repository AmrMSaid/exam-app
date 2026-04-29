import { IErrorResponse } from "@/shared/lib/types/api";

export const RESPONSES = {
  unauthorized: {
    status: false,
    code: 401,
    message: "Unauthorized.",
  } as IErrorResponse,
};
