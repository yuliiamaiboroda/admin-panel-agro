import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: ${props => props.theme.spaces[2] + 'px'};
  color: ${props => props.theme.colors.secondaryText};
`;
