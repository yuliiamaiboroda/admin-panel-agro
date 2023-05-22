import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import Modal from 'components/Modal/';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainVacancy,
  removeCertainVacancy,
  selectVacancies,
} from 'redux/vacancies';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

export default function VacanciesModalLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector(selectVacancies);
  const { vacanciesId } = useParams();
  useEffect(() => {
    if (vacanciesId) {
      dispatch(getCertainVacancy(vacanciesId));
    }
    return () => {
      dispatch(removeCertainVacancy());
    };
  }, [vacanciesId, dispatch]);

  if (error) {
    Notify.failure(error);
    return <Navigate to="/vacancies" replace />;
  }

  return (
    <>
      <Modal onClose={() => navigate('/vacancies')}>
        {isLoading ? <Loader top="" /> : <Outlet />}
      </Modal>
    </>
  );
}
