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
import { useModal } from 'hooks';

export default function VacanciesModalLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector(selectVacancies);
  const { categoryName, vacanciesId } = useParams();
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

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
    return <Navigate to={`/vacancies/${categoryName || ''}`} replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        handleCloseModal(`/vacancies/${categoryName || ''}`);
      }}
    >
      {isLoading ? <Loader /> : <Outlet context={{ handleCloseModal }} />}
    </Modal>
  );
}
