import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUser } from 'redux/auth';

interface IProps {
  component: JSX.Element;
  auth?: boolean;
  redirectTo: string;
}
export default function PrivateRoute({
  component,
  auth = false,
  redirectTo = '/',
}: IProps) {
  const { isAuthorized } = useAppSelector(selectUser);
  const location = useLocation();

  const redirectHref = location.state?.from ?? redirectTo;

  if (isAuthorized !== auth) {
    return <Navigate to={redirectHref} replace state={{ from: location }} />;
  }

  return component;
}
