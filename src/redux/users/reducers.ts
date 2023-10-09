import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser, IUserState } from 'helpers/types';

export const pendingReducer = (state: IUserState) => {
  return { ...state, isLoading: true, error: null };
};

export const rejectedReducer = (
  state: IUserState,
  { payload }: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(payload ? { error: payload } : null),
  };
};

export const getAllUsersReducer = (
  state: IUserState,
  { payload }: PayloadAction<IUser[], string>
) => {
  return { ...state, isLoading: false, entities: payload };
};

export const removeUserByIdReducer = (
  state: IUserState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item.id !== payload),
  };
};

export const registerNewUserReducer = (
  state: IUserState,
  { payload }: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, payload],
  };
};

export const updateUserByIdReducer = (
  state: IUserState,
  { payload }: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          id: payload.id,
          email: payload.email,
          name: payload.name,
          surname: payload.surname,
          role: payload.role,
        };
      }
      return item;
    }),
    ...(state.certain ? { certain: payload } : null),
  };
};

export const getCertainUserReducer = (
  state: IUserState,
  { payload }: PayloadAction<IUser, string>
) => {
  return {
    ...state,
    isLoading: false,
    certain: payload,
  };
};

export const removeCertainUserReducer = (state: IUserState) => ({
  ...state,
  certain: null,
});
