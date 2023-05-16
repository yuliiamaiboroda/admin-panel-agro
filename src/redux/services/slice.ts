import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createService,
  deleteService,
  getAllServices,
  updateService,
} from './operations';

export interface IService {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt?: string;
}

interface IState {
  entities: IService[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
};

const servicesPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const servicesRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  console.log('action.payload in servicesRejectedReducer >>>', action.payload);
  return {
    ...state,
    isLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const getAllServicesFulfilledReducer = (
  state: IState,
  action: PayloadAction<IService[], string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: action.payload,
  };
};

const createServiceFulfilledReducer = (
  state: IState,
  action: PayloadAction<IService, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, action.payload],
  };
};

const deleteServiceFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item._id !== action.payload),
  };
};

const updateServiceFulfilledReducer = (
  state: IState,
  action: PayloadAction<IService, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(item => {
      if (item._id === action.payload._id) {
        return {
          ...item,
          title: action.payload.title,
          description: action.payload.description,
          imageURL: action.payload.imageURL,
          price: action.payload.price,
          contactMail: action.payload.contactMail,
          contactPhone: action.payload.contactPhone,
        };
      }
      return item;
    }),
  };
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllServices.pending, servicesPendingReducer)
      .addCase(getAllServices.fulfilled, getAllServicesFulfilledReducer)
      .addCase(getAllServices.rejected, servicesRejectedReducer)
      .addCase(createService.pending, servicesPendingReducer)
      .addCase(createService.fulfilled, createServiceFulfilledReducer)
      .addCase(createService.rejected, servicesRejectedReducer)
      .addCase(deleteService.pending, servicesPendingReducer)
      .addCase(deleteService.fulfilled, deleteServiceFulfilledReducer)
      .addCase(deleteService.rejected, servicesRejectedReducer)
      .addCase(updateService.pending, servicesPendingReducer)
      .addCase(updateService.fulfilled, updateServiceFulfilledReducer)
      .addCase(updateService.rejected, servicesRejectedReducer),
});

export const servicesReducer = servicesSlice.reducer;