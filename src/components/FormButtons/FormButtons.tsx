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
    <Box display="flex" gridGap={[4, 5]}>
      <Button variant="secondary" type="button" onClick={onCancel} flexGrow={1}>
        {cancelButtonText}
      </Button>
      <Button variant="primary" type="submit" onClick={onSubmit} flexGrow={1}>
        {submitButtonText}
      </Button>
    </Box>
  );
}
