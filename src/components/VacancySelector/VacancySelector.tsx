import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectVacancyTitles, getAllVacancyTitles } from 'redux/vacancies';
import Selector from 'components/Selector';
import type { ISelector } from 'helpers/types';

export default function VacancySelector({ onChange }: ISelector) {
  const titles = useAppSelector(selectVacancyTitles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  const positionOptions = [
    { value: '', label: 'Всі' },
    ...titles.map(({ title }) => ({ value: title, label: title })),
    { value: 'Інші', label: 'Інші' },
  ];

  return (
    <Selector
      options={positionOptions}
      defaultValue={{ value: '', label: 'Всі' }}
      onChange={onChange}
    />
  );
}
