import { useLocation } from 'react-router-dom';
import { HiDocumentText } from 'react-icons/hi';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainResume, updateResumeIsFavorite } from 'redux/resumes';
import FavoriteButton from 'components/FavoriteButton';
import Box from 'components/Box';
import ItemLink from 'components/ItemLink/ItemLink';
import ModalTitle from 'components/ModalTitle';
import ModalDescription from 'components/ModalDescription';
import ModalLink from 'components/ModalLink';

export default function ResumeModalDetails() {
  const resume = useAppSelector(selectCertainResume);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!resume) {
    return null;
  }

  const {
    _id,
    name,
    phone,
    email,
    position,
    resumeFileURL,
    comment,
    isFavorite,
  } = resume;
  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={name} />
      <Box display="flex" flexDirection="column" gridGap={1}>
        <ModalLink href={`tel:${phone}`} label="Телефон">
          {phone}
        </ModalLink>
        <ModalLink href={`mailto:${email}`} label="Пошта">
          {email}
        </ModalLink>
        <ModalDescription label="Позиція" value={position} />
        <ModalLink
          href={resumeFileURL}
          label="Резюме"
          target="_blank"
          rel="noreferrer noopener"
        >
          Переглянути <HiDocumentText size={18} />
        </ModalLink>
        <ModalDescription label="Опис" value={comment} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => {
            dispatch(updateResumeIsFavorite(_id));
          }}
        />
        <ItemLink
          type="remove"
          navigateTo="confirm"
          state={{ from: location }}
        ></ItemLink>
      </Box>
    </Box>
  );
}
