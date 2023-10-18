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
import { ErrorMessage, useField } from 'formik';
import { Error } from 'components/FormField/FormField.styled';

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
  fieldName: string;
}

export default function DropDown({
  options,
  setFieldValue,
  initialValue = null,
  fieldName,
}: IProps) {
  const [isActive, setIsActive] = useState(false);
  const isInitialValue = initialValue
    ? initialValue.shownName
    : 'Оберіть категорію';
  const [selected, setIsSelected] = useState(isInitialValue);
  const [, meta] = useField(fieldName);

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
        $isInvalid={meta.touched && !!meta.error}
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
      )}{' '}
      <ErrorMessage name={fieldName}>
        {msg => <Error>{msg}</Error>}
      </ErrorMessage>
    </Dropdown>
  );
}
