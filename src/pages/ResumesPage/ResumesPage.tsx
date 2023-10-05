import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppSelector, useAppDispatch } from 'hooks';
import {
  getAllResumes,
  selectResumeError,
  selectResumes,
  selectResumePagination,
  loadMoreResumes,
} from 'redux/resumes';
import type { IResumeFilter } from 'helpers/types';
import ResumesGallery from 'components/ResumesGallery';
import ResumesFilter from 'components/ResumesFilter';
import PageTitle from 'components/PageTitle';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';
import FilterWrapper from 'components/FilterWrapper';
import LoadMoreButton from 'components/LoadMoreButton';

export default function ResumesPage() {
  const [filterStatus, setFilterStatus] = useState<IResumeFilter>({});
  const resumes = useAppSelector(selectResumes);
  const pagination = useAppSelector(selectResumePagination);
  const error = useAppSelector(selectResumeError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllResumes(filterStatus));
  }, [dispatch, filterStatus]);

  if (error) {
    Notify.failure(error);
    return (
      <>
        <PageTitle title="Резюме" />
        <GalleryWrapper>
          <CardPlaceholder title="It seems like:" description={error} />
        </GalleryWrapper>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Резюме" />
      <FilterWrapper>
        <ResumesFilter filterStatus={filterStatus} onSelect={setFilterStatus} />
      </FilterWrapper>
      <ResumesGallery />
      {resumes.length < pagination.total ? (
        <LoadMoreButton
          onClick={() =>
            dispatch(
              loadMoreResumes({
                ...filterStatus,
                skip: pagination.skip + pagination.limit,
              })
            )
          }
        />
      ) : null}
      <Outlet />
    </>
  );
}
