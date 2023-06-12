import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { Button } from 'helpers/styles';

interface IProps {
  isFavorite: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export default function FavoriteButton({ isFavorite, onClick }: IProps) {
  return (
    <Button type="button" onClick={onClick} variant="content">
      {isFavorite ? (
        <HiHeart size={24} style={{ pointerEvents: 'none' }} />
      ) : (
        <HiOutlineHeart size={24} style={{ pointerEvents: 'none' }} />
      )}
    </Button>
  );
}
