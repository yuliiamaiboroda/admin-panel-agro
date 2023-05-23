import { useAppSelector } from 'hooks';
import { selectVacancies } from 'redux/vacancies';
import VacancyCard from '../VacancyCard';

export default function VacanciesGallery() {
  const { entities } = useAppSelector(selectVacancies);

  return (
    <ul>
      {entities.length ? (
        entities.map(item => <VacancyCard key={item._id} {...item} />)
      ) : (
        <h2>Немає вакансій в цій категорії</h2>
      )}
    </ul>
  );
}
