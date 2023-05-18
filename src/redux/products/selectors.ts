import type { RootState } from 'redux/store';

export const selectProducts = (state: RootState) => state.products.entities;

export const selectCertainProduct = (state: RootState) =>
  state.products.certain;
