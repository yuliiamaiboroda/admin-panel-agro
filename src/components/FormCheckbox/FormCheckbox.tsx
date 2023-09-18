import { useField } from 'formik';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Label, HiddenInput } from './FormCheckbox.styled';

interface IProps {
  fieldName: string;
  label: string;
}

export default function FormCheckbox({ fieldName, label }: IProps) {
  const [field] = useField(fieldName);

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
