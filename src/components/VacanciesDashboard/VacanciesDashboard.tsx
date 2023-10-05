import React, { useEffect } from 'react';
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
import VacanciesNavigator from 'components/VacanciesNavigator';
import RestrictedComponent from 'components/RestrictedComponent';
import VacancyForm from 'components/VacancyForm/VacancyForm';
import CreateButton from 'components/CreateButton';
import FilterWrapper from 'components/FilterWrapper';
import { VACANCY_CATEGORIES } from 'helpers/constants';

export default function VacanciesDashboard() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const { isListLoading } = useAppSelector(selectVacancies);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!VACANCY_CATEGORIES.some(category => category === categoryName)) {
      navigate('/vacancies/' + VACANCY_CATEGORIES[0]);
    }
  }, [navigate, categoryName]);

  useEffect(() => {
    if (
      categoryName &&
      VACANCY_CATEGORIES.some(category => category === categoryName)
    ) {
      dispatch(getVacanciesByCategories(categoryName));
    }
  }, [categoryName, dispatch]);

  return (
    <div>
      <FilterWrapper>
        <VacanciesNavigator />
      </FilterWrapper>
      {!isListLoading && <VacanciesGallery />}
      <RestrictedComponent accessRight={Roles.applyManager}>
        <CreateButton onClick={openModal} />
      </RestrictedComponent>

      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
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
      <Outlet />
    </div>
  );
}
