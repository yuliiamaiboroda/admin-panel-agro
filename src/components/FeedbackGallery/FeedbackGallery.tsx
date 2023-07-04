import { useAppSelector } from 'hooks';
import { selectAllFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import { useState } from 'react';
import Modal from 'components/Modal';
import FeedbackForm from 'components/FeedbackForm';
import GalleryWrapper from 'components/GalleryWrapper';
import CreateButton from 'components/CreateButton';
import CardPlaceholder from 'components/CardPlaceholder';

export default function FeedbackGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const feedbacks = useAppSelector(selectAllFeedbacks);

  return (
    <section>
      <GalleryWrapper>
        {feedbacks.length ? (
          feedbacks.map(item => <FeedbackCard key={item._id} {...item} />)
        ) : (
          <CardPlaceholder />
        )}
      </GalleryWrapper>
      <CreateButton onClick={() => setIsModalOpen(true)} />
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FeedbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
