import { useEffect } from 'react';
import { Outlet, useNavigate, useParams, Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import {
  getCertainFeedback,
  removeCertainFeedback,
  selectFeedbacks,
} from 'redux/feedbacks';
import { translateError } from 'utils';

export default function FeedbackModalLayout() {
  const { feedbackId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectFeedbacks);
  const { isModalOpen, closeModal } = useModal(true);

  const handleCloseModal = (navigateTo: any) => {
    closeModal();
    setTimeout(() => {
      navigate(navigateTo);
    }, 250);
  };

  useEffect(() => {
    if (feedbackId) {
      dispatch(getCertainFeedback(feedbackId));
    }
    return () => {
      dispatch(removeCertainFeedback());
    };
  }, [dispatch, feedbackId]);

  if (error) {
    Notify.failure(translateError(error));
    return <Navigate to="/feedbacks" replace />;
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={() => {
        handleCloseModal('/feedbacks');
      }}
    >
      {isLoading ? <Loader /> : <Outlet context={{ handleCloseModal }} />}
    </Modal>
  );
}
