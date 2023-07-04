import { Title } from './ModalTitle.styled';

interface IProps {
  value: string;
}

export default function ModalTitle({ value }: IProps) {
  return (
    <Title
      color="secondaryText"
      fontWeight="bold"
      fontSize={['l', 'xl']}
      as="h2"
    >
      {value}
    </Title>
  );
}
