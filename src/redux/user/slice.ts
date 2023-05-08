import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  loginUser,
  // refreshUser
} from './operations';

interface IUserState {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    email: string | null;
    name: string | null;
    surname: string | null;
    role: string | null;
  };
  isAuthorized: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  accessToken: null,
  refreshToken: null,
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
    addUser: (state, action: PayloadAction<string>) => {
      return { ...state, accessToken: action.payload };
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
          refreshToken: action.payload.refreshToken,
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
      });
    // .addCase(refreshUser.pending, state => {
    //   return { ...state, isLoading: true, error: null };
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isAuthorized: true,
    //     accessToken: action.payload.accessToken,
    //     refreshToken: action.payload.refreshToken,
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
    // });
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
