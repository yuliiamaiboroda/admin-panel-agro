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

export default function ResumesPage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const error = useAppSelector(selectResumeError);

  if (error) {
    Notify.failure(error);
    return (
      <>
        <h1>Resumes page</h1>
        <h2>Ooops... Something went wrong</h2>
        <h3>It seems like: {error}</h3>
      </>
    );
  }

  return (
    <>
      <h1>This is ResumesPage!</h1>
      <ResumesFilter />
      <button type="button" onClick={openModal}>
        Create resume
      </button>
      <ResumesGallery />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ResumeForm onSubmit={closeModal} />
        </Modal>
      )}
    </>
  );
}
