import { Title } from './CardTitleStringMarkup.styled';

interface IProps {
  title?: string;
  value: string;
  additionalValue?: string;
}

export default function CardTitleStringMarkup({ title, value, additionalValue}: IProps) {
  return (
    <Title>
      {title && <b>{title}: </b>}
      {value} {additionalValue}
    </Title>
  );
}
