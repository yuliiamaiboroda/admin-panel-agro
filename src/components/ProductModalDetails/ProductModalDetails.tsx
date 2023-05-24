import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainProduct } from 'redux/products';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';

export default function ProductModalDetails() {
  const product = useAppSelector(selectCertainProduct);
  const location = useLocation();

  if (!product) {
    return null;
  }

  const { title, description, imageURL, createdAt } = product;
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageURL} alt={title} width="300" height="auto" />
      <p>{description}</p>
      <p>Created at: {createdAt}</p>
      <RestrictedComponent accessRight={Roles.productsManager}>
        <Link to="form" state={{ from: location }}>
          Edit
        </Link>
        <br />
        <Link to="confirm" state={{ from: location }}>
          Remove
        </Link>
      </RestrictedComponent>
    </div>
  );
}
