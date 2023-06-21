import Box from 'components/Box';
import { Button } from 'helpers/styles';

interface IProps {
  onSubmit: () => void;
  onCancel: () => void;
  submitButtonText?: string;
  cancelButtonText?: string;
}

export default function FormButtons({
  onSubmit,
  onCancel,
  submitButtonText = 'Створити',
  cancelButtonText = 'Відміна',
}: IProps) {
  return (
    <Box display="flex">
      <Button variant="secondary" type="button" onClick={onCancel}>
        {cancelButtonText}
      </Button>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        {submitButtonText}
      </Button>
    </Box>
  );
}
