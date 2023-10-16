import DropDown from 'components/DropDown/DropDown';
import FormTitle from 'components/FormTitle';
import FormButtons from 'components/FormButtons/FormButtons';
import FormField from 'components/FormField';
import TextareaField from 'components/TextareaField';
import { Form, Formik, ErrorMessage } from 'formik';
import { Categories, listVacanciesOptions } from 'helpers/constants';
import createAndUpdateVacancySchema from 'helpers/schemas/vacancies/createAndUpdateVacancy.schema';
import { translateCategory } from 'utils';

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
  contactPhone: '+380',
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
      <FormTitle title={formName} />
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
        {({ handleSubmit, setFieldValue }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormField
              fieldName="title"
              labelName="Заголовок вакасії"
              placeholderName="Заголовок вакасії"
            />
            <TextareaField
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
            <label
              style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              Категорія вакансії
              <DropDown
                options={listVacanciesOptions}
                setFieldValue={setFieldValue}
                initialValue={
                  vacancyData === VACANCY_DATA
                    ? null
                    : {
                        name: 'category',
                        value: vacancyData.category,
                        shownName: translateCategory(vacancyData.category),
                      }
                }
              />
              <ErrorMessage name="category" />
            </label>
            <FormButtons
              onCancel={onClose}
              onSubmit={handleSubmit}
              cancelButtonText="Відмінити"
              submitButtonText={buttonName}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
