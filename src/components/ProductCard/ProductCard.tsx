import { useNavigate, Link } from 'react-router-dom';

// COMMENTED BACKUP VERSION
// TODO:  Remove comments

// import { useModal, useAppDispatch } from 'hooks';
// import { editProduct, removeProduct } from 'redux/products';
// import Modal from 'components/Modal';
// import ProductForm from 'components/ProductForm';

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
  const navigate = useNavigate();
  // const { isModalOpen, openModal, closeModal } = useModal();
  // const {
  //   isModalOpen: isEditModalOpen,
  //   openModal: openEditModal,
  //   closeModal: closeEditModal,
  // } = useModal();
  // const {
  //   isModalOpen: isRemoveModalOpen,
  //   openModal: openRemoveModal,
  //   closeModal: closeRemoveModal,
  // } = useModal();
  // const dispatch = useAppDispatch();

  return (
    <>
      <li
        onClick={event => {
          if (event.target === event.currentTarget) {
            navigate(`${_id}`);
          }
        }}
      >
        <h2>{title}</h2>
        <img src={imageURL} alt={title} width="150" height="auto" />
        <p>{description}</p>
        <Link to={`${_id}/form`}>Edit</Link>
        <br />
        <Link to={`${_id}/confirm`}>Remove</Link>
      </li>
      {/* {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>{title}</h2>
          <img src={imageURL} alt={title} width="300" height="auto" />
          <p>{description}</p>
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal onClose={closeEditModal}>
          <ProductForm
            productData={{ title, description, imageURL }}
            onSubmit={productData => {
              dispatch(editProduct({ ...productData, _id }));
              closeEditModal();
            }}
          />
        </Modal>
      )}
      {isRemoveModalOpen && (
        <Modal onClose={closeRemoveModal}>
          <p>Are you sure wont to delete "{title}" product?</p>
          <button
            type="button"
            onClick={() => {
              dispatch(removeProduct(_id));
              closeRemoveModal();
            }}
          >
            Yes
          </button>
          <button type="button" onClick={closeRemoveModal}>
            Cancel
          </button>
        </Modal>
      )} */}
    </>
  );
}
