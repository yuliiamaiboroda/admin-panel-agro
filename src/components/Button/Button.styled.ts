import styled from 'styled-components';
import {
  variant,
  typography,
  space,
  layout,
  border,
  position,
  shadow,
} from 'styled-system';

import type {
  TypographyProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

interface IProps
  extends TypographyProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  variant: 'primary' | 'secondary' | 'content';
}

export const StyledButton = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  border-width: 2px;
  border-style: solid;
  border-radius: ${p => p.theme.radii.button};

  transition: ${p => p.theme.transitions.scale};

  :hover {
    scale: 0.9;
  }

  ${() =>
    variant({
      variants: {
        primary: {
          color: 'accentText',
          backgroundColor: 'accentBackground',
          borderColor: 'transparent',
        },
        secondary: {
          color: 'confirmarion',
          backgroundColor: 'primaryBackground',
          borderColor: 'confirmation',
        },
        content: {
          color: 'confirmation',
          backgroundColor: 'primaryBackground',
          borderColor: 'transparent',
        },
      },
    })}

  ${typography}
  ${space}
  ${layout}
  ${border}
  ${position}
  ${shadow}
`;
