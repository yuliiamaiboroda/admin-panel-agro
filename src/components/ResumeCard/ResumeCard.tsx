import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { updateResumeViews, updateResumeIsFavorite } from 'redux/resumes';
import type { IResume } from 'helpers/types';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import ItemLink from 'components/ItemLink';
import Box from 'components/Box';
import FavoriteButton from 'components/FavoriteButton';
import UnviewedMark from 'components/UnviewedMark';

export default function ResumeCard({
  id,
  name,
  position,
  comment,
  isFavorite,
  isReviewed,
}: IResume) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleUpdateViews = () => {
    if (!isReviewed) {
      dispatch(updateResumeViews(id));
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
        <CardTitleStringMarkup value={name} />
        <CardDetailStringMarkup title="Позиція" value={position} />
        <CardDetailStringMarkup title="Коментар" value={comment} />
        <Box display="flex" justifyContent="center" gridGap={2}>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => dispatch(updateResumeIsFavorite(id))}
          />
          <ItemLink type="remove" navigateTo={`${id}/confirm`} />
        </Box>
      </Box>
    </CardWrapperMarkup>
  );
}
