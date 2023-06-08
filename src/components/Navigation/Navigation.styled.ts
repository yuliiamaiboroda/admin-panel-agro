import { devices } from 'helpers/constants';
import styled from 'styled-components';

export const SidebarDiv = styled.div`
  width: 260px;
  background-color: ${props => props.theme.colors.primaryBackground};
`;

export const SidebarWrap = styled.ul`
  @media ${devices.tablet} {
    position: static;
    width: 260px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => props.theme.space[6]}px;
    padding: ${props => props.theme.space[6]}px
      ${props => props.theme.space[9]}px;
  }
`;

//   position: absolute;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   border: 0;
//   padding: 0;

//   white-space: nowrap;
//   clip-path: inset(100%);
//   clip: rect(0 0 0 0);
//   overflow: hidden;

