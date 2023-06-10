import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeVacancyById, selectVacancies } from 'redux/vacancies';
import ConfirmationModal from 'components/ConfirmationModal';

export default function VacanciesModalConfirm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeVacancyById(certain._id));
    navigate('/vacancies');
  };

  const handleCancel = () => navigate(backLinkHref);

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити вакансію "${certain.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
