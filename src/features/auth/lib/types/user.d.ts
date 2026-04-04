import { USER_ROLES } from "../../../../shared/lib/constants/api.constants";

export type Role = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export interface IUser {
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
