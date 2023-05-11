import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, registerNewUser, removeUserById } from './operations';

export interface IUser {
  _id: string;
  email: string;
  name: string;
  surname: string;
  role: string;
}

interface IState {
  entities: IUser[];
  isLoading: boolean;
  error: string | null;
  errorCode: number | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
  errorCode: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllUsers.pending, state => {
        return { ...state, isLoading: true, error: null, errorCode: null };
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, entities: payload };
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...(payload
            ? { error: payload.message, errorCode: payload.code }
            : null),
        };
      })
      .addCase(removeUserById.pending, state => {
        return { ...state, isLoading: true, error: null, errorCode: null };
      })
      .addCase(removeUserById.fulfilled, (state, { payload }) => {
        const filteredEntities = state.entities.filter(
          el => el._id !== payload._id
        );
        return { ...state, isLoading: false, entities: filteredEntities };
      })
      .addCase(removeUserById.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...(payload
            ? { error: payload.message, errorCode: payload.code }
            : null),
        };
      })
      .addCase(registerNewUser.pending, state => {
        return { ...state, isLoading: true, error: null, errorCode: null };
      })
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          entities: [...state.entities, payload],
        };
      })
      .addCase(registerNewUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...(payload
            ? { error: payload.message, errorCode: payload.code }
            : null),
        };
      }),
});

export const usersReducer = usersSlice.reducer;
