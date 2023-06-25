import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import {
  getAllFeedback,
  loadMoreFeedbacks,
  selectAllFeedbacks,
  selectFeedbackPagination,
  selectFeedbackError,
} from 'redux/feedbacks';
import type { IFeedbackFilter } from 'helpers/types';
import FeedbackGallery from 'components/Feedback/FeedbackGallery';
import FeedbackFilter from 'components/FeedbackFilter';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import FilterWrapper from 'components/FilterWrapper';
import CreateButton from 'components/CreateButton';
import Modal from 'components/Modal/Modal';
import FeedbackForm from 'components/FeedbackForm';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';
import LoadMoreButton from 'components/LoadMoreButton';

export default function FeedbackPage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [filterStatus, setFilterStatus] = useState<IFeedbackFilter>({});
  const feedbacks = useAppSelector(selectAllFeedbacks);
  const pagination = useAppSelector(selectFeedbackPagination);
  const error = useAppSelector(selectFeedbackError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFeedback(filterStatus));
  }, [dispatch, filterStatus]);

  if (error) {
    Notify.failure(error);
    return (
      <>
        <PageTitle title="Отримані фідбеки" />
        <GalleryWrapper>
          <CardPlaceholder title="It seems like:" description={error} />
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <CreateButton onClick={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <FeedbackForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
