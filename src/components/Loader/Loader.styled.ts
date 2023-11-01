import styled, { keyframes } from 'styled-components';
import { GiFarmTractor } from 'react-icons/gi';
interface IProps {
  top: string;
  position: string;
}

export const LoaderWrapper = styled.div<IProps>`
  width: 100%;
  position: ${props => (props.position ? props.position : 'absolute')};
  top: ${props => (props.top ? props.top : '50%')};
  left: ${props => (props.position ? '' : '50%')};
  transform: ${props =>
    props.position
      ? 'translateX(0) translateY(0)'
      : 'translateX(-50%) translateY(-50%)'};
  z-index: ${props => (props.position ? '' : '100')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = keyframes`
from{
    transform: translateX(-50%);
    @media (min-width: 768px) {
    transform: translateX(-100%);
  }
}
to{
    transform: translateX(50%);
     @media (min-width: 768px) {
    transform: translateX(-100%);
  }
}
`;

export const IconLoader = styled(GiFarmTractor)`
  fill: #394e2d;
  width: 150px;
  height: 150px;
  animation: ${animation} 4s linear infinite;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
