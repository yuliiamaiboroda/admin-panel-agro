import styled from 'styled-components';

export const CardWrapper = styled.li`
  margin: ${props => props.theme.spaces[2] + 'px'}; //TODO  видалити під час додавання флексів
  width: 366px;
  padding: ${props => props.theme.spaces[6] + 'px'} ${props => props.theme.spaces[2] + 'px'};
  border-radius: ${props => props.theme.radii.card};
  box-shadow: ${props => props.theme.shadows.card};
  background-color: ${props => props.theme.colors.primaryBackground};
`;
