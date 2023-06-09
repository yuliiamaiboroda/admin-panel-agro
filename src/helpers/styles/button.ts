import styled from 'styled-components';
import {
  variant,
  typography,
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';
import type {
  TypographyProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

interface IProps
  extends TypographyProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'content'
    | 'circlePrimary'
    | 'circleSecondary'
    | 'circleContent';
  children: React.ReactNode;
  $warning?: boolean;
}

export const Button = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  border-width: 2px;
  border-style: solid;

  transition: ${p => p.theme.transitions.scale};
  cursor: pointer;

  :hover {
    scale: 0.9;
  }

  :disabled {
    color: ${p => p.theme.colors.primaryText};
    background-color: ${p => p.theme.colors.secondaryBackground};
    border-color: transparent;
    scale: 1;
    cursor: auto;
  }

  ${p => {
    const accentColor = p.$warning ? 'warning' : 'confirmation';
    return variant({
      variants: {
        primary: {
          py: 2,
          px: 3,
          color: 'accentText',
          backgroundColor: accentColor,
          borderColor: 'transparent',
          borderRadius: 'button',
        },
        secondary: {
          py: 2,
          px: 3,
          color: accentColor,
          backgroundColor: 'primaryBackground',
          borderColor: accentColor,
          borderRadius: 'button',
        },
        content: {
          py: 2,
          px: 3,
          color: accentColor,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderRadius: 'button',
        },
        circlePrimary: {
          padding: 2,
          color: 'accentText',
          backgroundColor: accentColor,
          borderColor: 'transparent',
          borderRadius: 'circle',
        },
        circleSecondary: {
          padding: 2,
          color: accentColor,
          backgroundColor: 'primaryBackground',
          borderColor: accentColor,
          borderRadius: 'circle',
        },
        circleContent: {
          padding: 2,
          color: accentColor,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderRadius: 'circle',
        },
      },
    });
  }}

  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;
