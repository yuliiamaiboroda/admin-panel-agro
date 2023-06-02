import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: ${p => p.theme.radii.circle};
  cursor: pointer;
`;
