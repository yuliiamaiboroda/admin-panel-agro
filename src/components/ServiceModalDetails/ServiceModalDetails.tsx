import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainService } from 'redux/services';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';

export default function ServiceModalDetails() {
  const service = useAppSelector(selectCertainService);
  const location = useLocation();

  if (!service) {
    return null;
  }

  const {
    title,
    description,
    imageURL,
    price,
    contactMail,
    contactPhone,
    createdAt,
  } = service;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageURL} alt={title} width="300" height="auto" />
      <p>{description}</p>
      <p>{price}</p>
      <p>{contactPhone}</p>
      <p>{contactMail}</p>

      <p>Створено: {createdAt}</p>

      <RestrictedComponent accessRight={Roles.servicesManager}>
        <Link to="form" state={{ from: location }}>
          Змінити
        </Link>
        <br />
        <Link to="confirm" state={{ from: location }}>
          Видалити
        </Link>
      </RestrictedComponent>
    </div>
  );
}
