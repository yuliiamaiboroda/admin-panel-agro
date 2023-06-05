import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { Button } from './FavoriteButton.styled';

interface IProps {
  isFavorite: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export default function FavoriteButton({ isFavorite, onClick }: IProps) {
  return (
    <Button type="button" onClick={onClick} isFavorite={isFavorite}>
      {isFavorite ? <HiHeart size={24} /> : <HiOutlineHeart size={24} />}
    </Button>
  );
}
