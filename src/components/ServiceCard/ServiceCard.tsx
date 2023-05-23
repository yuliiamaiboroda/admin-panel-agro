import { useNavigate, Link } from 'react-router-dom';

interface IProps {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export default function ServiceCard({
  _id,
  title,
  description,
  imageURL,
  price,
  contactMail,
  contactPhone,
}: IProps) {
  const navigate = useNavigate();

  return (
    <li
      onClick={event => {
        if (event.target === event.currentTarget) {
          navigate(`${_id}`);
        }
      }}
    >
      <img src={imageURL} alt={title} width="150" height="auto" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{contactPhone}</p>
      <p>{contactMail}</p>

      <Link to={`${_id}/form`}>Змінити</Link>
      <br />
      <Link to={`${_id}/confirm`}>Видалити</Link>
    </li>
  );
}
