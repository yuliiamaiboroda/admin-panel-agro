import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainResume } from 'redux/resumes';

export default function ResumeModalDetails() {
  const resume = useAppSelector(selectCertainResume);
  const location = useLocation();

  if (!resume) {
    return null;
  }

  const { name, phone, email, position, resumeFileURL, comment, createdAt } =
    resume;
  return (
    <>
      <h1>{name}</h1>
      <a href={`tel:${phone}`}>{phone}</a>
      <a href={`mailto:${email}`}>{email}</a>
      <h3>{position}</h3>
      <a href={resumeFileURL}>Resume file</a>
      <p>{comment}</p>
      <p>
        Created at:
        {createdAt}
      </p>
      <Link to="confirm" state={{ from: location }}>
        Remove
      </Link>
    </>
  );
}
