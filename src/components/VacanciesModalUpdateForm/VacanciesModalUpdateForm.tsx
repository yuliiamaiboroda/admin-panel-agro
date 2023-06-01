import VacancyForm from 'components/VacancyForm';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectVacancies, updateVacancyById } from 'redux/vacancies';

export default function VacanciesModalUpdateForm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const dispatch = useAppDispatch();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }

  return (
    <VacancyForm
      vacancyData={certain}
      onClose={() => navigate(backLinkHref)}
      buttonName="Оновити"
      formName={`Оновити вакансію ${certain.title}`}
      onSubmit={vacancyData => {
        dispatch(updateVacancyById({ ...vacancyData, _id: certain._id }));
        navigate(backLinkHref);
      }}
    />
  );
}
