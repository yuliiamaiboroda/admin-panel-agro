import { Roles } from 'helpers/constants';

export interface IAuth {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
    surname: string;
    role: keyof typeof Roles;
  };
}

export interface IAuthState {
  accessToken: string | null;
  user: {
    email: string | null;
    name: string | null;
    surname: string | null;
    role: keyof typeof Roles | null;
  };
  isAuthorized: boolean;
  isLoading: boolean;
  error: string | null;
}
