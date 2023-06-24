import styled from 'styled-components';
import {
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
  children?: React.ReactNode;
}

const Box = styled.div<IProps>`
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

export default Box;
