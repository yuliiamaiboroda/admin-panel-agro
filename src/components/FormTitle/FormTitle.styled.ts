import styled from 'styled-components';

export const H2 = styled.h2`
  margin-bottom: ${props => props.theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.secondaryText};
`;
