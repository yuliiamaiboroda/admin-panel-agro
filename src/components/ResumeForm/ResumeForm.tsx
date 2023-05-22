import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
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
        phone: '',
        email: '',
        position: '',
        resumeFile: '',
        comment: '',
        agreement: false,
      }}
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
          </label>
          <br />
          <label>
            Phone: <Field id="phone" name="phone" type="text" />
          </label>
          <br />
          <label>
            Email: <Field id="email" name="email" type="email" />
          </label>
          <br />
          <label>
            Position: <Field id="position" name="position" type="text" />
          </label>
          <br />
          <UploadFileField name="resumeFile" fileRef={fileField} />
          <br />
          <label>
            Comment: <Field id="comment" name="comment" type="text" />
          </label>
          <br />
          <label>
            Agreement: <Field id="agreement" name="agreement" type="checkbox" />
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
