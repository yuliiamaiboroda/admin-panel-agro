import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { getAllFeedback, selectFeedbacks } from 'redux/feedbacks';
import FeedbackCard from '../FeedbackCard';

export default function FeedbackGallery() {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector(selectFeedbacks);

  useEffect(() => {
    dispatch(getAllFeedback());
  }, [dispatch]);

  return (
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
  );
}
