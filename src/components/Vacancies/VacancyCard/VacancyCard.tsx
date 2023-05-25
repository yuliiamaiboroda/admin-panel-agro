import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Roles } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import translateCategory from 'utils/translate-vacancy-category';
import { Categories } from 'helpers/constants';

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
  const navigate = useNavigate();
  const routeLocation = useLocation();

  return (
    <li
      onClick={event => {
        if (event.target === event.currentTarget) {
          navigate(`${_id}`, { state: { from: routeLocation } });
        }
      }}
    >
      <h3>{title}</h3>
      <p>
        Опис:
        <span>{description}</span>
      </p>
      <p>
        Категорія:
        <span>{translateCategory(category)}</span>
      </p>
      <p>
        Зарплатня:
        <span>{sallary}</span>
      </p>
      <p>
        Освіта:
        <span>{education}</span>
      </p>
      <p>
        Необхідний досвід роботи:
        <span>{workExperienceRequired}</span>
      </p>
      <p>
        Локація:
        <span>{location}</span>
      </p>
      <p>
        Контактний телефон:
        <a href={`tel:${contactPhone}`}>{contactPhone}</a>
      </p>
      <p>
        Контактна пошта:
        <a href={`mailto:${contactMail}`}>{contactMail}</a>
      </p>
      <RestrictedComponent accessRight={Roles.applyManager}>
        <Link to={`${_id}/confirm`} state={{ from: routeLocation }}>
          видалити
        </Link>
        <Link to={`${_id}/form`} state={{ from: routeLocation }}>
          змінити
        </Link>
      </RestrictedComponent>
    </li>
  );
}
