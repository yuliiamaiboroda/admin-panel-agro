import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import CardMarkup from 'components/CardMarkup';
import CardButton from 'components/CardButton';
import Box from 'components/Box';

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
        <Box display="flex" justifyContent="center" gridGap={2}>
          <CardButton type="edit" navigateTo={`${_id}/form`} />
          <CardButton type="remove" navigateTo={`${_id}/confirm`} />
        </Box>
      </RestrictedComponent>
    </CardMarkup>
  );
}
