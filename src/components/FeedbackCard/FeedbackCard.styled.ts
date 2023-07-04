import styled from 'styled-components';

export const UnviewComponent = styled.div`
  position: absolute;
  top: -10%;
  left: 95%;
  background-color: ${props => props.theme.colors.accentBackground};
  border-radius: ${props => props.theme.radii.circle};
  height: ${props => props.theme.space[3]}px;
  width: ${props => props.theme.space[3]}px;
`;
