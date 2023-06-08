import { HiOutlinePlus } from 'react-icons/hi';
import Button from 'components/Button';

interface IProps {
  onClick: () => void;
}

export default function CreateButton({ onClick }: IProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="primary"
      borderRadius="circle"
      p={0}
      width="45px"
      height="45px"
      position="fixed"
      bottom="20px"
      right="80px"
    >
      <HiOutlinePlus size={28} />
    </Button>
  );
}
