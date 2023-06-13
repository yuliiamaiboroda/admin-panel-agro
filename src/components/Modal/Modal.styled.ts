import styled from 'styled-components';
import Box from 'components/Box/Box';

export const Backdrop = styled(Box)`
  position: fixed;
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: ${p => p.theme.space[4]}px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  background-color: ${p => p.theme.colors.backdrop};
`;

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
    color: ${p => p.theme.colors.accentBackground};
  }
`;
