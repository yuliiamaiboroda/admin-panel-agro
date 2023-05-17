import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getAllProducts, createProduct, editProduct } from './operations';

export interface IProduct {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

interface IState {
  entities: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
};

const pendingReducer = (state: IState) => ({
  ...state,
  isLoading: true,
  error: null,
});

const rejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => ({
  ...state,
  isLoading: false,
  ...(action.payload ? { error: action.payload } : null),
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllProducts.pending, pendingReducer)
      .addCase(getAllProducts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: action.payload,
        };
      })
      .addCase(getAllProducts.rejected, rejectedReducer)
      .addCase(createProduct.pending, pendingReducer)
      .addCase(createProduct.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);
        return {
          ...state,
          isLoading: false,
          entities: [...state.entities, action.payload],
        };
      })
      .addCase(createProduct.rejected, rejectedReducer)
      .addCase(editProduct.pending, pendingReducer)
      .addCase(editProduct.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: state.entities.map(product => {
            if (product._id !== action.payload._id) {
              return product;
            }
            return { ...product, ...action.payload };
          }),
        };
      })
      .addCase(editProduct.rejected, rejectedReducer),
});

export const productsReducer = productsSlice.reducer;
