import Box from 'components/Box';
import { Button } from 'helpers/styles';
import ModalTitle from 'components/ModalTitle';

interface IProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export default function ConfirmationModal({
  title,
  onConfirm,
  onCancel,
  confirmButtonText = 'Так',
  cancelButtonText = 'Відміна',
}: IProps) {
  return (
    <Box display="flex" flexDirection="column" gridGap={[4, 5]}>
      <ModalTitle value={title} />
      <Box display="flex" justifyContent="flex-end" gridGap={[2, 3]}>
        <Button variant="secondary" type="button" onClick={onConfirm}>
          {confirmButtonText}
        </Button>
        <Button variant="primary" type="button" onClick={onCancel}>
          {cancelButtonText}
        </Button>
      </Box>
    </Box>
  );
}
