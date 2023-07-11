import { useField } from 'formik';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Label, HiddenInput } from './FormCheckbox.styled';

interface IProps {
  fieldName: string;
  label: string;
}

export default function FormCheckbox({ fieldName, label }: IProps) {
  const [field, meta] = useField(fieldName);
  console.log('meta', meta);
  console.log('field', field);
  return (
    <Label>
      <HiddenInput {...field} type="checkbox" />
      {field.value ? (
        <MdCheckBox size={24} />
      ) : (
        <MdCheckBoxOutlineBlank size={24} />
      )}
      {label}
    </Label>
  );
}
