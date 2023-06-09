import { useAppSelector, useAppDispatch, useQueryParams } from 'hooks';
import {
  selectResumes,
  selectResumePagination,
  loadMoreResumes,
} from 'redux/resumes';
import ResumeCard from 'components/ResumeCard';
import GalleryWrapper from 'components/GalleryWrapper';
import LoadMoreButton from 'components/LoadMoreButton';

export default function ResumesGallery() {
  const [queryParams] = useQueryParams();
  const resumes = useAppSelector(selectResumes);
  const pagination = useAppSelector(selectResumePagination);
  const dispatch = useAppDispatch();

  return (
    <>
      <GalleryWrapper>
        {resumes.map(resume => (
          <ResumeCard key={resume._id} {...resume} />
        ))}
      </GalleryWrapper>
      {resumes.length < pagination.total ? (
        <LoadMoreButton
          onClick={() =>
            dispatch(
              loadMoreResumes({
                ...queryParams,
                skip: pagination.skip + pagination.limit,
              })
            )
          }
        />
      ) : null}
    </>
  );
}
