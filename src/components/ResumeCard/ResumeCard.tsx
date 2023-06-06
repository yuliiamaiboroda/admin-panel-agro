import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { updateResumeViews, updateResumeIsFavorite } from 'redux/resumes';
import type { IResumeEntity } from 'helpers/types';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import CardButton from 'components/CardButton';
import Box from 'components/Box';
import FavoriteButton from 'components/FavoriteButton';

export default function ResumeCard({
  _id,
  name,
  position,
  comment,
  isFavorite,
  isReviewed,
}: IResumeEntity) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleUpdateViews = () => {
    if (!isReviewed) {
      dispatch(updateResumeViews(_id));
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
      {!isReviewed && <CardDetailStringMarkup value="New!!!" />}
      <CardTitleStringMarkup value={name} />
      <CardDetailStringMarkup title="Позиція" value={position} />
      <CardDetailStringMarkup title="Коментар" value={comment} />
      <Box display="flex" justifyContent="center" gridGap={2}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => dispatch(updateResumeIsFavorite(_id))}
        />
        <CardButton type="remove" navigateTo={`${_id}/confirm`} />
      </Box>
    </CardWrapperMarkup>
  );
}
