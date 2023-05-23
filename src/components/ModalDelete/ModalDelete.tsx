interface IProps {
  title: string;
  onClose: () => void;
  handleDelete: () => void;
}
export default function ModalDelete({ title, onClose, handleDelete }: IProps) {
  return (
    <>
      <h2>Ви впевнені, що хочете видалити {title} ?</h2>
      <ul>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete()}
          >
            Видалити
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClose()}
          >
            Скасувати
          </button>
        </li>
      </ul>
    </>
  );
}
