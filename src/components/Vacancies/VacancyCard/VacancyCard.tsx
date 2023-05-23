import { useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { selectUser } from 'redux/user';
import { Link, useNavigate, useLocation } from 'react-router-dom';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}
interface IVacancy {
  _id: string;
  category: string;
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
  const [isAccessedToChangeVacancy, setIsAccessedToChangeVacancy] =
    useState(false);
  const {
    user: { role },
  } = useAppSelector(selectUser);
  const navigate = useNavigate();
  const routeLocation = useLocation();

  useEffect(() => {
    if (role === ROLES.admin || role === ROLES.applyManager) {
      setIsAccessedToChangeVacancy(true);
    }
  }, [role]);

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
        <span>{category}</span>
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
      {isAccessedToChangeVacancy && (
        <div>
          <Link to={`${_id}/confirm`} state={{ from: routeLocation }}>
            видалити
          </Link>
          <Link to={`${_id}/form`} state={{ from: routeLocation }}>
            змінити
          </Link>
        </div>
      )}
    </li>
  );
}
