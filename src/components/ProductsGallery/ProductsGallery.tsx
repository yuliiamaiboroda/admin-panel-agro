import { useAppSelector, useModal } from 'hooks';
import { selectProducts } from 'redux/products';
import ProductCard from 'components/ProductCard';
import Modal from 'components/Modal';
import ProductForm from 'components/ProductForm';
import { useAppDispatch } from 'hooks';
import { createProduct } from 'redux/products';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';

export default function ProductsGallery() {
  const products = useAppSelector(selectProducts);
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <RestrictedComponent accessRight={Roles.productsManager}>
        <button type="button" onClick={openModal}>
          Add product
        </button>
      </RestrictedComponent>
      <ul>
        {products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ProductForm
            onSubmit={productData => {
              dispatch(createProduct(productData));
              closeModal();
            }}
            onCancel={() => closeModal()}
          />
        </Modal>
      )}
    </>
  );
}
