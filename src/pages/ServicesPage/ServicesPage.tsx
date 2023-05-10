import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { getAllServices } from 'redux/services';

import PageTitle from 'components/PageTitle';
import ServicesGallery from 'components/ServicesGallery';

export default function ServicesPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <>
      <PageTitle title="Company services" />
      <ServicesGallery />
    </>
  );
}
