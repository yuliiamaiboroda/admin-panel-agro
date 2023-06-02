import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { CardButtonLink } from './CardButton.styled';

interface IProps {
  type: 'edit' | 'remove';
  navigateTo: string;
}

export default function CardButton({ type, navigateTo }: IProps) {
  return (
    <CardButtonLink to={navigateTo}>
      {type === 'edit' ? (
        <HiOutlinePencil style={{ pointerEvents: 'none', color: '#c03221' }} />
      ) : (
        <HiOutlineTrash style={{ pointerEvents: 'none', color: '#c03221' }} />
      )}
    </CardButtonLink>
  );
}
