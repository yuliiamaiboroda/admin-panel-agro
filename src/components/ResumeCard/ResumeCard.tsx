import { useNavigate } from 'react-router-dom';
import type { IResume } from 'redux/resumes';

export default function ResumeCard({
  _id,
  name,
  phone,
  email,
  position,
  resumeFileURL,
  comment,
}: IResume) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(_id)}>
      <h2>{name}</h2>
      <a href={`tel:${phone}`}>{phone}</a>
      <a href={`mailto:${email}`}>{email}</a>
      <h3>{position}</h3>
      <a href={resumeFileURL}>Resume file</a>
      <p>{comment}</p>
    </li>
  );
}