import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { getAllServices } from 'redux/services';

import PageTitle from 'components/PageTitle';
import ServicesGallery from 'components/ServicesGallery';
import CreateNewAd from 'components/CreateNewAd';
import Modal from 'components/Modal';
import CreateServiceForm from 'components/CreateServiceForm';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <>
      <PageTitle title="Company services" />
      <ServicesGallery />
      <CreateNewAd onClick={handleModalOpen} />
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <CreateServiceForm onSubmit={handleModalClose} />
        </Modal>
      )}
    </>
  );
}
