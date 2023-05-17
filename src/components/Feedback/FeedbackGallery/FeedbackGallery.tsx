import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { getAllFeedback, selectFeedbacks } from 'redux/feedbacks';

export default function FeedbackGallery() {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector(selectFeedbacks);

  useEffect(() => {
    dispatch(getAllFeedback());
  }, []);

  return (
    <>
      {entities.length !== 0 ? (
        <ul>
          {entities.map(el => (
            <li>{el._id}</li>
          ))}
        </ul>
      ) : (
        <h2>Наразі немає отриманих відгуків</h2>
      )}
    </>
  );
}
