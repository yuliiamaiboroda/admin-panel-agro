import { IconLoader, LoaderWrapper } from './Loader.styled';

interface IProps {
  top: string;
}

export default function Loader({ top }: IProps) {
  return (
    <LoaderWrapper top={top}>
      <IconLoader />
    </LoaderWrapper>
  );
}
