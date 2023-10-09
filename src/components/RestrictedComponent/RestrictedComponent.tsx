import type { ReactNode } from 'react';
import { useAppSelector } from 'hooks';
import { selectUserRole } from 'redux/auth';
import { Roles } from 'helpers/constants';

interface IProps {
  children: ReactNode;
  accessRight?: keyof typeof Roles | (keyof typeof Roles)[];
}

export default function RestrictedComponent({ children, accessRight }: IProps) {
  const role = useAppSelector(selectUserRole);

  if (!role) {
    return null;
  }

  if (role !== Roles.admin && !accessRight?.includes(role)) {
    return null;
  }
  return <>{children}</>;
}
