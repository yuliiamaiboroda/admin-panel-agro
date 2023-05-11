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
  return (
    <li>
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
      <div>
        <button type="button">delete</button>
        <button type="button">change </button>
      </div>
    </li>
  );
}
