import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import type {
  TypographyProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  variant: 'primary' | 'secondary' | 'content';
  children: ReactNode;
}

export default function Button({
  type = 'button',
  variant,
  children,
  ...rest
}: IProps) {
  return (
    <StyledButton type={type} {...rest} variant={variant}>
      {children}
    </StyledButton>
  );
}
