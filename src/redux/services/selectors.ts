import type { RootState } from 'redux/store';

export const selectServices = (state: RootState) => state.services.entities
export const selectIsLoading = (state: RootState) => state.services.isLoading
export const selectError = (state: RootState) => state.services.error
export const selectCertainService = (state: RootState) => state.services.certain
