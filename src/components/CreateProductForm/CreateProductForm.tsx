import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from 'hooks';
import { createProduct } from 'redux/products';
import UploadFileField from 'components/UploadFileField';

interface IProps {
  productData?: {
    _id: string;
    title: string;
    description: string;
    image: string;
  };
  onSubmit?: Function;
}

const PRODUCT_DATA = { _id: '', title: '', description: '', image: '' };

export default function CreateProductForm({
  productData = PRODUCT_DATA,
  onSubmit,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { title, description, image } = productData;

  return (
    <Formik
      initialValues={{ title, description, image }}
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
