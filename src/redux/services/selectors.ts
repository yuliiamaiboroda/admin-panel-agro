import type { RootState } from 'redux/store';

export const selectServices = (state: RootState) => state.services.entities
export const selectIsLoading = (state: RootState) => state.services.isLoading
