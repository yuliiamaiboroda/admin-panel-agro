import { Details } from './CardDetailStringMarkup.styled';

interface IProps {
  title: string;
  value: string;
}

export default function CardDetailStringMarkup({ title, value }: IProps) {
  return (
    <Details>
      <b>{title}: </b>
      {value}
    </Details>
  );
}
