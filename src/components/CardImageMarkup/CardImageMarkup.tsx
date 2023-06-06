import { Image } from './CardImageMarkup.styled';

interface IProps {
  src: string;
  alt: string;
}

export default function CardImageMarkup({ src, alt }: IProps) {
  return <Image src={src} alt={alt} width="348" height="222" />;
}
