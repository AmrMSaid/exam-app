import { USER_ROLES } from "../constants/user.constant";

// User

export type IRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

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
  role: IRole;
  createdAt: string;
  updatedAt: string;
}

// Update profile

export type IUpdateProfileFields = z.infer<typeof updateProfileBodySchema>;

export type IUpdateProfileResponse = IUser;
