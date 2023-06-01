import styled from 'styled-components';

export const Li = styled.li`
  width: 366px;
  margin: ${props => props.theme.spaces[2] + 'px'}; //TODO  видалити під час додавання флексів
`;

export const CardWrapper = styled.div`
  width: 366px;
  padding: ${props => props.theme.spaces[6] + 'px'} ${props => props.theme.spaces[2] + 'px'};
  border-radius: ${props => props.theme.radii.card};
  box-shadow: ${props => props.theme.shadows.card};
  background-color: ${props => props.theme.colors.primaryBackground};
`;

export const Image = styled.img`
  width: 348px;
  height: 222px;
  margin-bottom: ${props => props.theme.spaces[2] + 'px'};
  object-fit: cover; //TODO  cover or contain?
`;

export const Title = styled.h3`
  margin-bottom: ${props => props.theme.spaces[2] + 'px'};
  color: ${props => props.theme.colors.secondaryText};
`;

export const Details = styled.p`
  margin-bottom: ${props => props.theme.spaces[1] + 'px'};
`;
