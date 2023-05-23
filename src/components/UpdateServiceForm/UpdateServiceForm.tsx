import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from 'hooks';
import { updateService } from 'redux/services';
import UploadFileField from 'components/UploadFileField';

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
          Title:
          <Field id="title" name="title" type="text" />
        </label>
        <br />
        <label>
          Description:
          <Field id="description" name="description" type="text" />
        </label>
        <br />
        <label>
          Price: <Field id="price" name="price" type="text" />
        </label>
        <br />
        <label>
          Contact mail:
          <Field id="contactMail" name="contactMail" type="text" />
        </label>
        <br />
        <label>
          Contact phone:
          <Field id="contactPhone" name="contactPhone" type="text" />
        </label>
        <br />
        <button type="submit">Update service</button>
      </Form>
    </Formik>
  );
}
