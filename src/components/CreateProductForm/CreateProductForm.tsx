import React, { useRef } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { useAppDispatch } from 'hooks';
import { createProduct } from 'redux/products';

interface IProps {
  onSubmit?: Function;
}

export default function CreateProductForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ title: '', description: '', image: '', file: null }}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        actions.resetForm();
        if (fileField.current?.files) {
          console.log('fileField.current?.files', fileField.current?.files[0]);
          dispatch(
            createProduct({
              title: values.title,
              description: values.description,
              image: fileField.current?.files[0],
            })
          );
        }

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
