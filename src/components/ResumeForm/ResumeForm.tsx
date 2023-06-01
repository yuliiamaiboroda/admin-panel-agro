import { useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createResume } from 'redux/resumes';
import { getAllVacancyTitles, selectVacancyTitles } from 'redux/vacancies';
import { resumeShema } from 'helpers/schemas/resumes';
import UploadFileField from 'components/UploadFileField';

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
        <Form>
          <label>
            Name: <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" />
          </label>
          <br />
          <label>
            Phone: <Field id="phone" name="phone" type="text" />
            <ErrorMessage name="phone" />
          </label>
          <br />
          <label>
            Email: <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" />
          </label>
          <br />
          <label>
            Position:
            <select
              name="position"
              id="position"
              value={values.position}
              onChange={event => setFieldValue('position', event.target.value)}
            >
              <option value="">Оберіть вакансію</option>
              {vacancies.map(({ _id, title }) => (
                <option key={_id} value={title}>
                  {title}
                </option>
              ))}
              <option value="other">Інше</option>
            </select>
            <ErrorMessage name="position" />
          </label>
          <br />
          <UploadFileField name="resume" fileRef={fileField} />
          <br />
          <label>
            Comment: <Field id="comment" name="comment" type="text" />
            <ErrorMessage name="comment" />
          </label>
          <br />
          <label>
            Agreement: <Field id="agreement" name="agreement" type="checkbox" />
            <ErrorMessage name="agreement" />
          </label>
          <br />
          <button type="submit" disabled={!values.agreement}>
            Add resume
          </button>
        </Form>
      )}
    </Formik>
  );
}
