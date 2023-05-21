import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useModal } from 'hooks';
import { getAllResumes } from 'redux/resumes';
import ResumesGallery from 'components/ResumesGallery';
import Modal from 'components/Modal';
import ResumeForm from 'components/ResumeForm';

export default function ResumesPage() {
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    dispatch(getAllResumes());
  }, [dispatch]);

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
          <ResumeForm />
        </Modal>
      )}
    </>
  );
}
