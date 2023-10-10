import { PayloadAction } from '@reduxjs/toolkit';
import type { IService, IServiceState } from 'helpers/types';
import { translateError } from 'utils';

export const pendingReducer = (state: IServiceState) => {
  return { ...state, isLoading: true, error: null };
};

export const rejectedReducer = (
  state: IServiceState,
  { payload }: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(payload ? { error: translateError(payload) } : null),
  };
};

export const removeCertainServiceReducer = (state: IServiceState) => ({
  ...state,
  certain: null,
});

export const getAllServicesReducer = (
  state: IServiceState,
  { payload }: PayloadAction<IService[], string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: payload,
  };
};

export const getCertainServiceReducer = (
  state: IServiceState,
  { payload }: PayloadAction<IService, string>
) => {
  return {
    ...state,
    isLoading: false,
    certain: payload,
  };
};

export const createServiceReducer = (
  state: IServiceState,
  { payload }: PayloadAction<IService, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, payload],
  };
};

export const deleteServiceReducer = (
  state: IServiceState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item.id !== payload),
  };
};

export const updateServiceReducer = (
  state: IServiceState,
  { payload }: PayloadAction<IService, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          title: payload.title,
          description: payload.description,
          imageURL: payload.imageURL,
          price: payload.price,
          contactMail: payload.contactMail,
          contactPhone: payload.contactPhone,
        };
      }
      return item;
    }),
    ...(state.certain ? { certain: payload } : null),
  };
};
