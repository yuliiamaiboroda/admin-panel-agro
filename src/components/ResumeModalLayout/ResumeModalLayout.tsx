import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  getCertainResume,
  removeCertainResume,
  selectResumeError,
  selectResumeLoading,
} from 'redux/resumes';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader';

export default function ResumeModalLayout() {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectResumeError);
  const isLoading = useAppSelector(selectResumeLoading);

  useEffect(() => {
    if (resumeId) {
      dispatch(getCertainResume(resumeId));
    }

    return () => {
      dispatch(removeCertainResume());
    };
  }, [dispatch, resumeId]);

  if (error) {
    return <Navigate to="/resumes" replace />;
  }

  return (
    <Modal onClose={() => navigate('/resumes')}>
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
