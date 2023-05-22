import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { removeVacancyById, selectVacancies } from 'redux/vacancies';

export default function VacanciesModalConfirm() {
  const { certain } = useAppSelector(selectVacancies);
  const { vacanciesId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!certain) {
    return <h1>something went wrong </h1>;
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
          <button
            type="button"
            onClick={() => navigate(`/vacancies/details/${vacanciesId}`)}
          >
            відміна
          </button>
        </li>
      </ul>
    </div>
  );
}
