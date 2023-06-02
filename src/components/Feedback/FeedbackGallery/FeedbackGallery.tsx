import { useAppSelector } from 'hooks';
import { selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import FeedbackFilter from 'components/FeedbackFilter';

export default function FeedbackGallery() {
  const { entities } = useAppSelector(selectFeedbacks);

  return (
    <section style={{ position: 'relative' }}>
      <FeedbackFilter />
      {entities.length !== 0 ? (
        <ul>
          {entities.map(item => (
            <FeedbackCard key={item._id} {...item} />
          ))}
        </ul>
      ) : (
        <h2>Наразі немає отриманих відгуків</h2>
      )}
    </section>
  );
}
