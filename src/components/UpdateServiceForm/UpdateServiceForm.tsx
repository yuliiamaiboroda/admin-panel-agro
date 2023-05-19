import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from 'hooks';
import { updateService } from 'redux/services';
import UploadFileField from 'components/UploadFileField';
import createServiceSchema from 'helpers/schemas/services/createService.schema';

interface IProps {
  onSubmit?: Function;
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export default function UpdateServiceForm({
  onSubmit,
  _id,
  title,
  description,
  imageURL,
  price,
  contactMail,
  contactPhone,
}: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

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
      validateOnBlur
      validationSchema={createServiceSchema}
      onSubmit={(values, actions) => {
        if (fileField.current?.files) {
          const { title, description, price, contactMail, contactPhone } =
            values;

          dispatch(
            updateService({
              _id,
              title,
              description,
              image: fileField.current?.files[0],
              price,
              contactMail,
              contactPhone,
            })
          );
        }
        actions.resetForm();

        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <img src={imageURL} alt={title} width="174" height="auto" />
          <br />
          <UploadFileField
            name="image"
            label="Change image: "
            fileRef={fileField}
          />
          <br />
          <label>
            Заголовок:
            <Field id="title" name="title" type="text" />
            {errors.title && touched.title ? <span>{errors.title}</span> : null}
          </label>
          <br />
          <label>
            Опис:
            <Field id="description" name="description" type="text" />
            {errors.description && touched.description ? (
              <span>{errors.description}</span>
            ) : null}
          </label>
          <br />
          <label>
            Ціна: <Field id="price" name="price" type="text" />
            {errors.price && touched.price ? <span>{errors.price}</span> : null}
          </label>
          <br />
          <label>
            Контактна пошта:
            <Field id="contactMail" name="contactMail" type="text" />
            {errors.contactMail && touched.contactMail ? (
              <span>{errors.contactMail}</span>
            ) : null}
          </label>
          <br />
          <label>
            Контактний номер:
            <Field id="contactPhone" name="contactPhone" type="text" />
            {errors.contactPhone && touched.contactPhone ? (
              <span>{errors.contactPhone}</span>
            ) : null}
          </label>
          <br />
          <button type="submit">Оновити послугу</button>
        </Form>
      )}
    </Formik>
  );
}
