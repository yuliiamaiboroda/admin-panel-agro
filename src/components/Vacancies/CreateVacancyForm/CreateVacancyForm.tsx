import { Field, Form, Formik } from 'formik';
import createNewVacancySchema from 'helpers/schemas/vacancies/createVacancy.schema';
import { useAppDispatch } from 'hooks';

import { createVacancy } from 'redux/vacancies';

enum Categories {
  all = 'all-vacancies',
  actual = 'actual-vacancies',
}

interface INewVacancy {
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

interface Iprops {
  onClose: () => void;
}

const FORM_INITIAL_STATE: INewVacancy = {
  category: '',
  title: '',
  description: '',
  sallary: '',
  education: '',
  contactMail: '',
  contactPhone: '',
  workExperienceRequired: '',
  location: '',
};

export default function CreateVacancyForm({ onClose }: Iprops) {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={FORM_INITIAL_STATE}
      onSubmit={(values, actions) => {
        dispatch(createVacancy(values));
        actions.resetForm();
        onClose();
      }}
      validateOnBlur
      validationSchema={createNewVacancySchema}
    >
      {({ errors, touched }) => (
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            Заголовок вакасії
            <Field
              name="title"
              type="text"
              id="title"
              placeholder="Заголовок вакасії"
            />
            {errors.title && touched.title ? <span>{errors.title}</span> : null}
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
            {errors.workExperienceRequired && touched.workExperienceRequired ? (
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
                checked
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
          <button type="submit">Опублікувати</button>
        </Form>
      )}
    </Formik>
  );
}
