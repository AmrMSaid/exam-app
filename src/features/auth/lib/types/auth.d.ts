import { IUser } from "@/features/auth/lib/types/user";

export interface LoginFields {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: IUser;
}

export interface UpdateProfileFields {
  firstName: string;
  lastName: string;
}

export type UpdateProfileResponse = IUser;
