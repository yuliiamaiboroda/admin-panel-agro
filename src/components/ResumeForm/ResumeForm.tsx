import { useRef, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createResume } from 'redux/resumes';
import { getAllVacancyTitles, selectVacancyTitles } from 'redux/vacancies';
import { resumeShema } from 'helpers/schemas/resumes';
import UploadFileField from 'components/UploadFileField';
import FormField from 'components/FormField';
import Selector from 'components/Selector';
import { Button } from 'helpers/styles';
import FormCheckbox from 'components/FormCheckbox';

interface IProps {
  onSubmit?: () => void;
}

export default function ResumeForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const vacancies = useAppSelector(selectVacancyTitles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '+380',
        email: '',
        position: '',
        resume: '',
        comment: '',
        agreement: false,
      }}
      validationSchema={resumeShema(fileField)}
      onSubmit={(
        { name, phone, email, position, comment, agreement },
        action
      ) => {
        dispatch(
          createResume({
            name,
            phone,
            email,
            position,
            comment,
            agreement,
            resume: fileField.current?.files
              ? fileField.current?.files[0]
              : null,
          })
        );
        action.resetForm();
        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <FormField labelName="Ім’я" fieldName="name" placeholderName="Ім’я" />
          <FormField
            fieldName="phone"
            labelName="Номер телефону"
            placeholderName="Номер телефону"
            typeName="tel"
          />
          <FormField
            fieldName="email"
            labelName="Email"
            placeholderName="Email"
            typeName="email"
          />
          <label
            style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}
          >
            Вакансія
            <Selector
              options={[
                ...vacancies.map(el => {
                  return { value: el.title, label: el.title };
                }),
                { value: 'other', label: 'Інше' },
              ]}
              onChange={option => setFieldValue('position', option?.value)}
              placeholder="Оберіть вакансію"
            />
            <ErrorMessage name="position" />
          </label>
          <UploadFileField
            name="resume"
            fileRef={fileField}
            label="Резюме"
            placeholder="Завантажте резюме"
          />
          <FormField
            fieldName="comment"
            placeholderName="Коментар"
            labelName="Коментар"
          />
          <FormCheckbox
            fieldName="agreement"
            label="Я даю згоду на обробку персональних даних"
          />
          <Button
            variant="primary"
            type="submit"
            disabled={!values.agreement}
            mx="auto"
          >
            Add resume
          </Button>
        </Form>
      )}
    </Formik>
  );
}
