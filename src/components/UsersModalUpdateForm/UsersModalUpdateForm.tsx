import UpdateUserForm from 'components/Users/UpdateUserForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectUsersList } from 'redux/users';
import { useAppSelector, useModalOutlet } from 'hooks';

export default function UsersModalUpdateForm() {
  const { certain } = useAppSelector(selectUsersList);
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = routeLocation.state?.from ?? '/users';

  if (!certain) {
    return null;
  }

  return (
    <UpdateUserForm
      {...certain}
      onClose={() => {
        if (backLinkHref === '/users') {
          handleCloseModal(backLinkHref);
        } else {
          navigate(backLinkHref);
        }
      }}
    />
  );
}
