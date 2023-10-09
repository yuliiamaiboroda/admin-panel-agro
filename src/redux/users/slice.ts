import { createSlice } from '@reduxjs/toolkit';
import {
  getAllUsers,
  getCertainUser,
  registerNewUser,
  removeUserById,
  updateUserById,
} from './operations';
import type { IUserState } from 'helpers/types';
import * as users from './reducers';

export const initialState: IUserState = {
  entities: [],
  isLoading: false,
  error: null,
  certain: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeCertainUser: users.removeCertainUserReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllUsers.pending, users.pendingReducer)
      .addCase(getAllUsers.fulfilled, users.getAllUsersReducer)
      .addCase(getAllUsers.rejected, users.rejectedReducer)
      .addCase(getCertainUser.pending, users.pendingReducer)
      .addCase(getCertainUser.fulfilled, users.getCertainUserReducer)
      .addCase(getCertainUser.rejected, users.rejectedReducer)
      .addCase(removeUserById.pending, users.pendingReducer)
      .addCase(removeUserById.fulfilled, users.removeUserByIdReducer)
      .addCase(removeUserById.rejected, users.rejectedReducer)
      .addCase(registerNewUser.pending, users.pendingReducer)
      .addCase(registerNewUser.fulfilled, users.registerNewUserReducer)
      .addCase(registerNewUser.rejected, users.rejectedReducer)
      .addCase(updateUserById.pending, users.pendingReducer)
      .addCase(updateUserById.fulfilled, users.updateUserByIdReducer)
      .addCase(updateUserById.rejected, users.rejectedReducer),
});

export const usersReducer = usersSlice.reducer;
export const { removeCertainUser } = usersSlice.actions;
