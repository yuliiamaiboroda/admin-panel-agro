import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { removeFeedbackById } from 'redux/feedbacks';

interface IFeedback {
  _id: string;
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
}
export default function FeedbackCard({
  _id,
  name,
  contactPhone,
  contactMail,
  comment,
  agreement,
}: IFeedback) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = (_id: string) => {
    dispatch(removeFeedbackById(_id));
  };

  return (
    <li>
      <p>
        Ім'я:
        <span>{name}</span>
      </p>
      <p>
        Коментар:
        <span>{comment}</span>
      </p>
      <p>
        Контактний телефон:
        <a href={`tel:${contactPhone}`}>{contactPhone}</a>
      </p>
      <p>
        Контактна пошта:
        <a href={`mailto:${contactMail}`}>{contactMail}</a>
      </p>
      <p>
        Згода на обробку даних:
        <span>{agreement ? 'Надана' : 'Не надана'}</span>
      </p>
      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setIsModalOpen(true)
        }
      >
        Видалити
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalDelete
            onClose={() => setIsModalOpen(false)}
            handleDelete={() => handleDelete(_id)}
            title={`відгук від ${name}`}
          />
        </Modal>
      )}
    </li>
  );
}
