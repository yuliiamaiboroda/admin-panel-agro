import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectVacancies } from 'redux/vacancies';
import { translateCategory } from 'utils';
import Box from 'components/Box';
import ItemLink from 'components/ItemLink/ItemLink';
import ModalTitle from 'components/ModalTitle';
import ModalDescription from 'components/ModalDescription';
import ModalLink from 'components/ModalLink';
import RestrictedComponent from 'components/RestrictedComponent';
import { Roles } from 'helpers/constants';

export default function VacanciesModalDetails() {
  const { certain } = useAppSelector(selectVacancies);
  const routeLocation = useLocation();

  if (!certain) {
    return null;
  }

  const {
    title,
    description,
    category,
    sallary,
    education,
    location,
    contactMail,
    contactPhone,
    workExperienceRequired,
  } = certain;
  return (
    <Box display="flex" flexDirection="column" gridGap={[3, 4]}>
      <ModalTitle value={title} />
      <Box display="flex" flexDirection="column" gridGap={1}>
        <ModalDescription label="Опис" value={description} />
        <ModalDescription
          label="Категорія"
          value={translateCategory(category)}
        />
        <ModalDescription label="Зарплатня" value={sallary} />
        <ModalDescription label="Освіта" value={education} />
        <ModalDescription
          label="Необхідний досвід роботи"
          value={workExperienceRequired}
        />
        <ModalDescription label="Локація" value={location} />
        <ModalLink label="Телефон" href={`tel:${contactPhone}`}>
          {contactPhone}
        </ModalLink>
        <ModalLink label="Пошта" href={`mailto:${contactMail}`}>
          {contactMail}
        </ModalLink>
      </Box>
      <RestrictedComponent accessRight={Roles.applyManager}>
        <Box display="flex" justifyContent="space-around">
          <ItemLink
            type="edit"
            navigateTo="form"
            state={{ from: routeLocation }}
          />
          <ItemLink
            type="remove"
            navigateTo="confirm"
            state={{ from: routeLocation }}
          />
        </Box>
      </RestrictedComponent>
    </Box>
  );
}
