interface IProps {
  title: string;
  onClose: () => void;
  handleDelete: () => void;
}
export default function ModalDelete({ title, onClose, handleDelete }: IProps) {
  return (
    <>
      <h2>Are u sure want to delete {title}</h2>
      <ul>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClose()}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete()}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}
