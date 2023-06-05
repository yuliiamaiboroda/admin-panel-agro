import styled from 'styled-components';

export const CloseModalButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 250ms linear;

  :hover,
  :focus {
    opacity: 0.7;
  }
`;
