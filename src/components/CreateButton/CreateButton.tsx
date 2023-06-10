import { HiOutlinePlus } from 'react-icons/hi';
// import Button from 'components/Button';
import { Button } from 'helpers/styles';

interface IProps {
  onClick: () => void;
}

export default function CreateButton({ onClick }: IProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="circlePrimary"
      width="45px"
      height="45px"
      position="fixed"
      bottom="20px"
      right="20px"
    >
      <HiOutlinePlus size={24} />
    </Button>
  );
}
