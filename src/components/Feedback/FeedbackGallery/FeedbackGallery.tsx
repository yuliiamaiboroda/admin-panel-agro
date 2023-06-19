import { useAppSelector } from 'hooks';
import { selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import { useState } from 'react';
import Modal from 'components/Modal';
import FeedbackForm from 'components/FeedbackForm';
import GalleryWrapper from 'components/GalleryWrapper';
import CreateButton from 'components/CreateButton';
import CardPlaceholder from 'components/CardPlaceholder';

export default function FeedbackGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { entities } = useAppSelector(selectFeedbacks);

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
          <FeedbackForm />
        </Modal>
      )}
    </section>
  );
}
