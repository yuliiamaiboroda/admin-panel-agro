import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Categories } from 'helpers/constants';
import createAndUpdateVacancySchema from 'helpers/schemas/vacancies/createAndUpdateVacancy.schema';
import translateCategory from 'utils/translate-vacancy-category';

interface IVacancy {
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

interface IProps {
  vacancyData?: {
    category: keyof typeof Categories;
    title: string;
    description: string;
    sallary: string;
    education: string;
    contactMail: string;
    contactPhone: string;
    workExperienceRequired: string;
    location: string;
  };
  onClose: () => void;
  onSubmit: (values: IVacancy) => void;
  buttonName: string;
  formName: string;
}

const VACANCY_DATA: IVacancy = {
  category: 'irrelevant',
  title: '',
  description: '',
  sallary: '',
  education: '',
  contactMail: '',
  contactPhone: '',
  workExperienceRequired: '',
  location: '',
};

export default function VacancyForm({
  vacancyData = VACANCY_DATA,
  onClose,
  onSubmit,
  buttonName,
  formName,
}: IProps) {
  const {
    category,
    title,
    description,
    sallary,
    education,
    contactMail,
    contactPhone,
    workExperienceRequired,
    location,
  } = vacancyData;

  return (
    <>
      <h2>{formName}</h2>
      <Formik
        initialValues={{
          category,
          title,
          description,
          sallary,
          education,
          contactMail,
          contactPhone,
          workExperienceRequired,
          location,
        }}
        onSubmit={(values, actions) => {
          onSubmit(values);
        }}
        validateOnBlur
        validationSchema={createAndUpdateVacancySchema}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            Заголовок вакасії
            <Field
              name="title"
              type="text"
              id="title"
              placeholder="Заголовок вакасії"
            />
            <ErrorMessage name="title" />
          </label>
          <label>
            Опис
            <Field
              name="description"
              id="description"
              type="text"
              placeholder="Опис"
            />
            <ErrorMessage name="description" />
          </label>
          <label>
            Заробітня плата
            <Field
              name="sallary"
              id="sallary"
              type="text"
              placeholder="Заробітня плата"
            />
            <ErrorMessage name="sallary" />
          </label>
          <label>
            Освіта
            <Field
              name="education"
              id="education"
              type="text"
              placeholder="Освіта"
            />
            <ErrorMessage name="education" />
          </label>
          <label>
            Контактна пошта
            <Field
              name="contactMail"
              type="email"
              id="contactMail"
              placeholder="Контактна пошта"
            />
            <ErrorMessage name="contactMail" />
          </label>
          <label>
            Контактний телефон
            <Field
              name="contactPhone"
              type="tel"
              id="contactPhone"
              placeholder="Контактний телефон"
            />
            <ErrorMessage name="contactPhone" />
          </label>
          <label>
            Необхідний досвід роботи
            <Field
              name="workExperienceRequired"
              id="workExperienceRequired"
              type="text"
              placeholder="Необхідний досвід роботи"
            />
            <ErrorMessage name="workExperienceRequired" />
          </label>
          <label>
            Місце розташування
            <Field
              name="location"
              id="location"
              type="text"
              placeholder="Місце розташування"
            />
            <ErrorMessage name="location" />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Категорія вакансії
            <label>
              {translateCategory(Categories.actual)}
              <Field
                name="category"
                type="radio"
                id={Categories.actual}
                value={Categories.actual}
              />
            </label>
            <label>
              {translateCategory(Categories.irrelevant)}
              <Field
                name="category"
                type="radio"
                id={Categories.irrelevant}
                value={Categories.irrelevant}
              />
            </label>
            <ErrorMessage name="category" />
          </label>
          <button type="button" onClick={onClose}>
            Відмінити
          </button>
          <button type="submit">{buttonName}</button>
        </Form>
      </Formik>
    </>
  );
}
