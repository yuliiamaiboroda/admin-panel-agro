import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeUserById, selectUsersList } from 'redux/users';
import ConfirmationModal from 'components/ConfirmationModal';

export default function UsersModalConfirm() {
  const { certain } = useAppSelector(selectUsersList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/users';

  if (!certain) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeUserById(certain._id));
    navigate('/users');
  };

  const handleCancel = () => {
    navigate(backLinkHref);
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити користувача "${certain.name} ${certain.surname}"?`}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
}
