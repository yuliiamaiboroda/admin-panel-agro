import styled, { keyframes } from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Button } from 'helpers/styles';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledButtonUp = styled(Button)`
  position: fixed;
  right: 20px;
  bottom: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  padding: 0;
  animation: ${FadeIn} 350ms ease-in-out;
`;

export const ArrowUp = styled(BsArrowUpCircleFill)`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
