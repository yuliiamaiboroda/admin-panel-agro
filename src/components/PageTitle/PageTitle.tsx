import { Title, TitleWrapper } from './PageTitle.styled';

interface IProps {
  title: string;
}

export default function PageTitle({ title }: IProps) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
}
