import { useEffect } from 'react';
import {
  Outlet,
  useNavigate,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainResume,
  removeCertainResume,
  selectResumeError,
} from 'redux/resumes';
import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks';

export default function ResumeModalLayout() {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectResumeError);
  const location = useLocation();
  const { isModalOpen, closeModal } = useModal(true);

  useEffect(() => {
    if (resumeId) {
      dispatch(getCertainResume(resumeId));
    }

    return () => {
      dispatch(removeCertainResume());
    };
  }, [dispatch, resumeId]);

  const backLinkHref = location?.state || '/resumes';

  if (error) {
    return <Navigate to={backLinkHref} replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        closeModal();
        setTimeout(() => {
          navigate(backLinkHref);
        }, 250);
      }}
    >
      <Outlet />
    </Modal>
  );
}
