import type { PayloadAction } from '@reduxjs/toolkit';
import type { IState } from './slice';
import type { IProduct } from 'helpers/types';

export const removeCertainProductReducer = (state: IState) => ({
  ...state,
  certain: null,
});

export const pendingProductReducer = (state: IState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedProductReducer = (
  state: IState,
  { payload }: PayloadAction<string | undefined>
) => ({ ...state, isLoading: false, ...(payload ? { error: payload } : null) });

export const getAllProductsFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IProduct[]>
) => ({ ...state, isLoading: false, entities: payload });

export const getCertainProductFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IProduct>
) => ({
  ...state,
  isLoading: false,
  certain: payload,
});

export const createProductFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IProduct>
) => ({ ...state, isLoading: false, entities: [...state.entities, payload] });

export const editProductFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IProduct>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.map(product =>
    product.id === payload.id ? { ...product, ...payload } : product
  ),
  ...(state.certain ? { certain: payload } : null),
});

export const removeProductFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.filter(product => product.id !== payload),
});
