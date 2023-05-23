import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { serviceSchema } from 'helpers/schemas/services';
import UploadFileField from 'components/UploadFileField';

interface IServiceState {
  title: string;
  description: string;
  image: File | null;
  price: string;
  contactMail: string;
  contactPhone: string;
}

interface IProps {
  serviceData?: {
    title: string;
    description: string;
    imageURL?: string;
    price: string;
    contactMail: string;
    contactPhone: string;
  };
  onSubmit: (values: IServiceState) => void;
  onCancel: () => void;
}

const SERVICE_DATA = {
  title: '',
  description: '',
  price: '',
  contactMail: '',
  contactPhone: '',
};

export default function ServiceForm({
  serviceData = SERVICE_DATA,
  onSubmit,
  onCancel,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  const { title, description, imageURL, price, contactMail, contactPhone } =
    serviceData;

  return (
    <Formik
      initialValues={{
        title,
        description,
        image: '',
        price,
        contactMail,
        contactPhone,
      }}
      validationSchema={serviceSchema(fileField, imageURL)}
      onSubmit={(values, actions) => {
        onSubmit({
          title: values.title,
          description: values.description,
          image: fileField.current?.files ? fileField.current?.files[0] : null,
          price: values.price,
          contactMail: values.contactMail,
          contactPhone: values.contactPhone,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Заголовок: <Field id="title" name="title" type="text" />
          <ErrorMessage name="title" />
        </label>
        <br />
        <label>
          Опис: <Field id="description" name="description" type="text" />
          <ErrorMessage name="description" />
        </label>
        <br />
        <UploadFileField name="image" fileRef={fileField} />
        <br />
        <label>
          Ціна: <Field id="price" name="price" type="text" />
          <ErrorMessage name="price" />
        </label>
        <br />
        <label>
          Контактна пошта:
          <Field id="contactMail" name="contactMail" type="text" />
          <ErrorMessage name="contactMail" />
        </label>
        <br />
        <label>
          Контактний номер:
          <Field id="contactPhone" name="contactPhone" type="text" />
          <ErrorMessage name="contactPhone" />
        </label>
        <br />
        <button type="button" onClick={onCancel}>
          Назад
        </button>
        <button type="submit">Додати послугу</button>
      </Form>
    </Formik>
  );
}
