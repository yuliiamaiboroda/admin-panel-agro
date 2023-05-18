import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Watch } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import Modal from 'components/Modal/';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainProduct,
  removeCertainProduct,
  selectIsProductLoading,
  selectProductError,
} from 'redux/products';

export default function ProductModalLayout() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);
  const isLoading = useAppSelector(selectIsProductLoading);

  useEffect(() => {
    if (params.productId) {
      dispatch(getCertainProduct(params.productId));
    }

    return () => {
      dispatch(removeCertainProduct());
    };
  }, [dispatch, params.productId]);

  if (error) {
    Notify.failure(error);
    return <Navigate to="/products" replace />;
  }

  return (
    <Modal onClose={() => navigate('/products')}>
      {isLoading ? (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <Outlet />
      )}
    </Modal>
  );
}
