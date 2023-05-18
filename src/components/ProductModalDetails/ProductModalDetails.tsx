import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainProduct } from 'redux/products';

export default function ProductModalDetails() {
  const product = useAppSelector(selectCertainProduct);
  const location = useLocation();

  if (!product) {
    return <h1>Ooops... o_o</h1>;
  }

  const { title, description, imageURL, createdAt } = product;
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageURL} alt={title} width="300" height="auto" />
      <p>{description}</p>
      <p>Created at: {createdAt}</p>
      <Link to="form" state={{ from: location }}>
        Edit
      </Link>
      <br />
      <Link to="confirm" state={{ from: location }}>
        Remove
      </Link>
    </div>
  );
}
