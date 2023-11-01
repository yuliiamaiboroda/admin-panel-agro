import {
  IconLoader,
  LoaderWrapper,
} from './Loader.styled';

interface IProps {
  top?: string;
  position?: 'static' | '';
}

export default function Loader({ top = '', position = '' }: IProps) {
  return (
      <LoaderWrapper top={top} position={position}>
        <IconLoader />
      </LoaderWrapper>
  );
}
