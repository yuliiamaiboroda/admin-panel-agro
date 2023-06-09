import styled from 'styled-components';

export const SidebarDiv = styled.nav`
  padding: ${props => props.theme.space[6]}px ${props => props.theme.space[3]}px;
`;

export const Title = styled.p`
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[6]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const SidebarWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[6]}px 0;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  width: 236px;
  padding: 0px ${props => props.theme.space[6]}px;
  gap: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.activeRoute};
  transition: 250ms linear;

  :hover,
  :focus {
    cursor: pointer;
    background-color: rgba(57, 78, 45, 0.73);
    color: ${props => props.theme.colors.pageTitleText};
    transition: 250ms linear;
  }
`;
