import { useState } from 'react';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';
import { Label, HiddenInput } from './FilterCheckbox.styled';

interface IProps {
  name: string;
  title: string;
  onChange: (isChecked: boolean) => void;
}

export default function FilterCheckbox({ name, title, onChange }: IProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Label>
      <HiddenInput
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={({ target }) => {
          setIsChecked(prevState => !prevState);
          onChange(target.checked);
        }}
      />
      {isChecked ? (
        <GrCheckboxSelected size={20} />
      ) : (
        <GrCheckbox size={20} />
      )}
      {title}
    </Label>
  );
}
