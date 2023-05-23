import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import { getAllResumes, selectResumeError } from 'redux/resumes';
import ResumesGallery from 'components/ResumesGallery';
import Modal from 'components/Modal';
import ResumeForm from 'components/ResumeForm';

export default function ResumesPage() {
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const error = useAppSelector(selectResumeError);

  useEffect(() => {
    dispatch(getAllResumes());
  }, [dispatch]);

  if (error) {
    Notify.failure(error);
  }

  return (
    <>
      <h1>This is ResumesPage!</h1>
      <button type="button" onClick={openModal}>
        Create resume
      </button>
      <ResumesGallery />
      <Outlet />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ResumeForm onSubmit={closeModal} />
        </Modal>
      )}
    </>
  );
}
