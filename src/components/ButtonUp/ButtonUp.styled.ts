import styled, { keyframes } from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Button = styled.button`
  position: fixed;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 15;
  right: 20px;
  bottom: 20px;
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
