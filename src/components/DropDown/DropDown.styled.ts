import styled from 'styled-components';
import { Field } from 'formik';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';

export const Dropdown = styled.div`
  position: relative;
`;

export const SelectedItem = styled.div`
  color: ${props => props.theme.colors.secondaryText};
  border: ${props => props.theme.borders.accent};
  padding: ${props => props.theme.space[2]}px;
  height: ${props => props.theme.space[11]}px;
  border-radius: ${props => props.theme.radii.button};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconUp = styled(VscTriangleUp)`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.primaryText};
`;

export const IconDown = styled(VscTriangleDown)`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.accentBackground};
`;

export const Input = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const DropdownList = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryBackground};
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.space[2]}px;
  border: ${props => props.theme.borders.light};
`;

export const Item = styled.label`
  padding: ${props => props.theme.space[3]}px 0;
  position: relative;
  :after {
    content: '';
    display: block;
    width: calc(100%+${props => props.theme.space[3]}px);
    height: 1px;
    background: ${props => props.theme.colors.light};

    left: -${props => props.theme.space[2]}px;
    right: -${props => props.theme.space[2]}px;
    bottom: ${props => props.theme.space[0]};
    position: absolute;
  }
`;
