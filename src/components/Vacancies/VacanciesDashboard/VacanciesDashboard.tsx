import React, { useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import VacanciesGallery from '../VacanciesGallery';
import Modal from 'components/Modal';
import CreateVacancyForm from '../CreateVacancyForm';
import { useAppDispatch, useModal } from 'hooks';
import { getVacanciesByCategories } from 'redux/vacancies';
import { Roles } from 'helpers/constants';
import VacanciesNavigator from 'components/Vacancies/VacanciesNavigator';
import RestrictedComponent from 'components/RestrictedComponent';

export default function VacanciesDashboard() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    categoryName
      ? dispatch(getVacanciesByCategories(categoryName))
      : navigate('all-vacancies');
  }, [categoryName, dispatch, navigate]);

  return (
    <div>
      <VacanciesNavigator />
      <VacanciesGallery />
      <RestrictedComponent accessRight={Roles.applyManager}>
        <button type="button" onClick={openModal}>
          Створити нове оголошення
        </button>
      </RestrictedComponent>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CreateVacancyForm onClose={closeModal} />
        </Modal>
      )}
      <Outlet />
    </div>
  );
}
