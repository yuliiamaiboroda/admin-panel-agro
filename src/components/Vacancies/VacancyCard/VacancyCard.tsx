import { Link, useLocation } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import { Categories } from 'helpers/constants';
import CardMarkup from 'components/CardMarkup';

interface IVacancy {
  _id: string;
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
  _id,
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

  return (
    <CardMarkup
      _id={_id}
      category={category}
      title={title}
      description={description}
      sallary={sallary}
      education={education}
      contactMail={contactMail}
      contactPhone={contactPhone}
      workExperienceRequired={workExperienceRequired}
      location={location}
    >
      <RestrictedComponent accessRight={Roles.applyManager}>
        <Link to={`${_id}/confirm`} state={{ from: routeLocation }}>
          видалити
        </Link>
        <Link to={`${_id}/form`} state={{ from: routeLocation }}>
          змінити
        </Link>
      </RestrictedComponent>
    </CardMarkup>
  );
}
