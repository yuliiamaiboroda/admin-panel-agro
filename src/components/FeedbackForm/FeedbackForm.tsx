import FormButtons from 'components/FormButtons';
import FormField from 'components/FormField';
import { Field, Form, Formik } from 'formik';
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
      <h2 style={{ marginBottom: '10px' }}>Відгукнутися</h2>
      <h3 style={{ marginBottom: '10px' }}>
        Вкажіть свої контактні дані і ми надамо зворотній зв’язок
      </h3>
      <Formik
        initialValues={INITIAL_STATE}
        validateOnBlur
        validationSchema={feedbackSchema}
        onSubmit={(values, actions) => {
          dispatch(createFeedback(values));
          onClose();
        }}
      >
        {({ values, handleSubmit }) => (
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <FormField
              fieldName="name"
              labelName="Ім’я"
              placeholderName="Ім’я"
            />
            <FormField
              fieldName="contactPhone"
              labelName="Номер телефону"
              placeholderName="Номер телефону"
              typeName="tel"
            />
            <FormField
              fieldName="contactMail"
              labelName="Email"
              placeholderName="Email"
              typeName="email"
            />
            <FormField
              fieldName="comment"
              placeholderName="Коментар"
              labelName="Коментар"
            />
            <label
              style={{ display: 'flex', gap: '10px', position: 'relative' }}
            >
              <Field id="agreement" name="agreement" type="checkbox" /> Я даю
              згоду на обробку персональних даних
            </label>
            <FormButtons
              onCancel={onClose}
              onSubmit={handleSubmit}
              isDisabled={!values.agreement}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
