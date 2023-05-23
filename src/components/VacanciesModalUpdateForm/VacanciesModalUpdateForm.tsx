import UpdateVacancyForm from 'components/Vacancies/UpdateVacancyForm';
import { useAppSelector } from 'hooks';

import { useNavigate, useLocation } from 'react-router-dom';
import { selectVacancies } from 'redux/vacancies';

export default function VacanciesModalUpdateForm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }

  return (
    <UpdateVacancyForm {...certain} onClose={() => navigate(backLinkHref)} />
  );
}
