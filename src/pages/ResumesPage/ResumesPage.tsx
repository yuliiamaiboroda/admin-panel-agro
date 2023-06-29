import { Suspense, useState, useEffect, useRef } from 'react';
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

import { CSSTransition } from 'react-transition-group';

export default function ResumesPage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [filterStatus, setFilterStatus] = useState<IResumeFilter>({});
  const resumes = useAppSelector(selectResumes);
  const pagination = useAppSelector(selectResumePagination);
  const error = useAppSelector(selectResumeError);
  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);

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
      <CSSTransition
        nodeRef={nodeRef}
        timeout={500}
        classNames="my-node"
        in={isModalOpen}
        appear
        unmountOnExit
      >
        <Modal innerRef={nodeRef} onClose={closeModal}>
          <ResumeForm onSubmit={closeModal} />
        </Modal>
      </CSSTransition>
    </>
  );
}
