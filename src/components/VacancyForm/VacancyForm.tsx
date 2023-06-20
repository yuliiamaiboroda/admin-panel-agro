import FormField from 'components/FormField';
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
          <FormField
            fieldName="title"
            labelName="Заголовок вакасії"
            placeholderName="Заголовок вакасії"
          />
          <FormField
            fieldName="description"
            labelName="Опис"
            placeholderName="Опис"
          />
          <FormField
            fieldName="sallary"
            labelName="Заробітня плата"
            placeholderName="Заробітня плата"
          />
          <FormField
            fieldName="education"
            labelName="Освіта"
            placeholderName="Освіта"
          />
          <FormField
            fieldName="contactMail"
            labelName="Контактна пошта"
            placeholderName="Контактна пошта"
            typeName="email"
          />
          <FormField
            fieldName="contactPhone"
            labelName="Контактний телефон"
            placeholderName="Контактний телефон"
            typeName="tel"
          />
          <FormField
            fieldName="workExperienceRequired"
            labelName="Необхідний досвід роботи"
            placeholderName="Необхідний досвід роботи"
          />
          <FormField
            fieldName="location"
            labelName="Місце розташування"
            placeholderName="Місце розташування"
          />
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
