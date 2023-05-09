interface IProps {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export default function ServiceCard({
  title,
  description,
  imageURL,
  price,
  contactMail,
  contactPhone,
}: IProps) {
  return (
    <li>
      <img src={imageURL} alt={title} width="348" height="222" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{contactPhone}</p>
      <p>{contactMail}</p>
    </li>
  );
}
