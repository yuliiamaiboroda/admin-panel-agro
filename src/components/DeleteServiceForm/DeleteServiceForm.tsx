import { useAppDispatch } from 'hooks';
import { deleteService } from 'redux/services';

interface IProps {
  _id: string;
  title: string;
  imageURL: string;
  onSubmit?: Function;
}

export default function DeleteServiceForm({
  _id,
  title,
  imageURL,
  onSubmit,
}: IProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <h3>Ви впевнені, що хочете видалити оголошення "{title}"?</h3>
      <img src={imageURL} alt={title} width="348" height="222" />
      <br />

      <button
        type="button"
        onClick={() => {
          if (onSubmit) {
            onSubmit();
          }
        }}
      >
        Назад
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch(deleteService(_id));
          if (onSubmit) {
            onSubmit();
          }
        }}
      >
        Видалити
      </button>
    </>
  );
}
