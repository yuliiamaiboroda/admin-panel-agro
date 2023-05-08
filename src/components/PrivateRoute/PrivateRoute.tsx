import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUser } from 'redux/user';

interface IProps {
  component: JSX.Element;
  auth: boolean;
  redirectTo: string;
}
export default function PrivateRoute({
  component,
  auth,
  redirectTo = '/',
}: IProps) {
  const { isAuthorized } = useAppSelector(selectUser);

  if (isAuthorized !== auth) {
    return <Navigate to={redirectTo} replace />;
  }

  return component;
}
