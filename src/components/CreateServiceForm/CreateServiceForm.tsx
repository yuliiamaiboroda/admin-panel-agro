import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from 'hooks';
import { createService } from 'redux/services';
import UploadFileField from 'components/UploadFileField';

interface IProps {
  onSubmit?: Function;
}

export default function CreateServiceForm({ onSubmit }: IProps) {
  const fileField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        image: '',
        price: '',
        contactMail: '',
        contactPhone: '',
      }}
      onSubmit={(values, actions) => {
        if (fileField.current?.files) {
          dispatch(
            createService({
              title: values.title,
              description: values.description,
              image: fileField.current?.files[0],
              price: values.price,
              contactMail: values.contactMail,
              contactPhone: values.contactPhone,
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
        <label>
          Price: <Field id="price" name="price" type="text" />
        </label>
        <br />
        <label>
          Contact mail: <Field id="contactMail" name="contactMail" type="text" />
        </label>
        <br />
        <label>
          Contact phone: <Field id="contactPhone" name="contactPhone" type="text" />
        </label>
        <br />
        <button type="submit">Add service</button>
      </Form>
    </Formik>
  );
}
