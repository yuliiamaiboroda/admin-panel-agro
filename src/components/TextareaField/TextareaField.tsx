import { ErrorMessage, useField } from 'formik';
import { Error, Textarea, Label } from './TextareaField.styled';

interface IProps {
  fieldName: string;
  labelName: string;
  placeholderName: string;
}

export default function TextareaField({
  fieldName,
  labelName,
  placeholderName,
}: IProps) {
  const [field, meta] = useField(fieldName);

  return (
    <Label>
      {labelName}
      <Textarea
        {...field}
        as="textarea"
        placeholder={placeholderName}
        rows={2}
        cols={32}
        $isInvalid={meta.touched && !!meta.error}
      />
      <ErrorMessage name={fieldName}>
        {msg => <Error>{msg}</Error>}
      </ErrorMessage>
    </Label>
  );
}
