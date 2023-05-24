import { useNavigate, Link } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';

interface IProps {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
}

export default function ProductCard({
  _id,
  title,
  imageURL,
  description,
}: IProps) {
  const navigate = useNavigate();

  return (
    <>
      <li
        onClick={event => {
          if (event.target === event.currentTarget) {
            navigate(`${_id}`);
          }
        }}
      >
        <h2>{title}</h2>
        <img src={imageURL} alt={title} width="150" height="auto" />
        <p>{description}</p>
        <RestrictedComponent accessRight={Roles.productsManager}>
          <Link to={`${_id}/form`}>Edit</Link>
          <br />
          <Link to={`${_id}/confirm`}>Remove</Link>
        </RestrictedComponent>
      </li>
    </>
  );
}
