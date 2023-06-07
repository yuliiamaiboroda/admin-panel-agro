import React, { useEffect, Suspense } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import VacanciesGallery from '../VacanciesGallery';
import Modal from 'components/Modal';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import {
  createVacancy,
  getVacanciesByCategories,
  selectVacancies,
} from 'redux/vacancies';
import { Roles } from 'helpers/constants';
import VacanciesNavigator from 'components/Vacancies/VacanciesNavigator';
import RestrictedComponent from 'components/RestrictedComponent';
import Loader from 'components/Loader';
import VacancyForm from 'components/VacancyForm/VacancyForm';
import CreateButton from 'components/CreateButton';

export default function VacanciesDashboard() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const { isListLoading } = useAppSelector(selectVacancies);
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
      {isListLoading ? <Loader /> : <VacanciesGallery />}
      <RestrictedComponent accessRight={Roles.applyManager}>
        {/* <button type="button" onClick={openModal}>
          Створити нову вакансію
        </button> */}
        <CreateButton onClick={openModal} />
      </RestrictedComponent>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RestrictedComponent accessRight={Roles.applyManager}>
            <VacancyForm
              formName="Створити нову вакансію"
              buttonName="Створити"
              onClose={() => closeModal()}
              onSubmit={vacancyData => {
                dispatch(createVacancy(vacancyData));
                closeModal();
              }}
            />
          </RestrictedComponent>
        </Modal>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
