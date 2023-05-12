import Modal from 'components/Modal';
import { useModal } from 'hooks';

interface IProps {
  title: string;
  imageURL: string;
  description: string;
}

export default function ProductCard({ title, imageURL, description }: IProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <li onClick={openModal}>
        <h2>{title}</h2>
        <img src={imageURL} alt={title} width="150" height="auto" />
        <p>{description}</p>
      </li>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>{title}</h2>
          <img src={imageURL} alt={title} width="300" height="auto" />
          <p>{description}</p>
        </Modal>
      )}
    </>
  );
}
