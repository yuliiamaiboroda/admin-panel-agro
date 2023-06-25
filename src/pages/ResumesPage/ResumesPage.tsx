import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppSelector, useModal, useAppDispatch } from 'hooks';
import {
  getAllResumes,
  selectResumeError,
  selectResumes,
  selectResumePagination,
  loadMoreResumes,
} from 'redux/resumes';
import type { IResumeFilter } from 'helpers/types';
import ResumesGallery from 'components/ResumesGallery';
import Modal from 'components/Modal';
import ResumeForm from 'components/ResumeForm';
import ResumesFilter from 'components/ResumesFilter';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import CreateButton from 'components/CreateButton';
import GalleryWrapper from 'components/GalleryWrapper';
import CardPlaceholder from 'components/CardPlaceholder';
import FilterWrapper from 'components/FilterWrapper';
import LoadMoreButton from 'components/LoadMoreButton';

export default function ResumesPage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [filterStatus, setFilterStatus] = useState<IResumeFilter>({});
  const error = useAppSelector(selectResumeError);
  const dispatch = useAppDispatch();

  const resumes = useAppSelector(selectResumes);
  const pagination = useAppSelector(selectResumePagination);

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <CreateButton onClick={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ResumeForm onSubmit={closeModal} />
        </Modal>
      )}
    </>
  );
}
