import { createSlice } from '@reduxjs/toolkit';
import type { IProductState } from 'helpers/types';
import {
  getAllProducts,
  getCertainProduct,
  createProduct,
  editProduct,
  removeProduct,
} from './operations';
import * as products from './reducers';

export const initialState: IProductState = {
  entities: [],
  certain: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeCertainProduct: products.removeCertainProductReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllProducts.pending, products.pendingReducer)
      .addCase(getAllProducts.fulfilled, products.getAllProductsReducer)
      .addCase(getAllProducts.rejected, products.rejectedReducer)
      .addCase(getCertainProduct.pending, products.pendingReducer)
      .addCase(getCertainProduct.fulfilled, products.getCertainProductReducer)
      .addCase(getCertainProduct.rejected, products.rejectedReducer)
      .addCase(createProduct.pending, products.pendingReducer)
      .addCase(createProduct.fulfilled, products.createProductReducer)
      .addCase(createProduct.rejected, products.rejectedReducer)
      .addCase(editProduct.pending, products.pendingReducer)
      .addCase(editProduct.fulfilled, products.editProductReducer)
      .addCase(editProduct.rejected, products.rejectedReducer)
      .addCase(removeProduct.pending, products.pendingReducer)
      .addCase(removeProduct.fulfilled, products.removeProductReducer)
      .addCase(removeProduct.rejected, products.rejectedReducer),
});

export const productsReducer = productsSlice.reducer;
export const { removeCertainProduct } = productsSlice.actions;
