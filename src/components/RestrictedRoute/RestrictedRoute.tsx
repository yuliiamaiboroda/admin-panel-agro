import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUserRole } from 'redux/user';
import { Roles } from 'helpers/constants';

interface IProps {
  component: JSX.Element;
  redirectTo?: string;
  accessRight?: `${Roles}`[];
}
export default function RestrictedRoute({
  component,
  redirectTo = '/',
  accessRight,
}: IProps) {
  const role = useAppSelector(selectUserRole);

  if (role) {
    if (role === Roles.admin || accessRight?.includes(role)) {
      return component;
    }
  }
  return <Navigate to={redirectTo} replace />;
}
