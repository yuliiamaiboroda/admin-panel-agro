import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllUsers,
  getCertainUser,
  registerNewUser,
  removeUserById,
  updateUserById,
} from './operations';
import type { Roles } from 'helpers/constants';

export interface IUser {
  _id: string;
  email: string;
  name: string;
  surname: string;
  role: keyof typeof Roles;
  createdAt?: string;
}

interface IState {
  entities: IUser[];
  isLoading: boolean;
  error: string | null;
  certain: IUser | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
  certain: null,
};

const usersPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const usersRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const getAllUsersFulfilledReducer = (
  state: IState,
  action: PayloadAction<IUser[], string>
) => {
  return { ...state, isLoading: false, entities: action.payload };
};

const removeUserByIdFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item._id !== action.payload),
  };
};

const registerNewUserFulfilledReducer = (
  state: IState,
  action: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, action.payload],
  };
};

const updateUserByIdFulfilledReducer = (
  state: IState,
  action: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(item => {
      if (item._id === action.payload._id) {
        return {
          ...item,
          _id: action.payload._id,
          email: action.payload.email,
          name: action.payload.name,
          surname: action.payload.surname,
          role: action.payload.role,
        };
      }
      return item;
    }),
    ...(state.certain ? { certain: action.payload } : null),
  };
};

const getCertainFulfilledReducer = (
  state: IState,
  action: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    certain: action.payload,
  };
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeCertainUser(state) {
      return { ...state, certain: null };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllUsers.pending, usersPendingReducer)
      .addCase(getAllUsers.fulfilled, getAllUsersFulfilledReducer)
      .addCase(getAllUsers.rejected, usersRejectedReducer)
      .addCase(getCertainUser.pending, usersPendingReducer)
      .addCase(getCertainUser.fulfilled, getCertainFulfilledReducer)
      .addCase(getCertainUser.rejected, usersRejectedReducer)
      .addCase(removeUserById.pending, usersPendingReducer)
      .addCase(removeUserById.fulfilled, removeUserByIdFulfilledReducer)
      .addCase(removeUserById.rejected, usersRejectedReducer)
      .addCase(registerNewUser.pending, usersPendingReducer)
      .addCase(registerNewUser.fulfilled, registerNewUserFulfilledReducer)
      .addCase(registerNewUser.rejected, usersRejectedReducer)
      .addCase(updateUserById.pending, usersPendingReducer)
      .addCase(updateUserById.fulfilled, updateUserByIdFulfilledReducer)
      .addCase(updateUserById.rejected, usersRejectedReducer),
});

export const usersReducer = usersSlice.reducer;
export const { removeCertainUser } = usersSlice.actions;
