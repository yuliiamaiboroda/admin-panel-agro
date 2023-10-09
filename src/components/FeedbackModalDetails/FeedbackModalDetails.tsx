import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectFeedbacks, updateFeedbackIsFavorite } from 'redux/feedbacks';
import FavoriteButton from 'components/FavoriteButton';
import Box from 'components/Box';
import ItemLink from 'components/ItemLink/ItemLink';
import ModalTitle from 'components/ModalTitle';
import ModalDescription from 'components/ModalDescription';
import ModalLink from 'components/ModalLink';
import { transformDate } from 'utils';

export default function FeedbackModalDetails() {
  const { certain } = useAppSelector(selectFeedbacks);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!certain) {
    return null;
  }

  const {
    id,
    name,
    contactPhone,
    contactMail,
    comment,
    agreement,
    isFavorite,
    createdAt,
  } = certain;

  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={`Фідбек від ${name}`} />
      <Box display="flex" flexDirection="column" gridGap={1}>
        <ModalLink label="Телефон" href={`tel:${contactPhone}`}>
          {contactPhone}
        </ModalLink>
        <ModalLink label="Пошта" href={`mailto:${contactMail}`}>
          {contactMail}
        </ModalLink>
        <ModalDescription label="Коментар" value={comment} />
        <ModalDescription
          label="Згода на обробку даних"
          value={agreement ? 'Надана' : 'Не надана'}
        />
        <ModalDescription label="Створений" value={transformDate(createdAt)} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => dispatch(updateFeedbackIsFavorite(id))}
        />
        <ItemLink
          type="remove"
          navigateTo="confirm"
          state={{ from: location }}
        />
      </Box>
    </Box>
  );
}
