import styled, { keyframes } from 'styled-components';

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

export const Input = styled.div<{
  $isInvalid?: boolean;
  $isInvalidMsg?: string;
  $isFileSelected?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.button};
  border: 2px solid;
  border-color: ${props =>
    (props.$isInvalid && props.$isInvalidMsg)
      ? props.theme.colors.warning
      : props.theme.colors.confirmation};
  animation: ${props => props.$isInvalid && shakeInput} 0.82s
    cubic-bezier(0.36, 0.07, 0.19, 0.97);
  height: ${props => props.theme.space[11]}px;
  color: ${props =>
    props.$isFileSelected
      ? props.theme.colors.secondaryText
      : props.theme.colors.primaryText};
`;
