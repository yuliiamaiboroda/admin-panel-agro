import FeedbackGallery from 'components/Feedback/FeedbackGallery';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function FeedbackPage() {
  return (
    <>
      <PageTitle title="Отримані фідбеки" />
      <FeedbackGallery />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
