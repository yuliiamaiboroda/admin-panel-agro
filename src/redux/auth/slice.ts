import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, loginUser, logoutUser } from './operations';
import type { IUserState } from 'helpers/types/auth-interface';
import * as auth from './reducers';

export const initialState: IUserState = {
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
      .addCase(fetchCurrentUser.rejected, auth.rejectedReducer);
  },
});

export const { refreshToken, refreshTokenError } = authSlice.actions;
export const authReducer = authSlice.reducer;
