import { Button } from 'helpers/styles';

interface IProps {
  onClick: () => void;
}
export default function LoadMoreButton({ onClick }: IProps) {
  return (
    <Button variant="primary" type="button" onClick={onClick} mx="auto">
      Показати ще
    </Button>
  );
}
