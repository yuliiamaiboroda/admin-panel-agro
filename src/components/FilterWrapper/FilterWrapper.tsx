import type { ReactNode } from 'react';
import { Filter } from './FilterWrapper.styled';

interface IProps {
  children: ReactNode;
}

export default function FilterWrapper({ children }: IProps) {
  return <Filter>{children}</Filter>;
}
