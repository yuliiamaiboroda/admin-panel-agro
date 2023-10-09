import type { PayloadAction } from '@reduxjs/toolkit';
import type { IProductState } from 'helpers/types';
import type { IProduct } from 'helpers/types';

export const removeCertainProductReducer = (state: IProductState) => ({
  ...state,
  certain: null,
});

export const pendingReducer = (state: IProductState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedReducer = (
  state: IProductState,
  { payload }: PayloadAction<string | undefined>
) => ({ ...state, isLoading: false, ...(payload ? { error: payload } : null) });

export const getAllProductsReducer = (
  state: IProductState,
  { payload }: PayloadAction<IProduct[]>
) => ({ ...state, isLoading: false, entities: payload });

export const getCertainProductReducer = (
  state: IProductState,
  { payload }: PayloadAction<IProduct>
) => ({
  ...state,
  isLoading: false,
  certain: payload,
});

export const createProductReducer = (
  state: IProductState,
  { payload }: PayloadAction<IProduct>
) => ({ ...state, isLoading: false, entities: [...state.entities, payload] });

export const editProductReducer = (
  state: IProductState,
  { payload }: PayloadAction<IProduct>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.map(product =>
    product.id === payload.id ? { ...product, ...payload } : product
  ),
  ...(state.certain ? { certain: payload } : null),
});

export const removeProductReducer = (
  state: IProductState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.filter(product => product.id !== payload),
});
