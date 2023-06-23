import { useAppDispatch, useAppSelector, useQueryParams } from 'hooks';
import { loadMoreFeedbacks, selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import { useState } from 'react';
import Modal from 'components/Modal';
import FeedbackForm from 'components/FeedbackForm';
import GalleryWrapper from 'components/GalleryWrapper';
import CreateButton from 'components/CreateButton';
import CardPlaceholder from 'components/CardPlaceholder';
import LoadMoreButton from 'components/LoadMoreButton';

export default function FeedbackGallery() {
  const [queryParams] = useQueryParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { entities, pagination } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();

  return (
    <section>
      <GalleryWrapper>
        {entities.length ? (
          entities.map(item => <FeedbackCard key={item._id} {...item} />)
        ) : (
          <CardPlaceholder />
        )}
      </GalleryWrapper>
      <CreateButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FeedbackForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      {entities.length < pagination.total ? (
        <LoadMoreButton
          onClick={() =>
            dispatch(
              loadMoreFeedbacks({
                ...queryParams,
                skip: pagination.skip + pagination.limit,
              })
            )
          }
        />
      ) : null}
    </section>
  );
}
