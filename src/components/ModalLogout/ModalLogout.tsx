import React from 'react';
import ConfirmationModal from 'components/ConfirmationModal';

interface IProps {
  onClose: () => void;
  handleLogout: () => void;
}

export default function ModalLogout({ onClose, handleLogout }: IProps) {
  return (
    <ConfirmationModal
      title={`Ви дійсно хочете вийти?`}
      onCancel={onClose}
      onConfirm={handleLogout}
    />
  );
}
