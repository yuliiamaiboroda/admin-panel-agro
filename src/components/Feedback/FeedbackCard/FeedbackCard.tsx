import { useAppDispatch } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateFeedbackIsFavorite, updateFeedbackViews } from 'redux/feedbacks';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import Box from 'components/Box';
import ItemLink from 'components/ItemLink';
import FavoriteButton from 'components/FavoriteButton';

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
  const location = useLocation();

  const handleUpdateViews = () => {
    if (!isReviewed) {
      dispatch(updateFeedbackViews(_id));
    }
  };

  const clickHandler = (event: React.MouseEvent) => {
    if (
      !(event.target instanceof HTMLAnchorElement) &&
      !(event.target instanceof HTMLButtonElement)
    ) {
      handleUpdateViews();
      navigate(`${_id}${location.search}`, { state: location });
    }
    return;
  };

  return (
    <CardWrapperMarkup onClick={() => clickHandler}>
      <CardDetailStringMarkup title="Ім'я" value={name} />
      <CardDetailStringMarkup title="Коментар" value={comment} />
      <CardDetailStringMarkup title="Створений" value={createdAt} />
      {/* TODO: createdAt не приходить на getAll  */}
      <Box display="flex" justifyContent="center" gridGap={2}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => dispatch(updateFeedbackIsFavorite(_id))}
        />
        <ItemLink type="remove" navigateTo={`${_id}/confirm`} />
      </Box>
    </CardWrapperMarkup>
  );
}
