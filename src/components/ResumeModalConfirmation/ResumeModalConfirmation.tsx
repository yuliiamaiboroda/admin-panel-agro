import { useNavigate, useLocation } from 'react-router-dom';
import { removeResume, selectCertainResume } from 'redux/resumes';
import { useAppDispatch, useAppSelector, useModalOutlet } from 'hooks';
import ConfirmationModal from 'components/ConfirmationModal';

export default function ResumeModalConfirmation() {
  const resume = useAppSelector(selectCertainResume);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = location.state?.from ?? '/resumes';

  if (!resume) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeResume(resume.id));
    handleCloseModal('/resumes');
  };

  const handleCancel = () => {
    if (backLinkHref === '/resumes') {
      handleCloseModal(backLinkHref);
    } else {
      navigate(backLinkHref);
    }
  };

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити резюме "${resume.name}"?`}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
}
