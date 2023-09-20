import { useAppSelector } from 'hooks';
import { selectAllFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';

export default function FeedbackGallery() {
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
    </section>
  );
}
