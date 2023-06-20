import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppSelector, useModal } from 'hooks';
import { selectResumeError } from 'redux/resumes';
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

export default function ResumesPage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const error = useAppSelector(selectResumeError);

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
        <ResumesFilter />
      </FilterWrapper>
      <ResumesGallery />
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
