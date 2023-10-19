import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllProducts, selectProductError } from 'redux/products';
import ProductsGallery from 'components/ProductsGallery';
import PageTitle from 'components/PageTitle';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';
import { translateError } from 'utils';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProductError);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (error) {
    Notify.failure(translateError(error));
    return (
      <>
        <PageTitle title="Продукти компанії" />
        <GalleryWrapper>
          <CardPlaceholder
            title="Упс... Щось пішло не так."
            description={translateError(error)}
          />
        </GalleryWrapper>
      </>
    );
  }

  return (
    <div>
      <PageTitle title="Продукти компанії" />
      <ProductsGallery />
      <Outlet />
    </div>
  );
}
