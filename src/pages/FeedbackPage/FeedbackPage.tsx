import FeedbackGallery from 'components/Feedback/FeedbackGallery';
import FeedbackFilter from 'components/FeedbackFilter';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import FilterWrapper from 'components/FilterWrapper';

export default function FeedbackPage() {
  return (
    <>
      <PageTitle title="Отримані фідбеки" />
      <FilterWrapper>
        <FeedbackFilter />
      </FilterWrapper>
      <FeedbackGallery />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
