import React from 'react';

interface IProps {
  onClose: () => void;
  handleLogout: () => void;
}

export default function ModalLogout({ onClose, handleLogout }: IProps) {
  return (
    <div>
      <h2>Ви впевнені, що хочете вийти?</h2>
      <ul>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogout()}
          >
            вихід
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClose()}
          >
            скасувати
          </button>
        </li>
      </ul>
    </div>
  );
}
