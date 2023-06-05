import type { Location } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { CardButtonLink } from './CardButton.styled';

interface IProps {
  type: 'edit' | 'remove';
  navigateTo: string;
  state?: { from: Location | string };
}

export default function CardButton({ type, navigateTo, state }: IProps) {
  return (
    <CardButtonLink to={navigateTo} state={state}>
      {type === 'edit' ? (
        <HiOutlinePencil
          size={24}
          style={{ pointerEvents: 'none', color: '#c03221' }}
        />
      ) : (
        <HiOutlineTrash
          size={24}
          style={{ pointerEvents: 'none', color: '#c03221' }}
        />
      )}
    </CardButtonLink>
  );
}
