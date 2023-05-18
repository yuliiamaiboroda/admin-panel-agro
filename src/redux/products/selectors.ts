import type { RootState } from 'redux/store';

export const selectProducts = (state: RootState) => state.products.entities;

export const selectCertainProduct = (state: RootState) =>
  state.products.certain;

export const selectIsProductLoading = (state: RootState) =>
  state.products.isLoading;

export const selectProductError = (state: RootState) => state.products.error;
