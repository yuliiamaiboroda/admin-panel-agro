import { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
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
        <MdCheckBox size={24} />
      ) : (
        <MdCheckBoxOutlineBlank size={24} />
      )}
      {title}
    </Label>
  );
}
