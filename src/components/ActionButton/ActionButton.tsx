interface IProps {
	title?: 'Видалити' | 'Змінити';
	onClick: () => void;
  }
  
  export default function ActionButton({
	title = 'Видалити',
	onClick,
  }: IProps) {
	return (
	  <div>
		<button onClick={onClick}>{title}</button>
	  </div>
	);
  }
  