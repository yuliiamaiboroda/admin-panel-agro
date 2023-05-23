import { useState } from 'react';
import ActionButton from 'components/ActionButton';
import Modal from 'components/Modal';
import DeleteServiceForm from 'components/DeleteServiceForm';
import UpdateServiceForm from 'components/UpdateServiceForm';

interface IProps {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export default function ServiceCard({
  _id,
  title,
  description,
  imageURL,
  price,
  contactMail,
  contactPhone,
}: IProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);
  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const handleEditModalOpen = () => setIsEditModalOpen(true);
  const handleEditModalClose = () => setIsEditModalOpen(false);

  return (
    <li>
      <img src={imageURL} alt={title} width="348" height="222" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{contactPhone}</p>
      <p>{contactMail}</p>

      <ActionButton onClick={handleDeleteModalOpen} />
      {isDeleteModalOpen && (
        <Modal onClose={handleDeleteModalClose}>
          <DeleteServiceForm
            _id={_id}
            title={title}
            imageURL={imageURL}
            onSubmit={handleDeleteModalClose}
          />
        </Modal>
      )}

      <ActionButton title="Змінити" onClick={handleEditModalOpen} />
      {isEditModalOpen && (
        <Modal onClose={handleEditModalClose}>
          <UpdateServiceForm
            onSubmit={handleEditModalClose}
            _id={_id}
            title={title}
            description={description}
            imageURL={imageURL}
            price={price}
            contactPhone={contactPhone}
            contactMail={contactMail}
          />
        </Modal>
      )}
    </li>
  );
}
