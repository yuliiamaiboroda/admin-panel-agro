import { useLocation } from 'react-router-dom';
import { HiDocumentText } from 'react-icons/hi';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainResume, updateResumeIsFavorite } from 'redux/resumes';
import Box from 'components/Box';
import FavoriteButton from 'components/FavoriteButton';
import CardButton from 'components/CardButton/CardButton';
import {
  ModalTitle,
  ContactLink,
  PositionTitle,
  Position,
  FileLink,
  Description,
} from './ResumeModalDetails.styled';

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
    <>
      <ModalTitle>{name}</ModalTitle>
      <Box display="flex" flexDirection="column" gridGap={1} mb={4}>
        <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
        <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
      </Box>
      <Box display="flex" flexDirection="column" gridGap={1} mb={4}>
        <PositionTitle>
          Позиція: <Position>{position}</Position>
        </PositionTitle>
        <FileLink href={resumeFileURL}>
          Резюме {resumeFileURL ? <HiDocumentText /> : null}
        </FileLink>
        <Description>{comment}</Description>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => {
            dispatch(updateResumeIsFavorite(_id));
          }}
        />
        <CardButton
          type="remove"
          navigateTo="confirm"
          state={{ from: location }}
        ></CardButton>
      </Box>
    </>
  );
}
