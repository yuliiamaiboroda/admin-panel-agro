import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeVacancyById, selectVacancies } from 'redux/vacancies';

export default function VacanciesModalConfirm() {
  const { certain } = useAppSelector(selectVacancies);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/vacancies';

  if (!certain) {
    return null;
  }
  return (
    <div>
      <h1>Ви впевнені що хочете видалити вакансію {certain.title}</h1>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              dispatch(removeVacancyById(certain._id));
              navigate('/vacancies');
            }}
          >
            Так
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate(backLinkHref)}>
            відміна
          </button>
        </li>
      </ul>
    </div>
  );
}
