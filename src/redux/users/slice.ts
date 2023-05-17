import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllUsers.pending, usersPendingReducer)
      .addCase(getAllUsers.fulfilled, getAllUsersFulfilledReducer)
      .addCase(getAllUsers.rejected, usersRejectedReducer)
      .addCase(removeUserById.pending, usersPendingReducer)
      .addCase(removeUserById.fulfilled, removeUserByIdFulfilledReducer)
      .addCase(removeUserById.rejected, usersRejectedReducer)
      .addCase(registerNewUser.pending, usersPendingReducer)
      .addCase(registerNewUser.fulfilled, registerNewUserFulfilledReducer)
      .addCase(registerNewUser.rejected, usersRejectedReducer),
});

export const usersReducer = usersSlice.reducer;
