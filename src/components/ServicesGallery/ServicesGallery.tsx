import { useAppSelector, useModal, useAppDispatch } from 'hooks';
import { createService, selectServices } from 'redux/services';
import Modal from 'components/Modal';
import ServiceCard from 'components/ServiceCard';
import ServiceForm from 'components/ServiceForm';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import GalleryWrapper from 'components/GalleryWrapper';
import CreateButton from 'components/CreateButton';
import CardPlaceholder from 'components/CardPlaceholder';

export default function ServicesGallery() {
  const services = useAppSelector(selectServices);
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <RestrictedComponent accessRight={Roles.servicesManager}>
        <CreateButton onClick={openModal} />
      </RestrictedComponent>
      <GalleryWrapper>
        {services.length ? (
          services.map(({ _id, ...rest }) => (
            <ServiceCard key={_id} _id={_id} {...rest} />
          ))
        ) : (
          <CardPlaceholder />
        )}
      </GalleryWrapper>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <ServiceForm
          onSubmit={serviceData => {
            dispatch(createService(serviceData));
            closeModal();
          }}
          onCancel={() => closeModal()}
        />
      </Modal>
    </>
  );
}
