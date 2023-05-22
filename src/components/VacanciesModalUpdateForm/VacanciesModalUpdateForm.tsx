import UpdateVacancyForm from 'components/Vacancies/UpdateVacancyForm';
import { useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IVacancy, selectVacancies } from 'redux/vacancies';

export default function VacanciesModalUpdateForm() {
  const [choosedVacancy, setChoosedVacancy] = useState<IVacancy>();
  const vacancies = useAppSelector(selectVacancies);
  const { vacanciesId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const vacancy = vacancies.entities.find(
      vacancy => vacancy._id === vacanciesId
    );
    if (vacancy) {
      setChoosedVacancy(vacancy);
    }
  }, [vacanciesId, vacancies]);

  if (!choosedVacancy) {
    return <h1>something went wrong </h1>;
  }

  return (
    <UpdateVacancyForm
      {...choosedVacancy}
      onClose={() => navigate('vacancies')}
    />
  );
}
