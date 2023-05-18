import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Modal from 'components/Modal/';
import { useAppDispatch } from 'hooks';
import { getCertainProduct, removeCertainProduct } from 'redux/products';

export default function ProductModalLayout() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.productId) {
      dispatch(getCertainProduct(params.productId));
    }

    return () => {
      dispatch(removeCertainProduct());
    };
  }, [dispatch, params.productId]);

  return (
    <Modal onClose={() => navigate('/products')}>
      <Outlet />
    </Modal>
  );
}
