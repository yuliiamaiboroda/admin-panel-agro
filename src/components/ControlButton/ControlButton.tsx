import type { Location } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { ControlButtonLink } from './ControlButton.styled';

interface IProps {
  type: 'edit' | 'remove';
  navigateTo: string;
  state?: { from: Location | string };
}

export default function ControlButton({ type, navigateTo, state }: IProps) {
  return (
    <ControlButtonLink to={navigateTo} state={state} variant={type}>
      {type === 'edit' ? (
        <HiOutlinePencil size={24} style={{ pointerEvents: 'none' }} />
      ) : (
        <HiOutlineTrash size={24} style={{ pointerEvents: 'none' }} />
      )}
    </ControlButtonLink>
  );
}
