import { Roles } from 'helpers/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardImageMarkup from 'components/CardImageMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import RestrictedComponent from 'components/RestrictedComponent';
import ItemLink from 'components/ItemLink';
import Box from 'components/Box';

interface IProps {
  id: string;
  title: string;
  imageURL: string;
  description: string;
}

export default function ProductCard({
  id,
  title,
  imageURL,
  description,
}: IProps) {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${id}`, { state: { from: routeLocation } });
    }
    return;
  };

  return (
    <CardWrapperMarkup onClick={() => clickHandler}>
      <CardImageMarkup src={imageURL} alt={title} />
      <CardTitleStringMarkup value={title} />
      <CardDetailStringMarkup title="Опис" value={description} />
      <RestrictedComponent accessRight={Roles.productsManager}>
        <Box display="flex" justifyContent="center" gridGap={2}>
          <ItemLink type="edit" navigateTo={`${id}/form`} />
          <ItemLink type="remove" navigateTo={`${id}/confirm`} />
        </Box>
      </RestrictedComponent>
    </CardWrapperMarkup>
  );
}
