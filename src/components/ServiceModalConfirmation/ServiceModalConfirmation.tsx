import { useNavigate, useLocation } from 'react-router-dom';
import { selectCertainService, deleteService } from 'redux/services';
import { useAppSelector, useAppDispatch, useModalOutlet } from 'hooks';
import ConfirmationModal from 'components/ConfirmationModal';

export default function ServiceModalConfirmation() {
  const service = useAppSelector(selectCertainService);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = location.state?.from ?? '/services';

  if (!service) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(deleteService(service.id));
    handleCloseModal('/services');
  };

  const handleCancel = () => {
    if (backLinkHref === '/services') {
      handleCloseModal(backLinkHref);
    } else {
      navigate(backLinkHref);
    }
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити послугу "${service.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
