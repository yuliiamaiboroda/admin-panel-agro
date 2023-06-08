import styled from 'styled-components';

export const CloseModalButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${p => p.theme.colors.primaryText};
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.buttonBackground};
  }
`;
