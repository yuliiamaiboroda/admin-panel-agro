import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

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
      }),
});

export const productsReducer = productsSlice.reducer;
