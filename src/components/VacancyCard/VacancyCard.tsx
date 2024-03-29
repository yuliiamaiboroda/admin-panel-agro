import { useLocation, useNavigate } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import { Categories } from 'helpers/constants';
import { translateCategory } from 'utils';
import CardWrapperMarkup from 'components/CardWrapperMarkup';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import ItemLink from 'components/ItemLink';
import Box from 'components/Box';

interface IVacancy {
  id: string;
  category: keyof typeof Categories;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

export default function VacancyCard({
  id,
  category,
  title,
  description,
  sallary,
  education,
  contactMail,
  contactPhone,
  workExperienceRequired,
  location,
}: IVacancy) {
  const routeLocation = useLocation();
  const navigate = useNavigate();

  const clickHandler = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      navigate(`${id}`, { state: { from: routeLocation } });
    }
    return;
  };

  return (
    <CardWrapperMarkup onClick={() => clickHandler}>
      <CardTitleStringMarkup value={title} />
      <CardDetailStringMarkup title="Опис" value={description} />
      <CardDetailStringMarkup
        title="Категорія"
        value={translateCategory(category)}
      />
      <CardDetailStringMarkup title="Зарплатня" value={sallary} />
      <CardDetailStringMarkup title="Освіта" value={education} />
      <CardDetailStringMarkup
        title="Необхідний досвід роботи"
        value={workExperienceRequired}
      />
      <CardDetailStringMarkup title="Локація" value={location} />
      <CardDetailStringMarkup title="Контактний телефон" value={contactPhone} />
      <CardDetailStringMarkup title="Контактна пошта" value={contactMail} />
      <RestrictedComponent accessRight={Roles.applyManager}>
        <Box display="flex" justifyContent="center" gridGap={2}>
          <ItemLink
            type="edit"
            navigateTo={`${id}/form`}
            state={{ from: routeLocation }}
          />
          <ItemLink
            type="remove"
            navigateTo={`${id}/confirm`}
            state={{ from: routeLocation }}
          />
        </Box>
      </RestrictedComponent>
    </CardWrapperMarkup>
  );
}
