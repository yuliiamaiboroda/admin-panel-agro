import { useAppSelector } from 'hooks';
import { selectResumes } from 'redux/resumes';
import ResumeCard from 'components/ResumeCard';

export default function ResumesGallery() {
  const resumes = useAppSelector(selectResumes);

  return (
    <ul>
      {resumes.map(resume => (
        <ResumeCard key={resume._id} {...resume} />
      ))}
    </ul>
  );
}
