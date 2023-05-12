import React, { useState } from 'react';
import VacanciesGallary from '../VacanciesGallary';
import Modal from 'components/Modal';
import CreateVacancyForm from '../CreateVacancyForm';

export default function VacanciesDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <VacanciesGallary />
      <button
        type="button"
        onClick={(e: React.MouseEvent) => setIsModalOpen(true)}
      >
        Створити нове оголошення
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateVacancyForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
