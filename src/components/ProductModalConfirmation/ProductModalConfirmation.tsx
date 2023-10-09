import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainProduct, removeProduct } from 'redux/products';
import ConfirmationModal from 'components/ConfirmationModal';
import { useModalOutlet } from 'hooks';

export default function ProductModalConfirmation() {
  const product = useAppSelector(selectCertainProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = location.state?.from ?? '/products';

  if (!product) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeProduct(product.id));
    handleCloseModal('/products');
  };

  const handleCancel = () => {
    if (backLinkHref === '/products') {
      handleCloseModal(backLinkHref);
    } else {
      navigate(backLinkHref);
    }
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити "${product.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
