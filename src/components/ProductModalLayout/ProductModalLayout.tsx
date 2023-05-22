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

export default function ProductModalLayout() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);
  const isLoading = useAppSelector(selectIsProductLoading);

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
    <Modal onClose={() => navigate('/products')}>
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
