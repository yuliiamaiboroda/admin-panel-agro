import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  loginUser,
  logoutUser,
  updatePasswordById,
  restorePasswordViaEmail,
} from './operations';
import type { IAuthState } from 'helpers/types/auth-interface';
import * as auth from './reducers';

export const initialState: IAuthState = {
  accessToken: null,
  user: {
    email: null,
    name: null,
    surname: null,
    role: null,
  },
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshToken: auth.refreshToken,
    refreshTokenError: auth.loguotUser,
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, auth.pendingReducer)
      .addCase(loginUser.fulfilled, auth.loginUser)
      .addCase(loginUser.rejected, auth.rejectedReducer)
      .addCase(logoutUser.pending, auth.pendingReducer)
      .addCase(logoutUser.fulfilled, auth.loguotUser)
      .addCase(logoutUser.rejected, auth.rejectedReducer)
      .addCase(fetchCurrentUser.pending, auth.pendingReducer)
      .addCase(fetchCurrentUser.fulfilled, auth.fetchCurrentUser)
      .addCase(fetchCurrentUser.rejected, auth.rejectedReducer)
      .addCase(updatePasswordById.pending, auth.pendingReducer)
      .addCase(updatePasswordById.fulfilled, auth.updatePasswordByIdReducer)
      .addCase(updatePasswordById.rejected, auth.rejectedReducer)
      .addCase(restorePasswordViaEmail.pending, auth.pendingReducer)
      .addCase(
        restorePasswordViaEmail.fulfilled,
        auth.updatePasswordByIdReducer
      )
      .addCase(restorePasswordViaEmail.rejected, auth.rejectedReducer);
  },
});

export const { refreshToken, refreshTokenError } = authSlice.actions;
export const authReducer = authSlice.reducer;
