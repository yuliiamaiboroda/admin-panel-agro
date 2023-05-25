import UpdateUserForm from 'components/Users/UpdateUserForm';
import { useAppSelector } from 'hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectUsersList } from 'redux/users';

export default function UsersModalUpdateForm() {
  const { certain } = useAppSelector(selectUsersList);
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const backLinkHref = routeLocation.state?.from ?? '/users';

  if (!certain) {
    return null;
  }

  return <UpdateUserForm {...certain} onClose={() => navigate(backLinkHref)} />;
}
