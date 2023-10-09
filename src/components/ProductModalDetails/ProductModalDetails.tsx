import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCertainProduct } from 'redux/products';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import Box from 'components/Box';
import ModalTitle from 'components/ModalTitle';
import ModalDescription from 'components/ModalDescription';
import ModalImage from 'components/ModalImage';
import ItemLink from 'components/ItemLink';
import { transformDate } from 'utils';

export default function ProductModalDetails() {
  const product = useAppSelector(selectCertainProduct);
  const location = useLocation();

  if (!product) {
    return null;
  }

  const { title, description, imageURL, createdAt } = product;
  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={title} />
      <ModalImage src={imageURL} alt={title} width="300" height="auto" />
      <ModalDescription label="Опис" value={description} />
      <ModalDescription label="Створено" value={transformDate(createdAt)} />
      <RestrictedComponent accessRight={Roles.productsManager}>
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
