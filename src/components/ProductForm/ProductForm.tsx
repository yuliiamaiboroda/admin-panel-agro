import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { productSchema } from 'helpers/schemas/products';
import UploadFileField from 'components/UploadFileField';
import FormField from 'components/FormField';
import FormButtons from 'components/FormButtons';
import TextareaField from 'components/TextareaField';
import FormTitle from 'components/FormTitle';

interface IProductState {
  title: string;
  description: string;
  image: File | null;
  price: string;
  contactMail: string;
  contactPhone: string;
}

interface IProps {
  productData?: {
    title: string;
    description: string;
    imageURL?: string;
    price: string;
    contactMail: string;
    contactPhone: string;
  };
  onSubmit: (values: IProductState) => void;
  onCancel: () => void;
}

const PRODUCT_DATA = {
  title: '',
  description: '',
  price: '',
  contactMail: '',
  contactPhone: '+380',
};

export default function ProductForm({
  productData = PRODUCT_DATA,
  onSubmit,
  onCancel,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);

  const { title, description, imageURL, price, contactMail, contactPhone } =
    productData;

  const submitBtnTitle = productData === PRODUCT_DATA ? 'Створити' : 'Оновити';

  return (
    <>
      <FormTitle title={`${submitBtnTitle} продукт ${title ? title : ''}`} />
      <Formik
        initialValues={{
          title,
          description,
          image: '',
          price,
          contactMail,
          contactPhone,
        }}
        validationSchema={productSchema(fileField, imageURL)}
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
              labelName="Заголовок "
              fieldName="title"
              placeholderName="Заголовок "
            />

            <TextareaField
              labelName="Опис"
              fieldName="description"
              placeholderName="Опис"
            />
            <UploadFileField name="image" fileRef={fileField} />
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
