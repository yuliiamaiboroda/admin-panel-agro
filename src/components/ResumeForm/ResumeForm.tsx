import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import UploadFileField from 'components/UploadFileField';

export default function ResumeForm() {
  const fileField = useRef<HTMLInputElement>(null);

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
      onSubmit={(values, action) => {
        console.log({ values, file: fileField.current?.files });
        action.resetForm();
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
            position: <Field id="position" name="position" type="text" />
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
