import { CardWrapper } from './CardWrapperMarkup.styled';

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function CardWrapperMarkup({ children, onClick }: IProps) {
  return <CardWrapper onClick={onClick}>{children}</CardWrapper>;
}
