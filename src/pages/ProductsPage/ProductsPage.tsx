import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllProducts, selectProductError } from 'redux/products';
import ProductsGallery from 'components/ProductsGallery';
import Loader from 'components/Loader';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (error) {
    Notify.failure(error);
    return (
      <>
        <h1>Products page</h1>
        <h2>Ooops... Something went wrong</h2>
        <h3>It seems like: {error}</h3>
      </>
    );
  }

  return (
    <div>
      <h1>Products page</h1>
      <ProductsGallery />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
