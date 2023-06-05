import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainResume, updateResumeIsFavorite } from 'redux/resumes';
import FavoriteButton from 'components/FavoriteButton';

export default function ResumeModalDetails() {
  const resume = useAppSelector(selectCertainResume);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!resume) {
    return null;
  }

  const {
    _id,
    name,
    phone,
    email,
    position,
    resumeFileURL,
    comment,
    isFavorite,
  } = resume;
  return (
    <>
      <h1>{name}</h1>
      <a href={`tel:${phone}`}>{phone}</a>
      <br />
      <a href={`mailto:${email}`}>{email}</a>
      <h3>{position}</h3>
      <a
        href={resumeFileURL}
        style={{ color: !resumeFileURL ? 'lightgrey' : 'teal' }}
      >
        Resume file
      </a>
      <p>{comment}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={() => {
          dispatch(updateResumeIsFavorite(_id));
        }}
      />
      <Link to="confirm" state={{ from: location }}>
        Remove
      </Link>
    </>
  );
}
