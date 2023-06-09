import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { serviceSchema } from 'helpers/schemas/services';
import UploadFileField from 'components/UploadFileField';
import FormField from 'components/FormField';
import FormButtons from 'components/FormButtons';

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
  contactPhone: '+380',
};

export default function ServiceForm({
  serviceData = SERVICE_DATA,
  onSubmit,
  onCancel,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  const { title, description, imageURL, price, contactMail, contactPhone } =
    serviceData;

  const submitBtnTitle = serviceData === SERVICE_DATA ? 'Створити' : 'Оновити';

  return (
    <>
      <h2>
        {submitBtnTitle} послугу {title ? title : null}
      </h2>
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
            image: fileField.current?.files
              ? fileField.current?.files[0]
              : null,
            price: values.price,
            contactMail: values.contactMail,
            contactPhone: values.contactPhone,
          });
          actions.resetForm();
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormField
              labelName="Заголовок:"
              fieldName="title"
              placeholderName="Заголовок"
            />
            <FormField
              labelName="Опис:"
              placeholderName="Опис"
              fieldName="description"
            />
            <UploadFileField
              label="Завантажити зображення"
              name="image"
              fileRef={fileField}
            />
            <FormField
              labelName="Ціна:"
              placeholderName="Ціна"
              fieldName="price"
            />
            <FormField
              labelName="Контактна пошта:"
              fieldName="contactMail"
              placeholderName="Контактна пошта"
              typeName="email"
            />

            <FormField
              labelName="Контактний номер:"
              placeholderName="Контактний номер"
              fieldName="contactPhone"
            />
            <FormButtons
              onCancel={onCancel}
              onSubmit={handleSubmit}
              cancelButtonText="Відмінити"
              submitButtonText={submitBtnTitle}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
