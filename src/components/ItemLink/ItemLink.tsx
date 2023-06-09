import type { Location } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
// import { ItemLinkLink } from './ItemLink.styled';
import { ControlLink } from 'helpers/styles';

interface IProps {
  type: 'edit' | 'remove';
  navigateTo: string;
  state?: { from: Location | string };
}

export default function ItemLink({ type, navigateTo, state }: IProps) {
  return (
    <ControlLink
      to={navigateTo}
      state={state}
      variant="secondary"
      warning={type === 'remove'}
    >
      {type === 'edit' ? (
        <HiOutlinePencil size={24} style={{ pointerEvents: 'none' }} />
      ) : (
        <HiOutlineTrash size={24} style={{ pointerEvents: 'none' }} />
      )}
    </ControlLink>
  );
}
