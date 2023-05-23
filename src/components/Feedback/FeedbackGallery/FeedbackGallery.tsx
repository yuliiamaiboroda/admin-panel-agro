import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { getAllFeedback, selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';
import Loader from 'components/Loader/Loader';

export default function FeedbackGallery() {
  const dispatch = useAppDispatch();
  const { entities, isLoading } = useAppSelector(selectFeedbacks);

  useEffect(() => {
    dispatch(getAllFeedback());
  }, [dispatch]);

  return (
    <section style={{ position: 'relative' }}>
      {isLoading ? (
        <Loader top="200px" />
      ) : (
        <>
          {entities.length !== 0 ? (
            <ul>
              {entities.map(item => (
                <FeedbackCard key={item._id} {...item} />
              ))}
            </ul>
          ) : (
            <h2>Наразі немає отриманих відгуків</h2>
          )}
        </>
      )}
    </section>
  );
}
