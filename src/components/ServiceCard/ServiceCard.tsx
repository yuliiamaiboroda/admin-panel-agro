import { Link } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import CardMarkup from 'components/CardMarkup';

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
  return (
    <CardMarkup
      _id={_id}
      title={title}
      description={description}
      imageURL={imageURL}
      price={price}
      contactMail={contactMail}
      contactPhone={contactPhone}
    >
      <RestrictedComponent accessRight={Roles.servicesManager}>
        <Link to={`${_id}/form`}>Змінити</Link>
        <br />
        <Link to={`${_id}/confirm`}>Видалити</Link>
      </RestrictedComponent>
    </CardMarkup>
  );
}
