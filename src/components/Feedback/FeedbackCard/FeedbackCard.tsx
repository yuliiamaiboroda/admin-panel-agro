import { useAppDispatch } from 'hooks';
import { Link, useNavigate } from 'react-router-dom';
import { updateFeedbackViews } from 'redux/feedbacks';
export interface IFeedback {
  _id: string;
  name: string;
  comment: string;
  isReviewed: boolean;
  createdAt: string;
  isFavorite: boolean;
}
export default function FeedbackCard({
  _id,
  name,
  isReviewed,
  comment,
  createdAt,
  isFavorite,
}: IFeedback) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdateViews = () => {
    if (!isReviewed) {
      dispatch(updateFeedbackViews(_id));
    }
  };

  return (
    <li
      onClick={() => {
        handleUpdateViews();
        navigate(_id);
      }}
    >
      {!isReviewed ? <h3>New!!!</h3> : null}
      <p>
        Ім'я:
        <span>{name}</span>
      </p>
      <p>
        Коментар:
        <span>{comment}</span>
      </p>
      <p>
        Створений <span>{createdAt}</span>
      </p>
      <button type="button">
        {isFavorite ? 'Remove from fovorites' : 'Add to favorites'}
      </button>
      <Link to={`${_id}/confirm`}>Видалити</Link>
    </li>
  );
}
