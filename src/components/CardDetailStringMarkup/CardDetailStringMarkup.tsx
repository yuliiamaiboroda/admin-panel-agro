import { Details } from './CardDetailStringMarkup.styled';
import stringFormatting from 'utils/string-formatting';

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
      {stringFormatting(title, value)}
    </Details>
  );
}
