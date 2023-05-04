import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from './operations';

interface IUserState {
  accessToken: string | null;
  isAuthorized: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  accessToken: null,
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
          accessToken: action.payload,
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
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
