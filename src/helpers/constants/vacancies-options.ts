import translateCategory from 'utils/translate-vacancy-category';
import { Categories } from './vacancy-categories';

export const listVacanciesOptions = [
  {
    name: 'category',
    type: 'radio',
    id: Categories.actual,
    value: Categories.actual,
    shownName: translateCategory(Categories.actual),
  },
  {
    name: 'category',
    type: 'radio',
    id: Categories.irrelevant,
    value: Categories.irrelevant,
    shownName: translateCategory(Categories.irrelevant),
  },
];
