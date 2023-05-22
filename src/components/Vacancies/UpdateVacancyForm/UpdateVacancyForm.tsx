import { Field, Form, Formik } from 'formik';
import createNewVacancySchema from 'helpers/schemas/vacancies/createVacancy.schema';
import { useAppDispatch } from 'hooks';
import { updateVacancyById } from 'redux/vacancies';
enum Categories {
  all = 'all-vacancies',
  actual = 'actual-vacancies',
}

interface IProps {
  category: string;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
  _id: string;
  onClose: () => void;
}
export default function UpdateVacancyForm({
  category,
  title,
  description,
  sallary,
  education,
  contactMail,
  contactPhone,
  workExperienceRequired,
  location,
  _id,
  onClose,
}: IProps) {
  const FORM_INITIAL_STATE = {
    category,
    title,
    description,
    sallary,
    education,
    contactMail,
    contactPhone,
    workExperienceRequired,
    location,
    _id,
  };
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>Оновити вакансію</h2>
      <Formik
        initialValues={FORM_INITIAL_STATE}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(updateVacancyById(values));
          onClose();
        }}
        validateOnBlur
        validationSchema={createNewVacancySchema}
      >
        {({ errors, touched }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <label>
              Заголовок вакасії
              <Field
                name="title"
                type="text"
                id="title"
                placeholder="Заголовок вакасії"
              />
              {errors.title && touched.title ? (
                <span>{errors.title}</span>
              ) : null}
            </label>
            <label>
              Опис
              <Field
                name="description"
                id="description"
                type="text"
                placeholder="Опис"
              />
              {errors.description && touched.description ? (
                <span>{errors.description}</span>
              ) : null}
            </label>
            <label>
              Заробітня плата
              <Field
                name="sallary"
                id="sallary"
                type="text"
                placeholder="Заробітня плата"
              />
              {errors.sallary && touched.sallary ? (
                <span>{errors.sallary}</span>
              ) : null}
            </label>
            <label>
              Освіта
              <Field
                name="education"
                id="education"
                type="text"
                placeholder="Освіта"
              />
              {errors.education && touched.education ? (
                <span>{errors.education}</span>
              ) : null}
            </label>
            <label>
              Контактна пошта
              <Field
                name="contactMail"
                type="email"
                id="contactMail"
                placeholder="Контактна пошта"
              />
              {errors.contactMail && touched.contactMail ? (
                <span>{errors.contactMail}</span>
              ) : null}
            </label>
            <label>
              Контактний телефон
              <Field
                name="contactPhone"
                type="tel"
                id="contactPhone"
                placeholder="Контактний телефон"
              />
              {errors.contactPhone && touched.contactPhone ? (
                <span>{errors.contactPhone}</span>
              ) : null}
            </label>
            <label>
              Необхідний досвід роботи
              <Field
                name="workExperienceRequired"
                id="workExperienceRequired"
                type="text"
                placeholder="Необхідний досвід роботи"
              />
              {errors.workExperienceRequired &&
              touched.workExperienceRequired ? (
                <span>{errors.workExperienceRequired}</span>
              ) : null}
            </label>
            <label>
              Місце розташування
              <Field
                name="location"
                id="location"
                type="text"
                placeholder="Місце розташування"
              />
              {errors.location && touched.location ? (
                <span>{errors.location}</span>
              ) : null}
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Категорія вакансії
              <label>
                Актуальні вакансії
                <Field
                  name="category"
                  type="radio"
                  id={Categories.actual}
                  value={Categories.actual}
                />
              </label>
              <label>
                Всі вакансії
                <Field
                  name="category"
                  type="radio"
                  id={Categories.all}
                  value={Categories.all}
                />
              </label>
              {errors.category && touched.category ? (
                <span>{errors.category}</span>
              ) : null}
            </label>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Опублікувати</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
