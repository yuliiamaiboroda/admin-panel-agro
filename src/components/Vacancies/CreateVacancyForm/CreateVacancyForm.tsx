import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Notify } from 'notiflix';
import { createVacancy, selectVacancies } from 'redux/vacancies';

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
  const { error } = useAppSelector(selectVacancies);
  return (
    <Formik
      initialValues={FORM_INITIAL_STATE}
      onSubmit={(values, actions) => {
        dispatch(createVacancy(values));
        console.log(values);

        if (error) {
          Notify.failure('something went wrong');
          return;
        }
        actions.resetForm();
        onClose();
      }}
      validateOnBlur
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
        </label>
        <label>
          Опис
          <Field
            name="description"
            id="description"
            type="text"
            placeholder="Опис"
          />
        </label>
        <label>
          Заробітня плата
          <Field
            name="sallary"
            id="sallary"
            type="text"
            placeholder="Заробітня плата"
          />
        </label>
        <label>
          Освіта
          <Field
            name="education"
            id="education"
            type="text"
            placeholder="Освіта"
          />
        </label>
        <label>
          Контактна пошта
          <Field
            name="contactMail"
            type="email"
            id="contactMail"
            placeholder="Контактна пошта"
          />
        </label>
        <label>
          Контактний телефон
          <Field
            name="contactPhone"
            type="tel"
            id="contactPhone"
            placeholder="Контактний телефон"
          />
        </label>
        <label>
          Необхідний досвід роботи
          <Field
            name="workExperienceRequired"
            id="workExperienceRequired"
            type="text"
            placeholder="Необхідний досвід роботи"
          />
        </label>
        <label>
          Місце розташування
          <Field
            name="location"
            id="location"
            type="text"
            placeholder="Місце розташування"
          />
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
        </label>
        <button type="submit">Опублікувати</button>
      </Form>
    </Formik>
  );
}
