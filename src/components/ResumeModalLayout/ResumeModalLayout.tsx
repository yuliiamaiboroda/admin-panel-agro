import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainResume,
  removeCertainResume,
  selectResumeError,
  selectResumeLoading,
} from 'redux/resumes';
import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks';
import { translateError } from 'utils';
import Loader from 'components/Loader';

export default function ResumeModalLayout() {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectResumeError);
  const isLoading = useAppSelector(selectResumeLoading);
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

  useEffect(() => {
    if (resumeId) {
      dispatch(getCertainResume(resumeId));
    }

    return () => {
      dispatch(removeCertainResume());
    };
  }, [dispatch, resumeId]);

  const backLinkHref = '/resumes';

  if (error) {
    Notify.failure(translateError(error));
    return <Navigate to={backLinkHref} replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        handleCloseModal(backLinkHref);
      }}
    >
      {isLoading ? (
        <Loader position="static" />
      ) : (
        <Outlet context={{ handleCloseModal }} />
      )}
    </Modal>
  );
}
