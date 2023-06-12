import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainProduct, removeProduct } from 'redux/products';
import ConfirmationModal from 'components/ConfirmationModal';

export default function ProductModalConfirmation() {
  const product = useAppSelector(selectCertainProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/products';

  if (!product) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeProduct(product._id));
    navigate('/products');
  };

  const handleCancel = () => navigate(backLinkHref);

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити "${product.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
