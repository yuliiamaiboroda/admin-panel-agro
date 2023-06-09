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
  variant: 'primary' | 'secondary' | 'content' | 'circlePrimary';
  children: React.ReactNode;
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

  :hover {
    scale: 0.9;
  }

  ${p =>
    variant({
      variants: {
        primary: {
          py: 2,
          px: 3,
          color: 'accentText',
          backgroundColor: 'accentBackground',
          borderColor: 'transparent',
          borderRadius: 'button',
        },
        secondary: {
          py: 2,
          px: 3,
          color: 'confirmarion',
          backgroundColor: 'primaryBackground',
          borderColor: 'confirmation',
          borderRadius: 'button',
        },
        content: {
          py: 2,
          px: 3,
          color: 'confirmation',
          backgroundColor: 'primaryBackground',
          borderColor: 'transparent',
          borderRadius: 'button',
        },
        circlePrimary: {
          padding: 2,
          color: 'accentText',
          backgroundColor: 'accentBackground',
          borderColor: 'transparent',
          borderRadius: 'circle',
        },
        circleSecondary: {
          padding: 2,
          color: 'confirmarion',
          backgroundColor: 'primaryBackground',
          borderColor: 'confirmation',
          borderRadius: 'circle',
        },
        circleContent: {
          padding: 2,
          color: 'confirmation',
          backgroundColor: 'primaryBackground',
          borderColor: 'transparent',
          borderRadius: 'circle',
        },
      },
    })}

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
