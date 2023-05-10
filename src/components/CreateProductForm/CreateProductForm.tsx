import React, { useRef } from 'react';
import { Formik, Form, Field, useField } from 'formik';

interface IProps {
  onSubmit?: Function;
}

export default function CreateProductForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  return (
    <Formik
      initialValues={{ title: '', description: '', image: '', file: null }}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        actions.resetForm();
        console.log('fileField.current?.files', fileField.current?.files);

        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      <Form>
        <Field id="title" name="title" type="text" />
        <br />
        <Field id="description" name="description" type="text" />
        <br />
        <UploadFile name="image" fileRef={fileField} />
        <br />
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  );
}

function UploadFile({
  fileRef,
  name,
}: {
  fileRef: React.RefObject<HTMLInputElement>;
  name: string;
}) {
  const [field, meta] = useField(name);

  return (
    <>
      <label>
        Upload file
        <input type="file" ref={fileRef} {...field} />
      </label>
      {meta.touched && meta.error ? (
        <p style={{ color: 'red' }}>{meta.error}</p>
      ) : null}
    </>
  );
}
