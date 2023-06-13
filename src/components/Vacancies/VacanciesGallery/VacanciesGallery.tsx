import { useAppSelector } from 'hooks';
import { selectVacancies } from 'redux/vacancies';
import GalleryWrapper from 'components/GalleryWrapper';
import VacancyCard from '../VacancyCard';
import CardPlaceholder from 'components/CardPlaceholder';

export default function VacanciesGallery() {
  const { entities } = useAppSelector(selectVacancies);

  return (
    <GalleryWrapper>
      {entities.length ? (
        entities.map(item => <VacancyCard key={item._id} {...item} />)
      ) : (
        <CardPlaceholder />
      )}
    </GalleryWrapper>
  );
}
