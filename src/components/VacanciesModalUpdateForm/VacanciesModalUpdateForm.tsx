import { useNavigate, useLocation } from 'react-router-dom';
import { selectVacancies, updateVacancyById } from 'redux/vacancies';
import { useAppDispatch, useAppSelector, useModalOutlet } from 'hooks';
import VacancyForm from 'components/VacancyForm';

export default function VacanciesModalUpdateForm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const dispatch = useAppDispatch();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }

  return (
    <VacancyForm
      vacancyData={certain}
      onClose={() => {
        if (backLinkHref === '/vacancies') {
          handleCloseModal(backLinkHref);
        } else {
          navigate(backLinkHref);
        }
      }}
      buttonName="Оновити"
      formName={`Оновити вакансію ${certain.title}`}
      onSubmit={vacancyData => {
        dispatch(updateVacancyById({ ...vacancyData, _id: certain._id }));
        if (backLinkHref === '/vacancies') {
          handleCloseModal(backLinkHref);
        } else {
          navigate(backLinkHref);
        }
      }}
    />
  );
}
