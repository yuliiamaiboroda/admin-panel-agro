import { Categories } from 'helpers/constants';

export default function translateCategory(
  category: Categories | string
): string {
  let translatedCategory = '';

  switch (category) {
    case Categories.actual:
      translatedCategory = 'Актуальнa вакансія';
      break;
    case Categories.irrelevant:
      translatedCategory = 'Неактуальнa вакансія';
      break;
    default:
      translatedCategory = '';
      break;
  }

  return translatedCategory;
}
