import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getAllFeedbacks,
  loadMoreFeedbacks,
  selectAllFeedbacks,
  selectFeedbackPagination,
  selectFeedbackError,
} from 'redux/feedbacks';
import type { IFeedbackFilter } from 'helpers/types';
import FeedbackGallery from 'components/FeedbackGallery';
import FeedbackFilter from 'components/FeedbackFilter';
import PageTitle from 'components/PageTitle';
import FilterWrapper from 'components/FilterWrapper';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';
import LoadMoreButton from 'components/LoadMoreButton';
import { translateError } from 'utils';

export default function FeedbackPage() {
  const [filterStatus, setFilterStatus] = useState<IFeedbackFilter>({});
  const feedbacks = useAppSelector(selectAllFeedbacks);
  const pagination = useAppSelector(selectFeedbackPagination);
  const error = useAppSelector(selectFeedbackError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFeedbacks(filterStatus));
  }, [dispatch, filterStatus]);

  if (error) {
    Notify.failure(translateError(error));
    return (
      <>
        <PageTitle title="Отримані фідбеки" />
        <GalleryWrapper>
          <CardPlaceholder title="Упс... Щось пішло не так." description={translateError(error)} />
        </GalleryWrapper>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Отримані фідбеки" />
      <FilterWrapper>
        <FeedbackFilter
          filterStatus={filterStatus}
          onSelect={setFilterStatus}
        />
      </FilterWrapper>
      <FeedbackGallery />
      {feedbacks.length < pagination.total ? (
        <LoadMoreButton
          onClick={() =>
            dispatch(
              loadMoreFeedbacks({
                ...filterStatus,
                skip: pagination.skip + pagination.limit,
              })
            )
          }
        />
      ) : null}
      <Outlet />
    </>
  );
}
