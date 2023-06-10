import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainService } from 'redux/services';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import Box from 'components/Box';
import ModalTitle from 'components/ModalTitle';
import ModalImage from 'components/ModalImage';
import ModalDescription from 'components/ModalDescription';
import ModalLink from 'components/ModalLink';
import ItemLink from 'components/ItemLink';

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
    createdAt = 'Невідомо',
  } = service;
  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={title} />
      <ModalImage src={imageURL} alt={title} width="300" height="auto" />
      <Box display="flex" flexDirection="column" gridGap={1}>
        <ModalDescription label="Oпис" value={description} />
        <ModalDescription label="Ціна" value={price} />
        <ModalLink label="Телефон" href={`tel:${contactPhone}`}>
          {contactPhone}
        </ModalLink>
        <ModalLink label="Пошта" href={`mailto:${contactMail}`}>
          {contactMail}
        </ModalLink>
        <ModalDescription label="Створено" value={createdAt} />
      </Box>
      <RestrictedComponent accessRight={Roles.servicesManager}>
        <Box display="flex" justifyContent="space-around">
          <ItemLink type="edit" navigateTo="form" state={{ from: location }} />
          <ItemLink
            type="remove"
            navigateTo="confirm"
            state={{ from: location }}
          />
        </Box>
      </RestrictedComponent>
    </Box>
  );
}
