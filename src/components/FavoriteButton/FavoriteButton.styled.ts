import styled from 'styled-components';

interface IProps {
  isFavorite: Boolean;
}

export const Button = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p =>
    p.isFavorite
      ? p.theme.colors.accentBackground
      : p.theme.colors.primaryText};

  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear;

  :hover {
    color: ${p =>
      p.isFavorite
        ? p.theme.colors.primaryText
        : p.theme.colors.accentBackground};
  }
`;
