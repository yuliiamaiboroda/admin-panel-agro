import { useEffect, useState } from 'react';
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
interface IInitial {
  value: string;
  shownName: string;
  name: string;
}
interface IProps {
  options: IOption[];
  initialValue?: IInitial | null;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export default function DropDown({
  options,
  setFieldValue,
  initialValue = null,
}: IProps) {
  const [isActive, setIsActive] = useState(false);
  const isInitialValue = initialValue
    ? initialValue.shownName
    : 'Оберіть категорію';
  const [selected, setIsSelected] = useState(isInitialValue);

  const handleClick = (el: IOption) => {
    setIsSelected(el.shownName);
    setIsActive(!isActive);
    setFieldValue(el.name, el.value);
  };

  useEffect(() => {
    if (initialValue) {
      setFieldValue(initialValue.name, initialValue.value);
    }
    // eslint-disable-next-line
  }, []);

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
