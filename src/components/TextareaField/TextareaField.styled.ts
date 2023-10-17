import styled, { keyframes } from 'styled-components';
import { Field } from 'formik';

interface CustomTextareaProps {
  $isInvalid?: boolean;
}
const shakeInput = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const fadeout = keyframes`
from{
    opacity: 1;
}
to{
    opacity: 0;
}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[1]}px;
  position: relative;
`;

export const Error = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  top: 105%;
  padding: ${props => props.theme.space[1]}px;
  /* animation: ${fadeout} 3s linear;
  animation-fill-mode: forwards; */
  border: ${props => props.theme.borders.warning};
  left: ${props => props.theme.space[0]}px;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.warning};
  font-size: ${props => props.theme.colors.s};
`;

export const Textarea = styled(Field)<CustomTextareaProps>`
  width: 100%;
  padding: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.button};
  outline: none;
  animation: ${props => props.$isInvalid && shakeInput} 0.82s
    cubic-bezier(0.36, 0.07, 0.19, 0.97);
  border-color: ${props =>
    props.$isInvalid
      ? props.theme.colors.warning
      : props.theme.colors.confirmation};
  height: ${props => props.theme.space[18]}px;
  resize: none;
  border-width: 2px;
`;
