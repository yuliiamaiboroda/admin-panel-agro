import { Link } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import CardMarkup from 'components/CardMarkup';

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
  return (
    <CardMarkup
      _id={_id}
      title={title}
      imageURL={imageURL}
      description={description}
    >
      <RestrictedComponent accessRight={Roles.productsManager}>
        <Link onClick={event => event.stopPropagation()} to={`${_id}/form`}>
          Edit
        </Link>
        <br />
        <Link onClick={event => event.stopPropagation()} to={`${_id}/confirm`}>
          Remove
        </Link>
      </RestrictedComponent>
    </CardMarkup>
  );
}
