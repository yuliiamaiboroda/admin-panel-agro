import React, { useEffect, useState } from 'react';
import VacanciesGallary from '../VacanciesGallary';
import Modal from 'components/Modal';
import CreateVacancyForm from '../CreateVacancyForm';
import { useAppSelector } from 'hooks';
import { selectUser } from 'redux/user';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}

export default function VacanciesDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccessedToCreateVacancy, setIsAccessedToCreateVacancy] =
    useState(false);

  const {
    user: { role },
  } = useAppSelector(selectUser);

  useEffect(() => {
    if (role === ROLES.admin || role === ROLES.applyManager) {
      setIsAccessedToCreateVacancy(true);
    }
  }, [role]);

  return (
    <div>
      <VacanciesGallary />
      {isAccessedToCreateVacancy && (
        <button
          type="button"
          onClick={(e: React.MouseEvent) => setIsModalOpen(true)}
        >
          Створити нове оголошення
        </button>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateVacancyForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
