import { useNavigate, useLocation } from 'react-router-dom';
import { removeFeedbackById, selectFeedbacks } from 'redux/feedbacks';
import { useAppDispatch, useAppSelector, useModalOutlet } from 'hooks';
import ConfirmationModal from 'components/ConfirmationModal';

export default function FeedbackModalConfirmation() {
  const { certain } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = location.state?.from ?? '/feedbacks';

  if (!certain) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeFeedbackById(certain._id));
    handleCloseModal('/feedbacks');
  };

  const handleCancel = () => {
    if (backLinkHref === '/feedbacks') {
      handleCloseModal(backLinkHref);
    } else {
      navigate(backLinkHref);
    }
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити фідбек від "${certain.name}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
