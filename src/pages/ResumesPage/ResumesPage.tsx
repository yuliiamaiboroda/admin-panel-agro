import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllResumes, selectResumes } from 'redux/resumes';

export default function ResumesPage() {
  const resumes = useAppSelector(selectResumes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllResumes());
  }, [dispatch]);

  return (
    <>
      <h1>This is ResumesPage!</h1>;
      <ul>
        {resumes.map(
          ({ _id, name, phone, email, position, resumeFileURL, comment }) => (
            <li key={_id}>
              <h2>{name}</h2>
              <a href={`tel:${phone}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
              <h3>{position}</h3>
              <a href={resumeFileURL}>Resume file</a>
              <p>{comment}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
