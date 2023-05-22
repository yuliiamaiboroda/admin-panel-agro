import { Link } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectVacancies } from 'redux/vacancies';

export default function VacanciesModalDetails() {
  const { certain } = useAppSelector(selectVacancies);

  if (!certain) {
    return <h1>something went wrong </h1>;
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
    <div>
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
      <Link to="form">змінити</Link>
      <Link to="confirm">видалити</Link>
    </div>
  );
}
