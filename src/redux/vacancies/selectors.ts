import type { RootState } from 'redux/store';
export const selectVacancies = (state: RootState) => state.vacancies;

export const selectVacancyTitles = (state: RootState) => state.vacancies.titles;
