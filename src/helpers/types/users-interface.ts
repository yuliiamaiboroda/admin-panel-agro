import type { Roles } from 'helpers/constants';

export interface IUser {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: keyof typeof Roles;
  createdAt?: string;
}

export interface IUserState {
  entities: IUser[];
  isLoading: boolean;
  error: string | null;
  certain: IUser | null;
}
