import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainProduct, editProduct } from 'redux/products';
import ProductForm from 'components/ProductForm';

export default function ProductModalEditForm() {
  const product = useAppSelector(selectCertainProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/products';

  if (!product) {
    return null;
  }

  return (
    <ProductForm
      productData={product}
      onSubmit={productData => {
        dispatch(editProduct({ ...productData, _id: product._id }));
        navigate(backLinkHref);
      }}
      onCancel={() => navigate(backLinkHref)}
    />
  );
}
