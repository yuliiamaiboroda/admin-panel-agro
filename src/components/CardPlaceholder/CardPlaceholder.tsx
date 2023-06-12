import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import { CardWrapper } from './CardPlaceholder.styled';

interface IProps {
  title?: string;
  description?: string;
}

export default function CardPlaceholder({
  title = 'Немає даних для відображення',
  description = 'Ви можете скористатись кнопкою "створення" або перейти на іншу сторінку',
}: IProps) {
  return (
    <CardWrapper>
      <CardTitleStringMarkup value={title} />
      <CardDetailStringMarkup value={description} />
    </CardWrapper>
  );
}
