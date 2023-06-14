import { Title, TitleWrapper } from './PageTitle.styled';
import { useEffect } from 'react';

interface IProps {
  title: string;
}

export default function PageTitle({ title }: IProps) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
}
