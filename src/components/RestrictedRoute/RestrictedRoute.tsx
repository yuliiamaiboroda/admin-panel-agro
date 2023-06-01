import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUserRole } from 'redux/user';
import { Roles } from 'helpers/constants';

interface IProps {
  component: JSX.Element;
  redirectTo?: string;
  accessRight?: keyof typeof Roles | (keyof typeof Roles)[];
}
export default function RestrictedRoute({
  component,
  redirectTo = '/',
  accessRight,
}: IProps) {
  const role = useAppSelector(selectUserRole);
  const location = useLocation();

  const redirectHref = location.state?.from ?? redirectTo;

  if (role) {
    if (role === Roles.admin || accessRight?.includes(role)) {
      return component;
    }
  }
  return <Navigate to={redirectHref} replace />;
}
