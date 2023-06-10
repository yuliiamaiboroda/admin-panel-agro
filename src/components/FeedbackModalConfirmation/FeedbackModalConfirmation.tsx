import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { removeFeedbackById, selectFeedbacks } from 'redux/feedbacks';
import ConfirmationModal from 'components/ConfirmationModal';

export default function FeedbackModalConfirmation() {
  const { certain } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/feedbacks';

  if (!certain) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeFeedbackById(certain._id));
    navigate('/feedbacks');
  };

  const handleCancel = () => navigate(backLinkHref);

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити фідбек від "${certain.name}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
