import { Image } from './CardImageMarkup.styled';
import defaultImage from '../../assets/broken-truck.jpg';

interface IProps {
  src: string;
  alt: string;
}

export default function CardImageMarkup({ src, alt }: IProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width="348"
      height="222"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = defaultImage;
      }}
    />
  );
}
