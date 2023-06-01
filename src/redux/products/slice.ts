import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IProduct } from 'helpers/types';
import {
  getAllProducts,
  getCertainProduct,
  createProduct,
  editProduct,
  removeProduct,
} from './operations';

interface IState {
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
  reducers: {
    removeCertainProduct(state) {
      return { ...state, certain: null };
    },
  },
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
      .addCase(getCertainProduct.pending, pendingReducer)
      .addCase(getCertainProduct.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          certain: action.payload,
        };
      })
      .addCase(getCertainProduct.rejected, rejectedReducer)
      .addCase(createProduct.pending, pendingReducer)
      .addCase(createProduct.fulfilled, (state, action) => {
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
          ...(state.certain ? { certain: action.payload } : null),
        };
      })
      .addCase(editProduct.rejected, rejectedReducer)
      .addCase(removeProduct.pending, pendingReducer)
      .addCase(removeProduct.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: state.entities.filter(
            product => product._id !== action.payload
          ),
        };
      })
      .addCase(removeProduct.rejected, rejectedReducer),
});

export const productsReducer = productsSlice.reducer;
export const { removeCertainProduct } = productsSlice.actions;
