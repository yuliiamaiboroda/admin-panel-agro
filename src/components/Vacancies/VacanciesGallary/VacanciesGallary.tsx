import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import {
  getActualVacancies,
  getAllVacancies,
  getIrrelevantVacancies,
  selectVacancies,
} from 'redux/vacancies';
import VacancyCard from '../VacancyCard';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';

export default function VacanciesGallary() {
  const dispatch = useAppDispatch();
  const { entities, isLoading } = useAppSelector(selectVacancies);

  const { categoryName } = useParams();
  const navigate = useNavigate();

  const Interaction_With_API = async () => {
    try {
      switch (categoryName) {
        case 'all-vacancies':
          dispatch(getAllVacancies());
          break;
        case 'actual-vacancies':
          dispatch(getActualVacancies());
          break;
        case 'irrelevant-vacancies':
          dispatch(getIrrelevantVacancies());
          break;
        default:
          navigate('all-vacancies');
          break;
      }
      // if (categoryName === 'all-vacancies') {
      //   dispatch(getAllVacancies());
      // }
      // if (categoryName === 'actual-vacancies') {
      //   dispatch(getActualVacancies());
      // }
      // if (categoryName === 'irrelevant-vacancies') {
      //   dispatch(getIrrelevantVacancies());
      // }
      // if (!categoryName) {
      //   navigate('all-vacancies');
      // }
    } catch (err) {
      Notify.failure('Упс щось пішло не так');
    }
  };

  useEffect(() => {
    Interaction_With_API();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <section style={{ position: 'relative' }}>
      <ul>
        <li>
          <NavLink to={'all-vacancies'}>Всі вакансії</NavLink>
        </li>
        <li>
          <NavLink to={'actual-vacancies'}>Актуальні вакансії</NavLink>
        </li>
        <li>
          <NavLink to={'irrelevant-vacancies'}>Неактуальні вакансії</NavLink>
        </li>
      </ul>
      {isLoading ? (
        <Loader top="200px" />
      ) : (
        <ul>
          {entities.length ? (
            entities.map(item => <VacancyCard key={item._id} {...item} />)
          ) : (
            <h2>Немає вакансій в цій категорії</h2>
          )}
        </ul>
      )}
    </section>
  );
}
