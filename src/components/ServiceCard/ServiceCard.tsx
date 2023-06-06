import { Roles } from 'helpers/constants';
import { useNavigate } from 'react-router-dom';
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

  // const clickHandler = (event: React.MouseEvent) => {
  //   console.log(event.target);
  //   console.log(event.target instanceof HTMLAnchorElement);

  //   if (!(event.target instanceof HTMLAnchorElement)) {
  //     navigate(`${_id}`, { state: { from: routeLocation }  });
  //   }
  // };

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${_id}`);
    }
  };

  return (
    <>
      <CardWrapperMarkup onClick={() => clickHandler}>
        <CardImageMarkup src={imageURL} alt={title} />
        <CardTitleStringMarkup value={title} />
        <CardDetailStringMarkup title="Опис" value={description} />
        <CardDetailStringMarkup title="Ціна" value={price} />
        <CardDetailStringMarkup
          title="Контактний телефон"
          value={contactMail}
        />
        <CardDetailStringMarkup title="Контактна пошта" value={contactPhone} />
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
