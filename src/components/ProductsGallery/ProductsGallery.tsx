import { useAppSelector, useModal } from 'hooks';
import { selectProducts } from 'redux/products';
import ProductCard from 'components/ProductCard';
import Modal from 'components/Modal';
import ProductForm from 'components/ProductForm';
import { useAppDispatch } from 'hooks';
import { createProduct } from 'redux/products';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import CreateButton from 'components/CreateButton';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';

export default function ProductsGallery() {
  const products = useAppSelector(selectProducts);
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <GalleryWrapper>
        {products.length ? (
          products.map(product => <ProductCard key={product.id} {...product} />)
        ) : (
          <CardPlaceholder />
        )}
      </GalleryWrapper>
      <RestrictedComponent accessRight={Roles.productsManager}>
        <CreateButton onClick={openModal} />
      </RestrictedComponent>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <ProductForm
          onSubmit={productData => {
            dispatch(createProduct(productData));
            closeModal();
          }}
          onCancel={() => closeModal()}
        />
      </Modal>
    </>
  );
}
