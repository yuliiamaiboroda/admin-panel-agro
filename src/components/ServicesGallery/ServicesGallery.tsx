import { useAppSelector, useModal, useAppDispatch } from 'hooks';
import { createService, selectServices } from 'redux/services';

import CreateNewAd from 'components/CreateNewAd';
import Modal from 'components/Modal';
import ServiceCard from 'components/ServiceCard';
import ServiceForm from 'components/ServiceForm';

export default function ServicesGallery() {
  const services = useAppSelector(selectServices);
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <CreateNewAd onClick={openModal} />
      <ul>
        {services.map(({ _id, ...rest }) => (
          <ServiceCard key={_id} _id={_id} {...rest} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ServiceForm
            onSubmit={serviceData => {
              dispatch(createService(serviceData));
              closeModal();
            }}
            onCancel={() => closeModal()}
          />
        </Modal>
      )}
    </>
  );
}
