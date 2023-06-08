import { useAppSelector } from 'hooks';
import { selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import { useState } from 'react';
import Modal from 'components/Modal';
import FeedbackForm from 'components/FeedbackForm';
import GalleryWrapper from 'components/GalleryWrapper';
import CreateButton from 'components/CreateButton';

export default function FeedbackGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { entities } = useAppSelector(selectFeedbacks);

  return (
    <section style={{ position: 'relative' }}>
      {entities.length !== 0 ? (
        <GalleryWrapper>
          {entities.map(item => (
            <FeedbackCard key={item._id} {...item} />
          ))}
        </GalleryWrapper>
      ) : (
        <h2>Наразі немає отриманих відгуків</h2>
      )}
      {/* <button type="button" onClick={() => setIsModalOpen(true)}>
        Створити фідбек
      </button> */}
      <CreateButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FeedbackForm />
        </Modal>
      )}
    </section>
  );
}
