import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import {
  getCertainFeedback,
  removeCertainFeedback,
  selectFeedbacks,
} from 'redux/feedbacks';

export default function FeedbackModalLayout() {
  const { feedbackId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectFeedbacks);

  useEffect(() => {
    if (feedbackId) {
      dispatch(getCertainFeedback(feedbackId));
    }
    return () => {
      dispatch(removeCertainFeedback());
    };
  }, []);

  if (error) {
    return <Navigate to="/feedbacks" replace />;
  }

  return (
    <Modal onClose={() => navigate('/feedbacks')}>
      {isLoading ? <Loader /> : <Outlet />}
    </Modal>
  );
}
