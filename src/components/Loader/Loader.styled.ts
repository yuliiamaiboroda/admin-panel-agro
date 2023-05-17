import styled, { keyframes } from 'styled-components';
import { GiFarmTractor } from 'react-icons/gi';

export const LoaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
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
