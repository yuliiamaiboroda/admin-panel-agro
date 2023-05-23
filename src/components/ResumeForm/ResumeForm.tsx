import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UploadFileField from 'components/UploadFileField';
import { useAppDispatch } from 'hooks';
import { createResume } from 'redux/resumes';

interface IProps {
  onSubmit?: () => void;
}

export default function ResumeForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

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
      validationSchema={Yup.object({
        name: Yup.string().trim().min(2).max(62).required(),
        phone: Yup.string()
          .trim()
          .matches(
            /^\+380\d{9}$/,
            'Phone should containe +380 and another 9 numbers'
          )
          .required(),
        email: Yup.string().trim().email().required(),
        position: Yup.string().trim().min(2).max(62).required(),
        resume: Yup.mixed()
          .test('is-file-exist', 'File should be uploaded', () => {
            const files = fileField.current?.files;
            return !files?.length ? false : true;
          })
          .test('is-corrent-forat', 'Resume should be a pdf file', () => {
            const files = fileField.current?.files;
            const validFormats = ['pdf'];
            if (files?.length) {
              const file = files[0];
              const extension = file.type.split('/')[1];
              return validFormats.includes(extension);
            }
            return true;
          })
          .test('is-correct-size', 'Resume should not be more than 5Mb', () => {
            const files = fileField.current?.files;
            if (files?.length) {
              const file = files[0];
              const size = file.size / 1024 / 1024;
              return size <= 5;
            }
            return true;
          }),
        comment: Yup.string().trim().min(2).max(2000).required(),
        agreement: Yup.bool()
          .oneOf([true], 'Agreement should be checked')
          .required(),
      })}
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
      {({ values }) => (
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
            Position: <Field id="position" name="position" type="text" />
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
