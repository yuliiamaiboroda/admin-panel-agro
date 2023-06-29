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

export default function ProductModalLayout() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);
  const isLoading = useAppSelector(selectIsProductLoading);
  const { isModalOpen, closeModal } = useModal(true);

  useEffect(() => {
    if (productId) {
      dispatch(getCertainProduct(productId));
    }

    return () => {
      dispatch(removeCertainProduct());
    };
  }, [dispatch, productId]);

  if (error) {
    Notify.failure(error);
    return <Navigate to="/products" replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        closeModal();
        setTimeout(() => {
          navigate('/products');
        }, 250);
      }}
    >
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
