import { Title } from './CardTitleStringMarkup.styled';

interface IProps {
  title?: string;
  value: string | null;
  additionalValue?: string | null;
}

export default function CardTitleStringMarkup({ title, value, additionalValue}: IProps) {
  return (
    <Title>
      {title && <b>{title}: </b>}
      {value} {additionalValue}
    </Title>
  );
}
