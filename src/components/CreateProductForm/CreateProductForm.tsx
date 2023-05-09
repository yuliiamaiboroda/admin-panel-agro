import React, { useRef } from 'react';
import { Formik, Form, Field, useField, FieldHookConfig } from 'formik';

interface IProps {
  onSubmit?: Function;
}

interface IFormState {
  title: string;
  description: string;
  image: string;
}

export default function CreateProductForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  return (
    <Formik
      initialValues={{ title: '', description: '', image: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
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

        <br />
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  );
}

function UploadFile({
  fileRef,
  ...props
}: {
  fileRef: React.RefObject<HTMLInputElement>;
  props: FieldHookConfig<IFormState>;
}) {
  const [field, meta] = useField(props);

  return (
    <label>
      Upload file
      <input
        id="image"
        // name="image"
        {...field}
        type="file"
        ref={fileRef}
        onChange={() => {
          console.log('meta', meta);
        }}
      />
    </label>
  );
}
