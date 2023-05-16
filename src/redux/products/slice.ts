import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, createProduct } from './operations';

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

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllProducts.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: action.payload,
        };
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      })
      .addCase(createProduct.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);
        return {
          ...state,
          isLoading: false,
          entities: [...state.entities, action.payload],
        };
      })
      .addCase(createProduct.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      }),
});

export const productsReducer = productsSlice.reducer;
