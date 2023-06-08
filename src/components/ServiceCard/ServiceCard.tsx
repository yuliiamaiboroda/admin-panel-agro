import { Roles } from 'helpers/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import RestrictedComponent from 'components/RestrictedComponent';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardImageMarkup from 'components/CardImageMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import CardButton from 'components/CardButton';
import Box from 'components/Box';

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
  const routeLocation = useLocation();

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${_id}`, { state: { from: routeLocation } });
    }
    return;
  };

  return (
    <>
      <CardWrapperMarkup onClick={() => clickHandler}>
        <CardImageMarkup src={imageURL} alt={title} />
        <CardTitleStringMarkup value={title} />
        <CardDetailStringMarkup title="Опис" value={description} />
        <CardDetailStringMarkup title="Ціна" value={price} />
        <CardDetailStringMarkup title="Телефон" value={contactPhone} />
        <CardDetailStringMarkup title="Пошта" value={contactMail} />
        <RestrictedComponent accessRight={Roles.servicesManager}>
          <Box display="flex" justifyContent="center" gridGap={2}>
            <CardButton type="edit" navigateTo={`${_id}/form`} />
            <CardButton type="remove" navigateTo={`${_id}/confirm`} />
          </Box>
        </RestrictedComponent>
      </CardWrapperMarkup>
    </>
  );
}
