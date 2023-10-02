import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchCurrentUser, loginUser, logoutUser } from './operations';
import type { IUserState } from 'helpers/types/auth-interface';
import { authPendingReducer, authRejectedReducer } from './reducers';

const initialState: IUserState = {
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
    refreshToken: (state, action: PayloadAction<string>) => {
      return { ...state, accessToken: action.payload };
    },
    refreshTokenError: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, authPendingReducer)
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          accessToken: action.payload.accessToken,
          user: action.payload.user,
        };
      })
      .addCase(loginUser.rejected, authRejectedReducer)
      .addCase(logoutUser.pending, authPendingReducer)
      .addCase(logoutUser.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(logoutUser.rejected, authRejectedReducer)
      .addCase(fetchCurrentUser.pending, authPendingReducer)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          user: action.payload,
        };
      })
      .addCase(fetchCurrentUser.rejected, authRejectedReducer);
  },
});

export const { refreshToken, refreshTokenError } = authSlice.actions;
export const authReducer = authSlice.reducer;
