import { useEffect, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllServices, selectError } from 'redux/services';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';

import PageTitle from 'components/PageTitle';
import ServicesGallery from 'components/ServicesGallery';
import Loader from 'components/Loader';

export default function ServicesPage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  if (error) {
    Notify.failure(error);
  }

  return (
    <>
      <PageTitle title="Послуги компанії" />
      <ServicesGallery />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
