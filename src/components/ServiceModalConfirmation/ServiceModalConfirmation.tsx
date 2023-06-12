import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainService, deleteService } from 'redux/services';
import ConfirmationModal from 'components/ConfirmationModal';

export default function ServiceModalConfirmation() {
  const service = useAppSelector(selectCertainService);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/services';

  if (!service) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(deleteService(service._id));
    navigate('/services');
  };

  const handleCancel = () => navigate(backLinkHref);

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити послугу "${service.title}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
