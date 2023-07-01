import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  loginUser,
  logoutUser,
  // refreshUser,
} from './operations';
import type { Roles } from 'helpers/constants';

interface IUserState {
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

const userSlice = createSlice({
  name: 'user',
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
      .addCase(loginUser.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          accessToken: action.payload.accessToken,
          user: action.payload.user,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      })
      // .addCase(refreshUser.pending, state => {
      //   return { ...state, isLoading: true, error: null };
      // })
      // .addCase(refreshUser.fulfilled, (state, action) => {
      //   return {
      //     ...state,
      //     isLoading: false,
      //     isAuthorized: true,
      //     accessToken: action.payload.accessToken,
      //     user: action.payload.user,
      //   };
      // })
      // .addCase(refreshUser.rejected, (state, action) => {
      //   console.log(action.payload);
      //   return {
      //     ...state,
      //     isLoading: false,
      //     ...(action.payload ? { error: action.payload } : null),
      //   };
      // })
      .addCase(logoutUser.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(logoutUser.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      })
      .addCase(fetchCurrentUser.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isAuthorized: true,
          user: action.payload,
        };
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      });
  },
});

export const { refreshToken, refreshTokenError } = userSlice.actions;
export const userReducer = userSlice.reducer;
