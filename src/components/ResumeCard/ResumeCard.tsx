import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { updateResumeViews, updateResumeIsFavorite } from 'redux/resumes';
import type { IResumeEntity } from 'helpers/types';
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

  return (
    <li
      style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'teal' }}
      onClick={() => {
        handleUpdateViews();
        navigate(`${_id}${location.search}`, { state: location });
      }}
    >
      {!isReviewed ? <h3>New!!!</h3> : null}
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>{comment}</p>
      <Box display="flex" justifyContent="center" gridGap={2}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={event => {
            event.stopPropagation();
            console.log('isFavorite', isFavorite);
            dispatch(updateResumeIsFavorite(_id));
          }}
        />
        <CardButton type="remove" navigateTo={`${_id}/confirm`} />
      </Box>
    </li>
  );
}
