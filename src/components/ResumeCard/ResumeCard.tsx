import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { updateResumeViews, updateResumeIsFavorite } from 'redux/resumes';
import type { IResumeEntity } from 'helpers/types';
import CardButton from 'components/CardButton';
import Box from 'components/Box';

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
        navigate(_id);
      }}
    >
      {!isReviewed ? <h3>New!!!</h3> : null}
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>{comment}</p>
      <Box display="flex" justifyContent="center" gridGap={2}>
        <button
          type="button"
          onClick={event => {
            event.stopPropagation();
            dispatch(updateResumeIsFavorite(_id));
          }}
        >
          {isFavorite ? 'Remove from fovorites' : 'Add to favorites'}
        </button>
        <CardButton type="remove" navigateTo={`${_id}/confirm`} />
      </Box>
    </li>
  );
}
