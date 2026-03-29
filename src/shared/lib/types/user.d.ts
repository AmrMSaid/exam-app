import { USER_ROLES } from "../constants/api.constants";

export type Role = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export interface User {
  id: string;
  username: string;
  email: string;
  phone: string | null;
  firstName: string;
  lastName: string;
  profilePhoto: string | null;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: Role;
  createdAt: string;
  updatedAt: string;
}
