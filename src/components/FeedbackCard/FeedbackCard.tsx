import { useAppDispatch } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateFeedbackIsFavorite, updateFeedbackViews } from 'redux/feedbacks';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import Box from 'components/Box';
import ItemLink from 'components/ItemLink';
import FavoriteButton from 'components/FavoriteButton';
import UnviewedMark from 'components/UnviewedMark';
import type { IFeedback } from 'helpers/types';

export default function FeedbackCard({
  id,
  name,
  isReviewed,
  comment,
  isFavorite,
}: IFeedback) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleUpdateViews = () => {
    if (!isReviewed) {
      dispatch(updateFeedbackViews(id));
    }
  };

  const clickHandler = (event: React.MouseEvent) => {
    if (
      !(event.target instanceof HTMLAnchorElement) &&
      !(event.target instanceof HTMLButtonElement)
    ) {
      handleUpdateViews();
      navigate(`${id}${location.search}`, { state: location });
    }
    return;
  };

  return (
    <CardWrapperMarkup onClick={() => clickHandler}>
      <Box position="relative">
        <UnviewedMark isShown={!isReviewed} />
        <CardDetailStringMarkup title="Ім'я" value={name} />
        <CardDetailStringMarkup title="Коментар" value={comment} />
        <Box display="flex" justifyContent="center" gridGap={2}>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => dispatch(updateFeedbackIsFavorite(id))}
          />
          <ItemLink type="remove" navigateTo={`${id}/confirm`} />
        </Box>
      </Box>
    </CardWrapperMarkup>
  );
}
