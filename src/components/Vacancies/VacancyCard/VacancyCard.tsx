import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { selectUser } from 'redux/user';
import { removeVacancyById } from 'redux/vacancies';

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
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isAccessedToChangeVacancy, setIsAccessedToChangeVacancy] =
    useState(false);

  const dispatch = useAppDispatch();
  const {
    user: { role },
  } = useAppSelector(selectUser);

  const handleDelete = (_id: string) => {
    dispatch(removeVacancyById(_id));
  };

  useEffect(() => {
    if (role === ROLES.admin || role === ROLES.applyManager) {
      setIsAccessedToChangeVacancy(true);
    }
  }, [role]);

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
      {isAccessedToChangeVacancy && (
        <div>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setIsModalDeleteOpen(true)
            }
          >
            видалити
          </button>
          <button type="button">змінити </button>
        </div>
      )}

      {isModalDeleteOpen && (
        <Modal onClose={() => setIsModalDeleteOpen(false)}>
          <ModalDelete
            onClose={() => setIsModalDeleteOpen(false)}
            handleDelete={() => handleDelete(_id)}
            title={`вакансію ${title}`}
          />
        </Modal>
      )}
    </li>
  );
}
