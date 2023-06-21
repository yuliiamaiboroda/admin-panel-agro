import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { productSchema } from 'helpers/schemas/products';
import UploadFileField from 'components/UploadFileField';
import FormField from 'components/FormField';

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
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <FormField
          labelName="Заголовок "
          fieldName="title"
          placeholderName="Заголовок "
        />

        <FormField
          labelName="Опис"
          fieldName="description"
          placeholderName="Опис"
        />
        <UploadFileField name="image" fileRef={fileField} />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add product</button>
      </Form>
    </Formik>
  );
}
