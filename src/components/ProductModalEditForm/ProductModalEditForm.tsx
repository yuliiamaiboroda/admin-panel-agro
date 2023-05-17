import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectProducts, editProduct } from 'redux/products';
import type { IProduct } from 'redux/products';
import ProductForm from 'components/ProductForm';

export default function ProductModalEditForm() {
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
    <ProductForm
      productData={choosedProduct}
      onSubmit={productData => {
        dispatch(editProduct({ ...productData, _id: choosedProduct._id }));
        navigate('/products');
      }}
    />
  );
}
