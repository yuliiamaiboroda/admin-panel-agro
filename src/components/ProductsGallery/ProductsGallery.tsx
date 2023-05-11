import { useState } from 'react';
import { useAppSelector } from 'hooks';
import { selectProducts } from 'redux/products';
import ProductCard from 'components/ProductCard';
import Modal from 'components/Modal';
import CreateProductForm from 'components/CreateProductForm';

export default function ProductsGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useAppSelector(selectProducts);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <>
      <button type="button" onClick={handleModalOpen}>
        Add product
      </button>
      <ul>
        {products.map(({ _id, ...rest }) => (
          <ProductCard key={_id} {...rest} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <CreateProductForm onSubmit={handleModalClose} />
        </Modal>
      )}
    </>
  );
}
