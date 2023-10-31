import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainProduct,
  removeCertainProduct,
  selectIsProductLoading,
  selectProductError,
} from 'redux/products';
import Modal from 'components/Modal/';
import Loader from 'components/Loader';
import { useModal } from 'hooks';
import { translateError } from 'utils';

export default function ProductModalLayout() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);
  const isLoading = useAppSelector(selectIsProductLoading);
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

  useEffect(() => {
    if (productId) {
      dispatch(getCertainProduct(productId));
    }

    return () => {
      dispatch(removeCertainProduct());
    };
  }, [dispatch, productId]);

  if (error) {
    Notify.failure(translateError(error));
    return <Navigate to="/products" replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => handleCloseModal('/products')}
    >
      {isLoading ? (
        <Loader position="static" />
      ) : (
        <Outlet context={{ handleCloseModal }} />
      )}
    </Modal>
  );
}
