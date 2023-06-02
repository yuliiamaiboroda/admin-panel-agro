import { HiOutlinePlus } from 'react-icons/hi';
import { Button } from './CreateButton.styled';

interface IProps {
  onClick: () => void;
}

export default function CreateButton({ onClick }: IProps) {
  return (
    <Button type="button" onClick={onClick}>
      <HiOutlinePlus size={24} />
    </Button>
  );
}
