import { useAppDispatch } from 'hooks';
import { deleteService } from 'redux/services';

interface IProps {
  title: string;
  imageURL: string;
  onSubmit?: Function;
}

export default function DeleteServiceForm({
  title,
  imageURL,
  onSubmit,
}: IProps) {
  const dispatch = useAppDispatch();

  const id = '645dfb6da9fa27a2baaac600'
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
          dispatch(deleteService(id));
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
