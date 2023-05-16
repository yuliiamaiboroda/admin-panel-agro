interface IProps {
  title?: string;
  onClick: () => void;
}

export default function CreateNewAd({
  title = 'Створити нове оголошення',
  onClick,
}: IProps) {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
}
