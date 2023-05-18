import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { getAllProducts } from 'redux/products';
import ProductsGallery from 'components/ProductsGallery';

export default function ProductsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products page</h1>
      <ProductsGallery />
      <Outlet />
    </div>
  );
}
