import React, { useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import VacanciesGallery from '../VacanciesGallery';
import Modal from 'components/Modal';
import CreateVacancyForm from '../CreateVacancyForm';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import { selectUserRole } from 'redux/user';
import {
  getAllVacancies,
  getActualVacancies,
  getIrrelevantVacancies,
} from 'redux/vacancies';
import VacanciesNavigator from 'components/Vacancies/VacanciesNavigator';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}

export default function VacanciesDashboard() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const role = useAppSelector(selectUserRole);

  useEffect(() => {
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
        navigate('/vacancies');
    }
  }, [categoryName, dispatch, navigate]);

  return (
    <div>
      <VacanciesNavigator />
      <VacanciesGallery />
      {role === ROLES.admin || role === ROLES.applyManager ? (
        <button type="button" onClick={openModal}>
          Створити нове оголошення
        </button>
      ) : null}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CreateVacancyForm onClose={closeModal} />
        </Modal>
      )}
      <Outlet />
    </div>
  );
}
