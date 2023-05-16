import Modal from 'components/Modal/Modal';
import ModalDelete from 'components/ModalDelete/ModalDelete';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { removeVacancyById } from 'redux/vacancies';

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
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const dispatch = useAppDispatch();
  const handleDelete = (_id: string) => {
    dispatch(removeVacancyById(_id));
  };

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
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalDeleteOpen(true)
          }
        >
          delete
        </button>
        <button type="button">change </button>
      </div>
      {isModalDeleteOpen && (
        <Modal onClose={() => setIsModalDeleteOpen(false)}>
          <ModalDelete
            onClose={() => setIsModalDeleteOpen(false)}
            handleDelete={() => handleDelete(_id)}
            title={title}
          />
        </Modal>
      )}
    </li>
  );
}
