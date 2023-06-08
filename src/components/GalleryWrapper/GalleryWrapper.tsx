import { GalleryCentred, GalleryWrap } from './GalleryWrapper.styled';

interface IProps {
  children: React.ReactNode;
}

export default function GalleryWrapper({ children }: IProps) {
  return (
    <GalleryCentred>
      <GalleryWrap>{children}</GalleryWrap>
    </GalleryCentred>
  );
}
