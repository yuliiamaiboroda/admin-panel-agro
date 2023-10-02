import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserState } from 'helpers/types/auth-interface';

export const authPendingReducer = (state: IUserState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const authRejectedReducer = (
  state: IUserState,
  { payload }: PayloadAction<string | undefined>
) => ({
  ...state,
  isLoading: false,
  ...(payload ? { error: payload } : null),
});
