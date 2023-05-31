import Modal from 'components/Modal';
import ModalDelete from 'components/ModalDelete';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { removeFeedbackById } from 'redux/feedbacks';
export interface IFeedback {
  _id: string;
  name: string;
  comment: string;
  isReviewed: boolean;
  createdAt: string;
}
export default function FeedbackCard({
  _id,
  name,
  isReviewed,
  comment,
  createdAt,
}: IFeedback) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = (_id: string) => {
    dispatch(removeFeedbackById(_id));
  };

  return (
    <li>
      {isReviewed && <h2>New</h2>}
      <p>
        Ім'я:
        <span>{name}</span>
      </p>
      <p>
        Коментар:
        <span>{comment}</span>
      </p>
      <p>
        Створений <span>{createdAt}</span>
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
