import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IVacancy, removeVacancyById, selectVacancies } from 'redux/vacancies';

export default function VacanciesModalConfirm() {
  const [choosedVacancy, setChoosedVacancy] = useState<IVacancy>();
  const vacancies = useAppSelector(selectVacancies);
  const { vacanciesId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
    <div>
      <h1>Ви впевнені що хочете видалити вакансію {choosedVacancy.title}</h1>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              dispatch(removeVacancyById(choosedVacancy._id));
              navigate('/vacancies');
            }}
          >
            Так
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate(`vacancies/details/${vacanciesId}`)}
          >
            відміна
          </button>
        </li>
      </ul>
    </div>
  );
}
