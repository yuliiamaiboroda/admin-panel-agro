import { useNavigate, useLocation } from 'react-router-dom';
import { removeVacancyById, selectVacancies } from 'redux/vacancies';
import { useAppDispatch, useAppSelector, useModalOutlet } from 'hooks';
import ConfirmationModal from 'components/ConfirmationModal';

export default function VacanciesModalConfirm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeLocation = useLocation();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeVacancyById(certain._id));
    handleCloseModal('/vacancies');
  };

  const handleCancel = () => {
    if (backLinkHref === '/vacancies') {
      handleCloseModal(backLinkHref);
    } else {
      navigate(backLinkHref);
    }
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити вакансію "${certain.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
