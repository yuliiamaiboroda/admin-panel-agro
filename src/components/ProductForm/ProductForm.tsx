import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { productSchema } from 'helpers/schemas/products';
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
    imageURL?: string;
  };
  onSubmit: (values: IProductState) => void;
  onCancel: () => void;
}

const PRODUCT_DATA = { title: '', description: '' };

export default function ProductForm({
  productData = PRODUCT_DATA,
  onSubmit,
  onCancel,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  const { title, description, imageURL } = productData;

  return (
    <Formik
      initialValues={{ title, description, image: '' }}
      validationSchema={productSchema(fileField, imageURL)}
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
          <ErrorMessage name="title" />
        </label>
        <br />
        <label>
          Description: <Field id="description" name="description" type="text" />
          <ErrorMessage name="description" />
        </label>
        <br />
        <UploadFileField name="image" fileRef={fileField} />
        <br />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  );
}
