interface IProps {
  title: string;
}

export default function CreateNewAd({ title }: IProps) {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
}
