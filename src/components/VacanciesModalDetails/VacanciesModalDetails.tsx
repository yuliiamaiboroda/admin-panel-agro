import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { IVacancy, selectVacancies } from 'redux/vacancies';

export default function VacanciesModalDetails() {
  const [choosedVacancy, setChoosedVacancy] = useState<IVacancy>();
  const vacancies = useAppSelector(selectVacancies);
  const { vacanciesId } = useParams();

  useEffect(() => {
    const vacancy = vacancies.entities.find(
      vacancy => vacancy._id === vacanciesId
    );
    if (vacancy) {
      setChoosedVacancy(vacancy);
    }
  }, [vacanciesId, vacancies]);

  if (!choosedVacancy) {
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
  } = choosedVacancy;
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
