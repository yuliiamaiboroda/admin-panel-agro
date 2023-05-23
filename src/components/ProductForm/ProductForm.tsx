import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
      validationSchema={Yup.object({
        title: Yup.string().min(2).max(32).required(),
        description: Yup.string().min(2).max(2000).required(),
        image: Yup.mixed()
          .test('is-file-exist', 'File should be uploaded', () => {
            const file = fileField.current?.files;
            return !file?.length && !imageURL ? false : true;
          })
          .test(
            'is-correct-format',
            'Image sould be one of the next formats: jpg, jpeg, png',
            () => {
              const files = fileField.current?.files;
              const validFormats = ['jpg', 'jpeg', 'png'];
              if (files && files.length) {
                const file = files[0];
                const extension = file.type.split('/')[1];
                return validFormats.includes(extension);
              }
              return true;
            }
          )
          .test('is-correct-size', 'Image sould not be more than 5Mb', () => {
            const files = fileField.current?.files;
            if (files && files.length) {
              const file = files[0];
              const size = file.size / 1024 / 1024;
              return size <= 5;
            }
            return true;
          }),
      })}
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
