import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainProduct, removeProduct } from 'redux/products';

export default function ProductModalConfirmation() {
  const product = useAppSelector(selectCertainProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/products';

  if (!product) {
    return <h1>Ooops... o_o</h1>;
  }

  return (
    <div>
      <h1>Are you sure want to delete "{product.title}"?</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(removeProduct(product._id));
          navigate('/products');
        }}
      >
        Yes
      </button>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Cancel
      </button>
    </div>
  );
}
