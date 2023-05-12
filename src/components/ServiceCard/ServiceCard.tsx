import { useState } from 'react';
import ActionButton from 'components/ActionButton';
import Modal from 'components/Modal';
import DeleteServiceForm from 'components/DeleteServiceForm';

interface IProps {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export default function ServiceCard({
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
          <DeleteServiceForm  title={title} imageURL={imageURL} onSubmit={handleDeleteModalClose}/>
        </Modal>
      )}

      <ActionButton title="Змінити" onClick={handleEditModalOpen} />
      {isEditModalOpen && (
        <Modal onClose={handleEditModalClose}>
          <h2>EDIT modal content</h2>
        </Modal>
      )}
    </li>
  );
}
