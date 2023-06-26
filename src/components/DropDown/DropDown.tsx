import { useState } from 'react';
import {
  Dropdown,
  SelectedItem,
  IconUp,
  IconDown,
  Input,
  DropdownList,
  Item,
} from './DropDown.styled';

interface IOption {
  name: string;
  type: string;
  id: string;
  value: string;
  shownName: string;
}
interface IProps {
  options: IOption[];
  initialValue?: IOption;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export default function DropDown({ options, setFieldValue }: IProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('Оберіть категорію');

  const handleClick = (el: IOption) => {
    setIsSelected(el.shownName);
    setIsActive(!isActive);
    setFieldValue(el.name, el.value);
  };

  return (
    <Dropdown>
      <SelectedItem
        onClick={e => {
          setIsActive(!isActive);
        }}
      >
        {selected}
        <span>{isActive ? <IconUp /> : <IconDown />}</span>
      </SelectedItem>
      {isActive && (
        <DropdownList>
          {options.map(el => (
            <Item
              key={el.id}
              onClick={e => {
                if (e.target === e.currentTarget) {
                  handleClick(el);
                }
              }}
            >
              {el.shownName}
              <Input
                name={el.name}
                id={el.id}
                value={el.value}
                type={el.type}
              />
            </Item>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
}
