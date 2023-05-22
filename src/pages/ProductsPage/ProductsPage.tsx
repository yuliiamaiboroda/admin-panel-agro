import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllProducts, selectProductError } from 'redux/products';
import ProductsGallery from 'components/ProductsGallery';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (error) {
    Notify.failure(error);
  }

  return (
    <div>
      <h1>Products page</h1>
      <ProductsGallery />
      <Outlet />
    </div>
  );
}
