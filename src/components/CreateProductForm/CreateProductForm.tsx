import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import UploadFileField from 'components/UploadFileField';

interface IProductState {
  title: string;
  description: string;
  image: File | null;
}

interface IProps {
  productData?: {
    title: string;
    description: string;
    image: string;
  };
  onSubmit: (values: IProductState) => void;
}

const PRODUCT_DATA = { title: '', description: '', image: '' };

export default function CreateProductForm({
  productData = PRODUCT_DATA,
  onSubmit,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  const { title, description, image } = productData;

  return (
    <Formik
      initialValues={{ title, description, image }}
      onSubmit={(values, actions) => {
        onSubmit({
          title: values.title,
          description: values.description,
          image: fileField.current?.files ? fileField.current?.files[0] : null,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Title: <Field id="title" name="title" type="text" />
        </label>
        <br />
        <label>
          Description: <Field id="description" name="description" type="text" />
        </label>
        <br />
        <UploadFileField name="image" fileRef={fileField} />
        <br />
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  );
}
