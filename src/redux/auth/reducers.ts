import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuth, IAuthState } from 'helpers/types/auth-interface';
import { initialState } from './slice';

export const pendingReducer = (state: IAuthState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedReducer = (
  state: IAuthState,
  { payload }: PayloadAction<string | undefined>
) => ({
  ...state,
  isLoading: false,
  ...(payload ? { error: payload } : null),
});

export const refreshToken = (
  state: IAuthState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  accessToken: payload,
});

export const loginUser = (
  state: IAuthState,
  { payload }: PayloadAction<IAuth>
) => ({
  ...state,
  isLoading: false,
  isAuthorized: true,
  accessToken: payload.accessToken,
  user: payload.user,
});

export const loguotUser = () => initialState;

export const fetchCurrentUser = (
  state: IAuthState,
  { payload }: PayloadAction<IAuth['user']>
) => ({
  ...state,
  isLoading: false,
  isAuthorized: true,
  user: payload,
});
