import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { removeFeedbackById, selectFeedbacks } from 'redux/feedbacks';

export default function FeedbackModalConfirmation() {
  const { certain } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/feedbacks';

  if (!certain) {
    return null;
  }
  return (
    <>
      <h1>Ви впевнені що хочете видалити фідбек від {certain.name}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(removeFeedbackById(certain._id));
          navigate('/feedbacks');
        }}
      >
        Так
      </button>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        відміна
      </button>
    </>
  );
}
