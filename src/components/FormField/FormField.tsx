import { ErrorMessage, useField } from 'formik';
import { Label, Input, Error } from './FormField.styled';
import Box from 'components/Box';

interface IProps {
  fieldName: string;
  labelName: string;
  placeholderName: string;
  typeName?: string;
}

export default function FormField({
  fieldName,
  labelName,
  placeholderName,
  typeName,
}: IProps) {
  // eslint-disable-next-line
  const [field, meta] = useField(fieldName);

  return (
    <Box position="relative" width="100%">
      <Label>
        {labelName}
        <Input
          name={fieldName}
          id={fieldName}
          type={typeName ? typeName : 'text'}
          placeholder={placeholderName}
          isInvalid={meta.touched && meta.error}
        />
        <ErrorMessage name={fieldName}>
          {msg => <Error>{msg}</Error>}
        </ErrorMessage>
      </Label>
    </Box>
  );
}
