import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectProducts, removeProduct } from 'redux/products';
import type { IProduct } from 'redux/products';

export default function ProductModalConfirmation() {
  const [choosedProduct, setChoosedProduct] = useState<IProduct>();
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find(product => product._id === productId);
    if (product) {
      setChoosedProduct(product);
    }
  }, [productId, products]);

  if (!choosedProduct) {
    return <h1>Ooops... o_o</h1>;
  }

  return (
    <div>
      <h1>Are you sure want to delete "{choosedProduct.title}"?</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(removeProduct(choosedProduct._id));
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
