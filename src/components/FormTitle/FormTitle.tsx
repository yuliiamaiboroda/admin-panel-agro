import { H2 } from './FormTitle.styled';

interface IProps {
  title: string;
}

export default function FormTitle({ title }: IProps) {
  return <H2>{title}</H2>;
}
