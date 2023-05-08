import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUser } from 'redux/user';

interface IProps {
  component: JSX.Element;
  redirectTo: string;
}
export default function RestrictedRoute({
  component,
  redirectTo = '/',
}: IProps) {
  const { isAuthorized } = useAppSelector(selectUser);
  if (isAuthorized) {
    return <Navigate to={redirectTo} replace />;
  }
  return component;
}
