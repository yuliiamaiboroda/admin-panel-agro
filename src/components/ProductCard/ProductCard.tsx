import { useModal, useAppDispatch } from 'hooks';
import { editProduct } from 'redux/products';
import Modal from 'components/Modal';
import CreateProductForm from 'components/CreateProductForm';

interface IProps {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
}

export default function ProductCard({
  _id,
  title,
  imageURL,
  description,
}: IProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isModalOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <li
        onClick={event => {
          if (event.target === event.currentTarget) {
            openModal();
          }
        }}
      >
        <h2>{title}</h2>
        <img src={imageURL} alt={title} width="150" height="auto" />
        <p>{description}</p>
        <button type="button" onClick={openEditModal}>
          Edit
        </button>
      </li>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>{title}</h2>
          <img src={imageURL} alt={title} width="300" height="auto" />
          <p>{description}</p>
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal onClose={closeEditModal}>
          <CreateProductForm
            productData={{ title, description, imageURL }}
            onSubmit={productData => {
              dispatch(editProduct({ ...productData, _id }));
              closeEditModal();
            }}
          />
        </Modal>
      )}
    </>
  );
}
