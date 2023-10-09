import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser, IUserState } from 'helpers/types/auth-interface';
import { initialState } from './slice';

export const pendingReducer = (state: IUserState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedReducer = (
  state: IUserState,
  { payload }: PayloadAction<string | undefined>
) => ({
  ...state,
  isLoading: false,
  ...(payload ? { error: payload } : null),
});

export const refreshToken = (
  state: IUserState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  accessToken: payload,
});

export const loginUser = (
  state: IUserState,
  { payload }: PayloadAction<IUser>
) => ({
  ...state,
  isLoading: false,
  isAuthorized: true,
  accessToken: payload.accessToken,
  user: payload.user,
});

export const loguotUser = () => initialState;

export const fetchCurrentUser = (
  state: IUserState,
  { payload }: PayloadAction<IUser['user']>
) => ({
  ...state,
  isLoading: false,
  isAuthorized: true,
  user: payload,
});
