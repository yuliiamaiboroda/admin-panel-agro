import { AnchorHTMLAttributes, ReactNode } from 'react';
import Box from 'components/Box';
import { StyledModalLink } from './ModalLink.styled';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  children: ReactNode;
}

export default function ModalLink({ label, children, ...rest }: IProps) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gridGap={1}
      fontSize={['s', 'm']}
    >
      <Box fontWeight="bold" as="span">
        {label}:
      </Box>
      <StyledModalLink {...rest}>{children}</StyledModalLink>
    </Box>
  );
}
