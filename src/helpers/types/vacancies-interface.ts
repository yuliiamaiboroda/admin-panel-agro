import type { Categories } from 'helpers/constants';

export interface IVacancy {
  id: string;
  category: keyof typeof Categories;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

export interface IVacancyTitle {
  id: string;
  title: string;
}

export interface IVacancyState {
  entities: IVacancy[];
  titles: IVacancyTitle[];
  isLoading: boolean;
  isListLoading: boolean;
  certain: IVacancy | null;
  error: string | null;
}

export interface IVacancyData {
  category: keyof typeof Categories;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}
