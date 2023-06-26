import { Field, Form, Formik, ErrorMessage } from 'formik';
import { feedbackSchema } from 'helpers/schemas/feedbacks';
import { useAppDispatch } from 'hooks';
import { createFeedback } from 'redux/feedbacks';

interface IFeedback {
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
}

const INITIAL_STATE: IFeedback = {
  name: '',
  comment: '',
  contactMail: '',
  contactPhone: '',
  agreement: false,
};

interface IProps {
  onClose: () => void;
}

export default function FeedbackForm({ onClose }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>Відгукнутися</h2>
      <h3>Вкажіть свої контактні дані і ми надамо зворотній зв’язок</h3>
      <Formik
        initialValues={INITIAL_STATE}
        validateOnBlur
        validationSchema={feedbackSchema}
        onSubmit={(values, actions) => {
          dispatch(createFeedback(values));
          onClose();
        }}
      >
        {({ values }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <label>
              <Field name="name" type="text" id="name" placeholder="Ім’я" />
              <ErrorMessage name="name" />
            </label>
            <label>
              <Field
                name="contactPhone"
                type="tel"
                id="contactPhone"
                placeholder="Номер телефону"
              />
              <ErrorMessage name="contactPhone" />
            </label>
            <label>
              <Field
                name="contactMail"
                type="email"
                id="contactMail"
                placeholder="Email"
              />
              <ErrorMessage name="contactMail" />
            </label>
            <label>
              <Field
                name="comment"
                type="text"
                id="comment"
                placeholder="Коментар"
              />
              <ErrorMessage name="comment" />
            </label>
            <label>
              <Field id="agreement" name="agreement" type="checkbox" /> Я даю
              згоду на обробку персональних даних
              <ErrorMessage name="agreement" />
            </label>
            <button type="submit" disabled={!values.agreement}>
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
