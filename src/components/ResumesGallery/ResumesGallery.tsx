import { useAppSelector, useAppDispatch, useQueryParams } from 'hooks';
import {
  selectResumes,
  selectResumePagination,
  loadMoreResumes,
} from 'redux/resumes';
import ResumeCard from 'components/ResumeCard';

export default function ResumesGallery() {
  const [queryParams] = useQueryParams();
  const resumes = useAppSelector(selectResumes);
  const pagination = useAppSelector(selectResumePagination);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {resumes.map(resume => (
          <ResumeCard key={resume._id} {...resume} />
        ))}
      </ul>
      {resumes.length < pagination.total ? (
        <button
          type="button"
          onClick={() =>
            dispatch(
              loadMoreResumes({
                ...queryParams,
                skip: pagination.skip + pagination.limit,
              })
            )
          }
        >
          Load more
        </button>
      ) : null}
    </>
  );
}
