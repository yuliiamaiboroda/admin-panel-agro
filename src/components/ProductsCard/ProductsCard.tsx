import { useState } from 'react';
import Modal from 'components/Modal';

interface IProps {
  title: string;
  imageURL: string;
  description: string;
}

// TODO: refactor spread props for card

export default function ProductsCard({ title, imageURL, description }: IProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <>
      <li onClick={handleModalOpen}>
        <h2>{title}</h2>
        <img src={imageURL} alt={title} width="150" height="auto" />
        <p>{description}</p>
      </li>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <h2>{title}</h2>
          <img src={imageURL} alt={title} width="300" height="auto" />
          <p>{description}</p>
        </Modal>
      )}
    </>
  );
}
