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
}

export default function DropDown({ options }: IProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('Оберіть категорію');

  const handleClick = (shownName: string) => {
    setIsSelected(shownName);
    setIsActive(!isActive);
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
                  handleClick(el.shownName);
                }
              }}
            >
              {el.shownName}
              <Input
                name={el.name}
                id={el.id}
                value={el.value}
                type={el.type}
                //   onChange={e => console.log(e)}
              />
            </Item>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
}
