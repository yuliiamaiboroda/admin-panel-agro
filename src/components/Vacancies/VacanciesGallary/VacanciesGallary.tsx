import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { getAllVacancies, selectVacancies } from 'redux/vacancies';
import VacancyCard from '../VacancyCard/VacancyCard';

export default function VacanciesGallary() {
  const dispatch = useAppDispatch();
  const { entities, isLoading } = useAppSelector(selectVacancies);

  useEffect(() => {
    dispatch(getAllVacancies());
  }, [dispatch]);
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <ul>
      {entities.length ? (
        entities.map(item => <VacancyCard key={item._id} {...item} />)
      ) : (
        <h2>no vacancies</h2>
      )}
    </ul>
  );
}
