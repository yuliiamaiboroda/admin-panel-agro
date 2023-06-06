import { Details } from './CardDetailStringMarkup.styled';

interface IProps {
  title?: string | null;
  value: string;
}

export default function CardDetailStringMarkup({
  title = null,
  value,
}: IProps) {
  return (
    <Details>
      {title && <b>{title}: </b>}
      {value}
    </Details>
  );
}
