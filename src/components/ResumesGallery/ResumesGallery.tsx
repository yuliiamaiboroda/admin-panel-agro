import { useAppSelector } from 'hooks';
import { selectResumes } from 'redux/resumes';
import ResumeCard from 'components/ResumeCard';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';

export default function ResumesGallery() {
  const resumes = useAppSelector(selectResumes);

  return (
    <GalleryWrapper>
      {resumes.length ? (
        resumes.map(resume => <ResumeCard key={resume._id} {...resume} />)
      ) : (
        <CardPlaceholder />
      )}
    </GalleryWrapper>
  );
}
