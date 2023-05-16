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
  const { user } = useAppSelector(selectUser);
  if (user.role !== 'ApplyManager') {
    return <Navigate to={redirectTo} replace />;
  }
  return component;
}
