import { useAppSelector, useModal } from 'hooks';
import { selectProducts } from 'redux/products';
import ProductCard from 'components/ProductCard';
import Modal from 'components/Modal';
import CreateProductForm from 'components/CreateProductForm';

export default function ProductsGallery() {
  const products = useAppSelector(selectProducts);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        Add product
      </button>
      <ul>
        {products.map(({ _id, ...rest }) => (
          <ProductCard key={_id} {...rest} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CreateProductForm onSubmit={closeModal} />
        </Modal>
      )}
    </>
  );
}
