import UpdateVacancyForm from 'components/Vacancies/UpdateVacancyForm';
import { useAppSelector } from 'hooks';

import { useNavigate } from 'react-router-dom';
import { selectVacancies } from 'redux/vacancies';

export default function VacanciesModalUpdateForm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();

  if (!certain) {
    return <h1>something went wrong </h1>;
  }

  return (
    <UpdateVacancyForm {...certain} onClose={() => navigate('vacancies')} />
  );
}
