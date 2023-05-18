import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainProduct, removeProduct } from 'redux/products';

export default function ProductModalConfirmation() {
  const product = useAppSelector(selectCertainProduct);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();

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
      <button type="button" onClick={() => navigate(`/products/${productId}`)}>
        Cancel
      </button>
    </div>
  );
}
