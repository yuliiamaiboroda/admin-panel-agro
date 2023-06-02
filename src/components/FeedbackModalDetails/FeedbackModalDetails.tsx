import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectFeedbacks, updateFeedbackIsFavorite } from 'redux/feedbacks';

export default function FeedbackModalDetails() {
  const { certain } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!certain) {
    return null;
  }

  const {
    _id,
    name,
    contactPhone,
    contactMail,
    comment,
    agreement,
    isFavorite,
  } = certain;

  return (
    <>
      <h1>Фідбек від {name}</h1>
      <p>
        контактний телефон:
        <a href={`tel:${contactPhone}`}>{contactPhone}</a>
      </p>
      <p>
        контактна пошта:
        <a href={`mailto:${contactMail}`}>{contactMail}</a>
      </p>
      <p>коментар: {comment}</p>
      <p>Згодана на обробку даних: {agreement ? 'Надана' : 'Не надана'}</p>
      <button
        type="button"
        onClick={() => dispatch(updateFeedbackIsFavorite(_id))}
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <Link to="confirm" state={{ from: location }}>
        видалити
      </Link>
    </>
  );
}
