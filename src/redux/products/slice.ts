import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from 'helpers/types';
import {
  getAllProducts,
  getCertainProduct,
  createProduct,
  editProduct,
  removeProduct,
} from './operations';
import {
  removeCertainProductReducer,
  pendingProductReducer,
  rejectedProductReducer,
  getAllProductsFulfilledReducer,
  getCertainProductFulfilledReducer,
  createProductFulfilledReducer,
  editProductFulfilledReducer,
  removeProductFulfilledReducer,
} from './reducers';

export interface IState {
  entities: IProduct[];
  certain: IProduct | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  certain: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeCertainProduct: removeCertainProductReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllProducts.pending, pendingProductReducer)
      .addCase(getAllProducts.fulfilled, getAllProductsFulfilledReducer)
      .addCase(getAllProducts.rejected, rejectedProductReducer)
      .addCase(getCertainProduct.pending, pendingProductReducer)
      .addCase(getCertainProduct.fulfilled, getCertainProductFulfilledReducer)
      .addCase(getCertainProduct.rejected, rejectedProductReducer)
      .addCase(createProduct.pending, pendingProductReducer)
      .addCase(createProduct.fulfilled, createProductFulfilledReducer)
      .addCase(createProduct.rejected, rejectedProductReducer)
      .addCase(editProduct.pending, pendingProductReducer)
      .addCase(editProduct.fulfilled, editProductFulfilledReducer)
      .addCase(editProduct.rejected, rejectedProductReducer)
      .addCase(removeProduct.pending, pendingProductReducer)
      .addCase(removeProduct.fulfilled, removeProductFulfilledReducer)
      .addCase(removeProduct.rejected, rejectedProductReducer),
});

export const productsReducer = productsSlice.reducer;
export const { removeCertainProduct } = productsSlice.actions;
